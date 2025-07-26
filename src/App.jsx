import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
} from '@mui/material';

import wtwImage from '../assets/wtw_bg.jpg';


function App() {
    return (
      <Box>
        {/* Navbar */}
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              WTW • Worth Your Wallet
            </Typography>
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
  
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: '100vh',
            backgroundImage: `url(${wtwImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scaleX(-1)', // flip image
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 4,
          }}
        >
          {/* Text Overlay (not flipped) */}
          <Box
            sx={{
              transform: 'scaleX(-1)', // flip text back
              maxWidth: '600px',
              color: 'white',
              textAlign: 'left',
              backgroundColor: 'rgba(0,0,0,0.5)',
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              your AI spending therapist
            </Typography>
  
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              Meet Your<br />Spending Therapist
            </Typography>
  
            <Typography variant="body1" sx={{ mb: 4 }}>
              WTW questions your impulses, learns your patterns, and protects your future self from regret.
            </Typography>
  
            <Button variant="contained" size="large" color="primary">
              TRY IT NOW
            </Button>
          </Box>
        </Box>
      </Box>
    );
  } 

export default App;
