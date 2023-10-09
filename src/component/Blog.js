import { Box, Grid, Typography, colors } from '@mui/material';
import React from 'react';
import NavBar from './NavBar';
import bg from '../photo/wood.jpg';
import black1 from '../photo/black1.jpg';
import noddles from '../photo/n1.jpg';
import pizza from '../photo/p1.jpg';
import wine from '../photo/w1.jpg';

function Blog() {
  return (
    <Box>
      <NavBar />
      {/* first page */}
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          display: 'flex',

          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',

            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: '50px' }}>READ OUR BLOG</Typography>
          <Typography sx={{ display: 'flex', textAlign: 'center' }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and
            <br /> Consonantia, there live the blind texts.
          </Typography>
        </Box>
      </Box>
      {/* second page */}
      <Box
        sx={{
          backgroundImage: `url(${black1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '220vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          rowGap: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
          }}
        >
          <Typography sx={{ fontSize: '35px' }}>#1.Pizza</Typography>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '50px' }}
          >
            <img src={pizza} alt="image" width={'500px'} height={'300vh'} />
            <Typography sx={{ color: '#838590' }}>
              With breakfast, lunch, and dinner now covered, there’s still
              another option for catering to
              <br /> your pizza-loving clientele: dessert pizzas. Dessert pizzas
              offer another simple way
              <br /> to get further value from your pizza dough, while providing
              the type of variety and inventive
              <br />
              flavors that will create loyalty among your customers. Your
              c-store can serve dessert pizzas
              <br /> cold (fruit-centric flavors), warm (melted chocolate and/or
              toasted marshmallows) or take-and-bake style.
              <br /> These desserts are a great option as an add-on or upsell
              with a traditional pizza. And dessert pizzas
              <br />
              don’t have to strictly be sold as dessert—their sweetness also
              goes great with a cup of coffee.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
          }}
        >
          <Typography sx={{ fontSize: '35px' }}>#2.Noddles</Typography>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '50px' }}
          >
            <img src={noddles} alt="image" width={'500px'} height={'300vh'} />
            <Typography sx={{ color: '#838590' }}>
              Lo mein is a super popular noodle dish that you’ll find both at,
              restaurants and made at home.
              <br /> In Cantonese, lo mein means “mixed noodles”. In Mandarin,
              it’s pronounced “lao mian” and translates <br />
              exactly the same. Essentially, it’s egg noodles mixed with sauce –
              somewhat similar to chow mein,
              <br /> but not quite. In truth, it can mean a variety of different
              kind of noodle dishes, much like how <br />
              you can order spaghetti in a variety of ways. In North America, we
              tend to associate lo mein
              <br /> with the American Chinese take out style of noodles:
              somewhat thick egg noodles stir fried and <br />
              tossed with a soy based sauce, vegetables, and proteins.
              Technically there are two kinds
              <br /> of lo mein, Cantonese Hong Kong style and American Chinese
              take out style. Both are a mixed stir <br />
              fried noodle dish. Cantonese lo mein is a kind of deconstructed{' '}
              soup noodle: thin and chewy
              <br /> egg noodles served on a plate with toppings and a bowl of
              soup on the side. The sauce for the <br />
              noodles isn’t mixed in. Instead, you’re supposed to stir it into{' '}
              the noodles yourself.
              <br /> “Lo” means to mix or stir. Mein, of course, means noodles.
              American Chinese lo mein is a stir fry <br />
              noodle dish: thick noodles mixed with a soy sauce based sauce and
              toppings <br />
              like beef, pork, chicken, or vegetables.
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
          }}
        >
          <Typography sx={{ fontSize: '35px' }}>#3.Wine</Typography>
          <Grid
            sx={{ display: 'flex', flexDirection: 'row', columnGap: '50px' }}
          >
            <img src={wine} alt="image" width={'500px'} height={'500vh'} />
            <Typography sx={{ color: '#838590' }}>
              Hello and welcome to my weekly dig through the pile of wine
              samples that show up asking to be tasted. <br />
              I’m pleased to bring you the latest installment of Vinography
              Unboxed, where I highlight
              <br /> some of the better bottles that have crossed my doorstep
              recently. This week features a number of
              <br />
              interesting California wines, ranging from classic to hip. In the
              former category,
              <br /> the Smith-Madrone Riesling never fails to deliver the kinds
              of flavors and stony qualities that make
              <br />
              Riesling so beloved by many wine geeks. On the other end of the
              spectrum, it’s hard to get
              <br /> more hip than a low-sulfite version of Picpoul Blanc from
              Two Shepherds winery with its limey,
              <br />
              floral qualities. Two Shepherds also sent along two versions of
              Cinsault (or Cinsaut, as they spell it),
              <br /> one bright and lean and crunchy, the other darker and more
              substantial. Both are worth
              <br />
              enjoying. Somewhere in the middle, more traditionally familiar,
              I’ve got a Sauvignon Blanc <br />
              and a rosé from Aesthete Wines, who make wines from their Dry
              Stack Vineyard in Sonoma’s Bennett
              <br />
              Valley. Their Sauvignon Blanc is tropically minded, while the rosé
              (of Pinot Noir) <br />
              is leaner and more savory in quality. Last but not least, I’ve got
              three more wines to recommend to you
              <br />
              from the folks at Alegría Vineyards and Acorn Winery. Their
              Alvarinho (spelled the Portuguese <br />
              way because there are lots of little bits of other Portuguese
              varieties in there) and their
              <br />
              Grüner Veltliner are both pleasingly on target in conveying
              varietal character.
              <br /> And their Axiom Syrah, while showing a decent amount of oak
              at this point in its life, will likely
              <br />
              mellow into something quite pleasing with a little time.
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Blog;
