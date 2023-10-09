import React from 'react';
import NavBar from './NavBar';
import { Box, Grid, TextField, Typography } from '@mui/material';
import wood from '../photo/wood.jpg';
import black from '../photo/black.jpg';
import black1 from '../photo/black1.jpg';
import './Contact.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import wine from '../photo/wine.jpg';
import noddles from '../photo/noddles.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  const formControl = {
    fontSize: '15px',
    width: ' 40%',
    padding: '10px 10px',
    border: 'none',
    backgroundColor: '#161616',
    marginBottom: '20px',
    borderBottom: '1px solid var(--grey)',
    borderRadius: '1px',
    outline: 'transparent',
    color: 'var(--grey)',
  };
  const btn = {
    color: '#f9f9f9',
    backgroundColor: '#e0a745',
    border: 'none',
    fontSize: '14px',
    padding: '12px var(--sm-spacing)',
    borderRadius: ' 20px',
    marginTop: ' 10px',
    cursor: ' pointer',
    height: '50px',
  };
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
          Contact Us
        </Typography>
      </Box>
      {/* second page */}
      <Box
        sx={{
          backgroundImage: `url(${black})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '85vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'row',
          columnGap: '100px',
          paddingLeft: '200px',
          paddingTop: '150px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
          }}
        >
          <Typography variant="h4">Contact Information</Typography>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <Typography>Address:</Typography>
            <Typography sx={{ color: 'gray' }}>
              198 West 2th street, Suite 721 New Yark NY 10018
            </Typography>
          </Grid>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <Typography>Phone:</Typography>
            <Typography sx={{ color: '#e0a745' }}>+123456789</Typography>
          </Grid>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <Typography>Email:</Typography>
            <Typography sx={{ color: '#e0a745' }}>
              {' '}
              info@yoursite.com
            </Typography>
          </Grid>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <Typography>Website:</Typography>
            <Typography sx={{ color: '#e0a745' }}>yoursite.com</Typography>
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <input type="text" style={formControl} placeholder="Name" />
            <input type="text" style={formControl} placeholder="Email" />
          </Grid>
          <input type="text" style={formControl} placeholder="Subject" />
          <textarea type="text" style={formControl} placeholder="Message" />
          <button style={btn}>Send Message</button>
        </Box>
      </Box>
      {/* third page */}
      <Box
        sx={{
          backgroundImage: `url(${black1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'row',

            columnGap: '100px',
          }}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}
          >
            <Typography variant="h6">ABOUT US</Typography>
            <Typography sx={{ color: '#838585' }}>
              Far far away, behind the word <br />
              mountains, far from the <br /> countries Vokalia and <br />{' '}
              Consonantia, there live the <br />
              blind texts.
            </Typography>
            <Grid
              sx={{ display: 'flex', flexDirection: 'row', columnGap: '30px' }}
            >
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
            </Grid>
          </Box>

          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}
          >
            <Typography variant="h6">RECENT BLOG</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
              }}
            >
              <Box
                sx={{
                  color: '#838585',
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '20px',
                }}
              >
                <Grid>
                  <img
                    src={noddles}
                    alt="image"
                    width={'60px'}
                    height={'70px'}
                  />
                </Grid>
                <Box>
                  <Typography>
                    Even the all-powerful Pointing has <br />
                    no control about
                  </Typography>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      columnGap: '10px',
                    }}
                  >
                    <CalendarMonthIcon />
                    <Typography>Sept 15, 2018</Typography> <PersonIcon />
                    <Typography>Admin</Typography> <MessageIcon />
                    <Typography>19</Typography>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  color: '#838585',
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '20px',
                }}
              >
                <Grid>
                  <img src={wine} alt="image" width={'60px'} height={'70px'} />
                </Grid>
                <Box>
                  <Typography>
                    Even the all-powerful Pointing has <br />
                    no control about
                  </Typography>
                  <Grid
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      columnGap: '10px',
                    }}
                  >
                    <CalendarMonthIcon />
                    <Typography>Sept 15, 2018</Typography> <PersonIcon />
                    <Typography>Admin</Typography> <MessageIcon />
                    <Typography>19</Typography>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}
          >
            <Typography variant="h6">SERVICES</Typography>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                color: '#838585',
              }}
            >
              <Typography>Cooked</Typography>
              <Typography>Deliver</Typography>
              <Typography>Quality food</Typography>
              <Typography>Mixed</Typography>
            </Grid>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}
          >
            <Typography variant="h6">HAVE A QUESTIONS?</Typography>
            <Box sx={{ color: '#838585' }}>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '20px',
                }}
              >
                <FmdGoodIcon />
                <Typography>
                  203 Fake St. Mountain View,
                  <br /> San Francisco, California,
                  <br /> USA
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '20px',
                }}
              >
                <LocalPhoneIcon />
                <Typography>+2 392 3929 210</Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: '20px',
                }}
              >
                <EmailIcon />
                <Typography>info@yourdomain.com</Typography>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
