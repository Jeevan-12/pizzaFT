import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material/';
import { useNavigate } from 'react-router-dom';

import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

function NavBar() {
  const navigate = useNavigate();
  const homePage = () => {
    navigate('/');
  };
  const contactPage = () => {
    navigate('/contact');
  };
  const About = () => {
    navigate('/about');
  };
  const Service = () => {
    navigate('/service');
  };
  const Blog = () => {
    navigate('/blog');
  };
  const Menu = () => {
    navigate('/menu');
  };
  const cart = () => {
    navigate('/cart');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '500px',
        backgroundColor: '#121618',
        position: 'fixed',
        height: '100px',
        width: '100%',
        alignItems: 'center',
        paddingLeft: '250px',
      }}
    >
      {/* left side */}
      <Box>
        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
          <LocalPizzaIcon sx={{ color: '#e0a745', fontSize: 40 }} />
          <Grid>
            <Typography
              sx={{ color: 'white', fontFamily: 'cursive', fontSize: '25px' }}
            >
              Pizza
            </Typography>

            <Typography sx={{ color: '#e0a745', fontSize: '20px' }}>
              Delicious
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* right side */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '50px',
          color: 'white',
        }}
      >
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={homePage}
        >
          Home
        </Typography>
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={Menu}
        >
          Menu
        </Typography>
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={Service}
        >
          Services
        </Typography>
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={Blog}
        >
          Blog
        </Typography>
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={About}
        >
          About
        </Typography>
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={contactPage}
        >
          Contact
        </Typography>
        <Typography
          sx={{
            '&:hover': {
              color: '#e0a745',
              cursor: 'pointer',
            },
          }}
          onClick={cart}
        >
          Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default NavBar;
