import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletePizza } from './store/slice/userSlice';

function SingleCart({ item, setTotalAmount, totalAmount }) {
  const [qty, setQty] = useState(1);

  let dispatch = useDispatch();
  const removeQty = (pizza) => {
    if (qty > 1) {
      setQty(qty - 1);
    }
    setTotalAmount(totalAmount - Number(item.price));
  };
  const addQty = (pizza) => {
    setQty(qty + 1);
    setTotalAmount(totalAmount + Number(item.price));
  };
  const removeHandler = (delPizza) => {

    dispatch(deletePizza(delPizza));

   
  };
  const btn = {
    color: '#f9f9f9',
    backgroundColor: '#dc002d',
    border: 'none',
    fontSize: '14px',
    padding: '12px var(--sm-spacing)',
    borderRadius: ' 8px',
    marginTop: ' 10px',
    cursor: ' pointer',
    height: '30px',
  };
  return (
    <Box>
      <Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ color: '#e0a745' }}>Pizza Name:</Typography>
          <Typography>{item.pizzaname}</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ color: '#e0a745' }}>Pizza price:</Typography>
          <Typography>{item.price * qty}</Typography>
        </Grid>

        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '10px',
          }}
        >
          <Typography sx={{ color: '#e0a745' }}>Qty</Typography>
          <button onClick={() => removeQty(item)}>-</button>

          <Typography>{qty}</Typography>
          <button onClick={() => addQty(item)}>+</button>
        </Grid>
        <button onClick={() => removeHandler(item)} style={btn}>
          Remove Pizza
        </button>
        <br />
      </Grid>
    </Box>
  );
}

export default SingleCart;
