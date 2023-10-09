import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import black1 from '../photo/black1.jpg';
import wood from '../photo/wood.jpg';
import res from '../photo/res.jpg';
import cf1 from '../photo/cf1.jpg';
import cf2 from '../photo/cf2.jpg';
import cf3 from '../photo/cf3.jpg';
import cf4 from '../photo/cf4.jpg';
import rs1 from '../photo/rs1.jpg';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

function About() {
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
          About us
        </Typography>
      </Box>
      {/* second page */}
      <Box
        sx={{
          backgroundImage: `url(${black1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '150vh',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '70px' }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '200px' }}
          >
            <img src={res} alt="image" width={'40%'} />

            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '30px',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '30px', color: '#e0a745' }}>
                WELCOME TO PIZZA RESTAURANT
              </Typography>
              <Typography sx={{ color: '#838585' }}>
                On her way she met a copy. The copy warned the Little Blind
                <br />
                Text, that where it came from it would have been rewritten a{' '}
                <br />
                thousand times and everything that was left from its origin{' '}
                <br />
                would be the word "and" and the Little Blind Text should turn{' '}
                <br />
                around and return to its own, safe country. But nothing the copy{' '}
                <br />
                said could convince her and so it didn’t take long until a few{' '}
                <br />
                insidious Copy Writers ambushed her, made her drunk with Longe{' '}
                <br />
                and Parole and dragged her into their agency, where they abused{' '}
                <br />
                her for their.
              </Typography>
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '30px',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Typography sx={{ fontSize: '30px' }}>OUR CHEF</Typography>
            <Typography sx={{ color: '#838585' }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}
            >
              <Box
                sx={{
                  width: '250px',
                  height: '400px',
                  border: '1px solid #e0a745',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '15px',
                }}
              >
                <img
                  src={cf1}
                  alt="image"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                  }}
                />
                <Typography sx={{ color: '#e0a745' }}>TOM SMITH</Typography>
                <Typography>Hair Specialist</Typography>
                <Typography sx={{ color: '#838585' }}>
                  Far far away, behind the
                  <br /> word mountains, far from <br />
                  the countries Vokalia and <br />
                  Consonantia, there live the <br />
                  blind texts.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '250px',
                  height: '400px',
                  border: '1px solid #e0a745',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '15px',
                }}
              >
                <img
                  src={cf2}
                  alt="image"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                  }}
                />
                <Typography sx={{ color: '#e0a745' }}>MARK WILSON</Typography>
                <Typography>Beard Specialist</Typography>
                <Typography sx={{ color: '#838585' }}>
                  Far far away, behind the
                  <br /> word mountains, far from <br />
                  the countries Vokalia and <br />
                  Consonantia, there live the <br />
                  blind texts.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '250px',
                  height: '400px',
                  border: '1px solid #e0a745',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '15px',
                }}
              >
                <img
                  src={cf3}
                  alt="image"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                  }}
                />
                <Typography sx={{ color: '#e0a745' }}>
                  PATRICK JACOBSON
                </Typography>
                <Typography>Hair Specialist</Typography>
                <Typography sx={{ color: '#838585' }}>
                  Far far away, behind the
                  <br /> word mountains, far from <br />
                  the countries Vokalia and <br />
                  Consonantia, there live the <br />
                  blind texts.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '250px',
                  height: '400px',
                  border: '1px solid #e0a745',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '15px',
                }}
              >
                <img
                  src={cf4}
                  alt="image"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                  }}
                />
                <Typography sx={{ color: '#e0a745' }}>
                  IVAN DORCHSNER
                </Typography>
                <Typography>Hair Specialist</Typography>
                <Typography sx={{ color: '#838585' }}>
                  Far far away, behind the
                  <br /> word mountains, far from <br />
                  the countries Vokalia and <br />
                  Consonantia, there live the <br />
                  blind texts.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${black1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          color: 'white',
          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          columnGap: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LocalPizzaIcon
            sx={{
              color: '#e0a745',
              fontSize: 70,
              border: '2px solid #e0a745 ',
              // padding: '10px',
              borderRadius: '5px',
            }}
          />
          <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
            100
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>Pizza Branches</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MilitaryTechIcon
            sx={{
              color: '#e0a745',
              fontSize: 70,
              border: '2px solid #e0a745 ',
              borderRadius: '5px',
            }}
          />
          <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
            85
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>Number of Awards</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GroupsIcon
            sx={{
              color: '#e0a745',
              fontSize: 70,
              border: '2px solid #e0a745 ',
              borderRadius: '5px',
            }}
          />
          <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
            10,567
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>Happy Customer</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '5px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PersonIcon
            sx={{
              color: '#e0a745',
              fontSize: 70,
              border: '2px solid #e0a745 ',
              borderRadius: '5px',
            }}
          />
          <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
            900
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>Staff</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
