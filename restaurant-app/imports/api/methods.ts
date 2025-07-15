import { Meteor } from 'meteor/meteor';
import { Reservations, WaitingList, Reservation, WaitingListEntry } from './collections';

Meteor.methods({
  'createReservation'(data: {
    date: string;
    timeSlot: string;
    partySize: number;
    customerName: string;
    customerEmail: string;
  }): { success: boolean } {
    const { date, timeSlot } = data;

    const existing = Reservations.findOne({ date, timeSlot });
    if (existing) {
      throw new Meteor.Error('slot-full', 'Slot already booked');
    }

    const newReservation: Reservation = {
      ...data,
      createdAt: new Date(),
      confirmed: true,
    };

    Reservations.insert(newReservation);

    return { success: true };
  },

  'addToWaitingList'(data: {
    date: string;
    timeSlot: string;
    partySize: number;
    customerName: string;
    customerEmail: string;
    flexibilityRange?: string;
  }): { success: boolean } {
    const revenueScore =
      data.partySize * 40 + (data.flexibilityRange ? 50 : 0);

    const entry: WaitingListEntry = {
      ...data,
      revenueScore,
      createdAt: new Date(),
    };

    WaitingList.insert(entry);

    return { success: true };
  },

  'cancelReservation'(reservationId: string): { success: boolean } {
    const reservation = Reservations.findOne(reservationId);
    if (!reservation) {
      throw new Meteor.Error('not-found', 'Reservation not found');
    }

    Reservations.remove(reservationId);

    const bestMatch = WaitingList.findOne(
      { date: reservation.date, timeSlot: reservation.timeSlot },
      { sort: { revenueScore: -1, createdAt: 1 } }
    );

    if (bestMatch) {
      Reservations.insert({
        ...bestMatch,
        createdAt: new Date(),
        confirmed: true,
      });

      WaitingList.remove(bestMatch._id!);
    }

    return { success: true };
  },
});
