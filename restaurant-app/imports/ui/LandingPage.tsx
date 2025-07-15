import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { Link } from 'react-router-dom';

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
          py: 2,
          height: '150px',             // shorter height
          display: 'flex',
          alignItems: 'flex-start',    // push content to top
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            mt: 2,                      // move it down slightly if needed
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
            <Link to="/booking" style={{ textDecoration: 'none' }}>
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
            <Link to="/booking" style={{ textDecoration: 'none' }}>
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
            <Link to="/booking" style={{ textDecoration: 'none' }}>
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
          <Link to="/booking" style={{ textDecoration: 'none' }}>
            About Us
          </Link>
          <Link to="/booking" style={{ textDecoration: 'none' }}>
            Contact
          </Link>
          <Link to="/booking" style={{ textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link to="/booking" style={{ textDecoration: 'none' }}>
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
