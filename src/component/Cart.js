import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Box, Grid, Typography } from '@mui/material';
import black1 from '../photo/black1.jpg';
import { useSelector } from 'react-redux';
import SingleCart from './SingleCart';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [totalAmount, setTotalAmount] = useState();
  const cartItems = useSelector((state) => {
    return state.user;
  });

  let navigate = useNavigate();
  let placeOrder = () => {
    navigate('/orderPlaced');
  };

  const btn = {
    color: '#f9f9f9',
    backgroundColor: '#008e45',
    border: 'none',
    fontSize: '14px',
    padding: '12px var(--sm-spacing)',
    borderRadius: ' 8px',
    marginTop: ' 10px',
    cursor: ' pointer',
    height: '30px',
    width: '100px',
  };

  useEffect(() => {
    let totalAmount = cartItems.reduce(
      (acc, item) => acc + Number(item.price),
      0
    );
    setTotalAmount(totalAmount);
  }, [cartItems]);

  // const [cartItems, setCartItems] = useState(initialCartItems);

  // const removeQty = (itemId) => {
  //   const updatedItems = cartItems.map((item) => {
  //     if (item.id === itemId && item.qty > 1) {
  //       return { ...item, qty: item.qty - 1 };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedItems);
  // };

  // const addQty = (itemId) => {
  //   const updatedItems = cartItems.map((item) => {
  //     if (item.id === itemId) {
  //       return { ...item, qty: item.qty + 1 };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedItems);
  // };
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${black1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '150vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {cartItems.length == 0 ? (
          <Box
            sx={{ fontFamily: 'inherit', fontSize: '50px', color: '#e0a745' }}
          >
            Your Cart is Empty
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '30px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#eeeeee',
                width: '500px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ color: 'black' }}>
                Your pizza is ready to bake
              </Typography>
            </Box>
            {/* left box */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '30px',
              }}
            >
              <Box
                sx={{
                  width: '500px',
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#0c78a6',
                    padding: '20px',
                    borderRadius: '10px',
                  }}
                >
                  {cartItems.map((item, i) => (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        columnGap: '30px',
                      }}
                      key={i}
                    >
                      <Grid>
                        <img src={item.image} alt="image" width={'100px'} />
                      </Grid>
                      <Grid>
                        <SingleCart
                          item={item}
                          setTotalAmount={setTotalAmount}
                          totalAmount={totalAmount}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Box>
              </Box>
              {/* right box */}
              <Box
                sx={{
                  width: '200px',
                  height: '240px',
                  backgroundColor: '#eeeeee',
                  borderRadius: '8px',
                }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '5px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '23px',
                    color: 'black',
                  }}
                >
                  Order summary
                </Grid>

                <hr />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ color: '#e0a745' }}>
                      No of Pizza :
                    </Typography>
                    <Typography sx={{ color: 'black' }}>
                      {cartItems.length}
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ color: '#e0a745' }}>
                      Sub Total:
                    </Typography>
                    <Typography sx={{ color: 'black' }}>
                      {totalAmount}
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ color: '#e0a745' }}>Tax 0%:</Typography>
                    <Typography sx={{ color: 'black' }}>{0}</Typography>
                  </Grid>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ color: '#e0a745' }}>
                      Grand Total:
                    </Typography>
                    <Typography sx={{ color: 'black' }}>
                      {totalAmount}
                    </Typography>
                  </Grid>
                </Box>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'lightgreen',
                  }}
                >
                  <button style={btn} onClick={placeOrder}>
                    Place Order
                  </button>
                </Grid>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Cart;
