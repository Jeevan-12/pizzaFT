import { Box, Typography } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import wood from '../photo/wood.jpg';
import y1 from '../photo/y3.jpg';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

function Service() {
  return (
    <Box>
      <NavBar />
      {/* first page */}
      <Box
        sx={{
          backgroundImage: `url(${wood})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontFamily: 'inherit', fontSize: '60px' }}>
          Services
        </Typography>
      </Box>
      {/* second page */}
      <Box
        sx={{
          backgroundImage: `url(${y1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '40px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '30px', color: 'black' }}>
              OUR SERVICES
            </Typography>
            <Typography
              sx={{
                color: '#845f1c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and
              <br /> Consonantia, there live the blind texts.
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', columnGap: '50px' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FastfoodIcon
                  sx={{
                    color: '#e0a745',
                    fontSize: 70,
                    border: '2px solid #e0a745 ',
                    borderRadius: '5px',
                  }}
                />
                <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
                  HEALTHY FOODS
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    textAlign: 'center',
                    color: '#845f1c',
                  }}
                >
                  Even the all-powerful Pointing has no control
                  <br /> about the blind texts it is an almost <br />
                  unorthographic.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <DeliveryDiningIcon
                  sx={{
                    color: '#e0a745',
                    fontSize: 70,
                    border: '2px solid #e0a745 ',
                    borderRadius: '5px',
                  }}
                />
                <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
                  FASTEST DELIVERY
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    textAlign: 'center',
                    color: '#845f1c',
                  }}
                >
                  Even the all-powerful Pointing has no control
                  <br /> about the blind texts it is an almost <br />
                  unorthographic.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocalPizzaIcon
                  sx={{
                    color: '#e0a745',
                    fontSize: 70,
                    border: '2px solid #e0a745 ',
                    borderRadius: '5px',
                  }}
                />
                <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
                  ORIGINAL RECIPES
                </Typography>
                <Typography
                  sx={{
                    display: 'flex',
                    textAlign: 'center',
                    color: '#845f1c',
                  }}
                >
                  Even the all-powerful Pointing has no control
                  <br /> about the blind texts it is an almost <br />
                  unorthographic.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Service;
