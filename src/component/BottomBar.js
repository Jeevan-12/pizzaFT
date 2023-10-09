import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function BottomBar() {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '50px',
            backgroundColor: '#121618',
            height: '100px',
            alignItems: 'center',
            paddingLeft: '100px',
            color: 'white',
            width: '80%',
          }}
        >
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <PhoneIcon sx={{ color: '#e0a745' }} />
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
              }}
            >
              <Typography>000(123)4567890</Typography>
              <Typography>A Small river named Duden flows</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <LocationOnIcon sx={{ color: '#e0a745' }} />
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
            >
              <Typography>198 West 2th Street</Typography>

              <Typography>Suite 721 Ne yark NY 10016</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '10px' }}
          >
            <AccessAlarmIcon sx={{ color: '#e0a745' }} />
            <Grid
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}
            >
              <Typography>Open monday-Friday</Typography>
              <Typography>8.00am-9.00pm</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: '#e0a745',
            width: '20%',
            display: 'flex',
            flexDirection: 'row',
            columnGap: '20px',
            alignItems: 'center',
            paddingLeft: '20px',
          }}
        >
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
        </Box>
      </Box>
    </div>
  );
}

export default BottomBar;
