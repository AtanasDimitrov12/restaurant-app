import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

export const BookingPage: React.FC = () => {
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [partySize, setPartySize] = useState<number>(2);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = () => {
    Meteor.call(
      'createReservation',
      { date, timeSlot, partySize, customerName, customerEmail },
      (err: Meteor.Error | undefined, res: any) => {
        if (err) {
          if (err.error === 'slot-full') {
            setMessage('Slot is full. Adding you to the waiting list...');
            handleAddToWaitingList();
          } else {
            setMessage(err.reason || 'Error occurred.');
          }
        } else {
          setMessage('Reservation confirmed!');
        }
      }
    );
  };

  const handleAddToWaitingList = () => {
    Meteor.call(
      'addToWaitingList',
      {
        date,
        timeSlot,
        partySize,
        customerName,
        customerEmail,
        flexibilityRange: '18:00-21:00',
      },
      (err: Meteor.Error | undefined, res: any) => {
        if (err) {
          setMessage(err.reason || 'Error occurred.');
        } else {
          setMessage('Added to waiting list!');
        }
      }
    );
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Book a Table</Typography>

      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Time Slot"
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Party Size"
        type="number"
        value={partySize}
        onChange={(e) => setPartySize(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <TextField
        label="Customer Email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        fullWidth
        sx={{ mb: 3 }}
      />

      <Button variant="contained" onClick={handleBooking}>Book Table</Button>

      {message && (
        <Alert severity="info" sx={{ mt: 3 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
};
