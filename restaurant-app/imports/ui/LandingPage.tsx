import React from 'react';
import { Box, Typography, Link, Button, IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

export const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f5f5f5',
      }}
    >
      {/* HEADER */}
      <Box
  sx={{
    background: 'linear-gradient(to bottom, #001F3F 50%, #f5f5f5 100%)',
    color: '#fff',
    textAlign: 'center',
    py: 6,
  }}
>
  <Typography
    variant="h3"
    fontWeight="bold"
    sx={{
      background: 'linear-gradient(to bottom, #f5f5f5, #001F3F)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Foodie
  </Typography>
</Box>


      {/* ICONS SECTION */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          py: 8,
        }}
      >
        <Box sx={{ textAlign: 'center', width: { xs: '100%', sm: '200px' } }}>
          <IconButton
            href="#"
            sx={{
              fontSize: 120,
              color: '#001F3F',
              '&:hover': {
                color: '#007BFF',
                transform: 'scale(1.2)',
              },
            }}
          >
            <CalendarMonthIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h6" sx={{ mt: 2 }}>
            <Link href="#" underline="hover">
              Book a table
            </Link>
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', width: { xs: '100%', sm: '200px' } }}>
          <IconButton
            href="#"
            sx={{
              fontSize: 120,
              color: '#001F3F',
              '&:hover': {
                color: '#007BFF',
                transform: 'scale(1.2)',
              },
            }}
          >
            <DeliveryDiningIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h6" sx={{ mt: 2 }}>
            <Link href="#" underline="hover">
              Order for home
            </Link>
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', width: { xs: '100%', sm: '200px' } }}>
          <IconButton
            href="#"
            sx={{
              fontSize: 120,
              color: '#001F3F',
              '&:hover': {
                color: '#007BFF',
                transform: 'scale(1.2)',
              },
            }}
          >
            <QrCodeScannerIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h6" sx={{ mt: 2 }}>
            <Link href="#" underline="hover">
              Scan & order
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          background: '#001F3F',
          color: '#fff',
          textAlign: 'center',
          py: 3,
          mt: 'auto',
        }}
      >
        <Box sx={{ mt: 3 }}>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 2 }}>
            About Us
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 2 }}>
            Contact
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 2 }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" color="inherit" sx={{ mx: 2 }}>
            Terms of Service
          </Link>
        </Box>
        <Typography sx={{ mt: 2 }} variant="body2">
          © 2025 Foodie. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
