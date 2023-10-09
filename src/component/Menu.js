import { Box, Grid, ListItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import wood from '../photo/wood.jpg';
import black1 from '../photo/black1.jpg';
import { useDispatch } from 'react-redux';
import { addPizza } from './store/slice/userSlice';
import { getPizza } from '../Api/Api';
import { useSelector } from 'react-redux';

function Menu() {
  const [pizzaDetails, setPizzaDetails] = useState([]);
  let getPizzaData = async () => {
    let data = await getPizza();
    setPizzaDetails(data.data.val);
  };

  const getData = useSelector((state) => {
    return state.user;
  });

  let dispatch = useDispatch();

  const selectedPizza = (item) => {
    let list = getData.filter((val) => {
      return val._id == item._id;
    });

    if (getData.length == 0) {
      dispatch(addPizza(item));
    } else if (list.length == 0) {
      dispatch(addPizza(item));
    } else {
    }
  };

  useEffect(() => {
    getPizzaData();
  }, []);

  // css of button
  const btn = {
    color: '#f9f9f9',
    backgroundColor: '#e0a745',
    border: 'none',
    fontSize: '14px',
    padding: '12px var(--sm-spacing)',
    borderRadius: ' 20px',
    marginTop: ' 10px',
    cursor: ' pointer',
    height: '30px',
    width: '80px',
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
        <Typography sx={{ fontFamily: 'inherit', fontSize: '50px' }}>
          {' '}
          Our Menu
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '100px',
            color: 'white',

            paddingTop: '50px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              color: 'white',
              textAlign: 'center',
              paddingTop: '50px',
            }}
          >
            <Typography sx={{ fontSize: '30px' }}> Our Menu</Typography>
            <Typography sx={{ color: '#838585' }}>
              Far far away, behind the word mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </Box>
          <Box
            sx={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
            }}
          >
            <Box
              sx={{
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                columnGap: '10px',
              }}
            >
              {pizzaDetails.slice(0, 3).map((item, i) => (
                <Box
                  sx={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '10px',
                  }}
                  key={i}
                >
                  <img
                    src={item.image}
                    alt="My Image"
                    width={'250px'}
                    height={'230px'}
                  />
                  <Grid>
                    <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
                      {item.pizzaname}
                    </Typography>
                    <br />

                    <Typography sx={{ color: '#838585' }}>
                      {item.des}
                    </Typography>
                    <br />

                    <Typography>$ {item.price}</Typography>
                    <button style={btn} onClick={() => selectedPizza(item)}>
                      Add to cart
                    </button>
                  </Grid>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                columnGap: '30px',
              }}
            >
              {pizzaDetails.slice(3, 7).map((item, i) => (
                <Box
                  sx={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '10px',
                  }}
                  key={i}
                >
                  <img
                    src={item.image}
                    alt="My Image"
                    width={'250px'}
                    height={'230px'}
                  />
                  <Grid>
                    <Typography sx={{ fontSize: '20px', color: '#e0a745' }}>
                      {item.pizzaname}
                    </Typography>
                    <br />

                    <Typography sx={{ color: '#838585' }}>
                      {item.des}
                    </Typography>

                    <br />
                    <Typography>$ {item.price}</Typography>
                    <button style={btn} onClick={() => selectedPizza(item)}>
                      Add to cart
                    </button>
                  </Grid>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Menu;
