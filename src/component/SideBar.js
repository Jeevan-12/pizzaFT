import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function SideBar() {
  return (
    <Box sx={{ width: '15%', backgroundColor: 'gray', height: '100vh' }}>
      <Box>
        <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '5px' }}>
          <HomeIcon />
          <Typography>Home</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '5px' }}>
          <ShoppingCartIcon />
          <Typography>Products</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '5px' }}>
          <RateReviewIcon />
          <Typography>Review</Typography>
        </Grid>{' '}
        <Grid sx={{ display: 'flex', flexDirection: 'row', columnGap: '5px' }}>
          <ThumbUpIcon />
          <Typography>Facility</Typography>
        </Grid>
      </Box>
    </Box>
  );
}

export default SideBar;
