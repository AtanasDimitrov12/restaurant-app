import { Mongo } from 'meteor/mongo';
import { Reservation, WaitingListEntry } from './types';


export const Reservations = new Mongo.Collection<Reservation>('reservations');
export const WaitingList = new Mongo.Collection<WaitingListEntry>('waitingList');
