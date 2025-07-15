import { Mongo } from 'meteor/mongo';

export interface Reservation {
  _id?: string;
  date: string;
  timeSlot: string;
  partySize: number;
  customerName: string;
  customerEmail: string;
  createdAt: Date;
  confirmed: boolean;
}

export interface WaitingListEntry {
  _id?: string;
  date: string;
  timeSlot: string;
  partySize: number;
  customerName: string;
  customerEmail: string;
  flexibilityRange?: string;
  revenueScore: number;
  createdAt: Date;
}

export const Reservations = new Mongo.Collection<Reservation>('reservations');
export const WaitingList = new Mongo.Collection<WaitingListEntry>('waitingList');
