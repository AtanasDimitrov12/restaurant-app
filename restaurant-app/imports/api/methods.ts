import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reservations, WaitingList } from './collections';
import { Reservation, WaitingListEntry } from './types';

// Helper to parse HH:mm to Date object
const parseTime = (dateStr: string, timeStr: string): Date => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date(dateStr);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

Meteor.methods({
  async createReservation(data: {
    date: string;
    timeSlot: string;
    partySize: number;
    customerName: string;
    customerEmail: string;
  }): Promise<{ success: boolean }> {
    check(data.date, String);
    check(data.timeSlot, String);
    check(data.partySize, Number);
    check(data.customerName, String);
    check(data.customerEmail, String);

    const reservationDuration = 90; // minutes
    const requestedStart = parseTime(data.date, data.timeSlot);
    const requestedEnd = new Date(requestedStart.getTime() + reservationDuration * 60000);

    // Find overlapping reservations on the same date
    const overlapping = await Reservations.findOneAsync({
      date: data.date,
      $expr: {
        $lt: [
          { $toDate: { $concat: [data.date, 'T', '$timeSlot'] } }, // Convert to Date for comparison
          requestedEnd,
        ],
      },
    });

    if (overlapping) {
      throw new Meteor.Error('slot-full', 'Time slot overlaps with another reservation');
    }

    const newReservation: Reservation = {
      ...data,
      createdAt: new Date(),
      confirmed: true,
    };

    await Reservations.insertAsync(newReservation);

    return { success: true };
  },

  async addToWaitingList(data: {
    date: string;
    timeSlot: string;
    partySize: number;
    customerName: string;
    customerEmail: string;
    flexibilityRange?: string;
  }): Promise<{ success: boolean }> {
    const revenueScore = data.partySize * 40 + (data.flexibilityRange ? 50 : 0);

    const entry: WaitingListEntry = {
      ...data,
      revenueScore,
      createdAt: new Date(),
    };

    await WaitingList.insertAsync(entry);

    return { success: true };
  },

  async cancelReservation(reservationId: string): Promise<{ success: boolean }> {
    check(reservationId, String);

    const reservation = await Reservations.findOneAsync(reservationId);
    if (!reservation) {
      throw new Meteor.Error('not-found', 'Reservation not found');
    }

    await Reservations.removeAsync(reservationId);

    const bestMatch = await WaitingList.findOneAsync(
      { date: reservation.date, timeSlot: reservation.timeSlot },
      { sort: { revenueScore: -1, createdAt: 1 } }
    );

    if (bestMatch) {
      const reassignedReservation: Reservation = {
        date: bestMatch.date,
        timeSlot: bestMatch.timeSlot,
        partySize: bestMatch.partySize,
        customerName: bestMatch.customerName,
        customerEmail: bestMatch.customerEmail,
        confirmed: true,
        createdAt: new Date(),
      };

      await Reservations.insertAsync(reassignedReservation);
      await WaitingList.removeAsync(bestMatch._id!);
    }

    return { success: true };
  }
});
