import { Box, Typography } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import bc from '../photo/black1.jpg';

function OrderPlaced() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${bc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: '50px',
        }}
      >
        <Typography
          sx={{ fontFamily: 'inherit', fontSize: '50px', color: '#e0a745' }}
        >
          Your Order is Placed
        </Typography>
      </Box>
    </Box>
  );
}

export default OrderPlaced;
