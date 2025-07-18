export interface Reservation {
  date: string;
  timeSlot: string; // Still useful for display
  partySize: number;
  customerName: string;
  customerEmail: string;
  startTime: Date;
  endTime: Date;
  confirmed: boolean;
  createdAt: Date;
}

export interface WaitingListEntry {
  date: string;
  timeSlot: string;
  partySize: number;
  customerName: string;
  customerEmail: string;
  flexibilityRange?: string;
  revenueScore: number;
  createdAt: Date;
  _id?: string;
}
