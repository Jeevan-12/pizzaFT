import React from 'react';
import NavBar from './NavBar';

import { Box, Grid, Typography } from '@mui/material';
import wood from '../photo/wood.jpg';
import BottomBar from './BottomBar';

function Home() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${wood})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '86vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '200px',
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: '#e0a745', fontFamily: 'cursive' }}
          >
            welcome
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: 'initial',
                fontSize: '80px',
                fontWeight: 'bold',
              }}
            >
              we cooked your desired pizza recipe
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '25px' }}>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </Typography>
        </Box>
      </Box>
      <BottomBar />
    </Box>
  );
}

export default Home;
