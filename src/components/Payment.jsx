import PropTypes from 'prop-types';
// @mui
import { Stack, Grid, Box, Typography } from '@mui/material';
// @project

/***************************  RATING  ***************************/

export default function Payment({ payments }) {
  return (
    <>
      <Typography sx={{ borderBottom: '2px solid', width: 'fit-content' }}>Preferred Payments</Typography>
      <Grid container spacing={0}>
        {payments.preferred.map((item, i) => (
          <Grid
            key={i}
            size={{ xs: 3, sm: 4, md: 4, lg: 2 }}
            sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', maxWidth: { xs: '75px', md: '50px', lg: '60px' } }}
          >
            <Box>
              <img src={item.src} alt={item.alt} key={i} width={'48px'} height={'48px'}></img>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ borderBottom: '2px solid', width: 'fit-content' }}>Accepted Payments</Typography>
      <Stack direction="row" sx={{ gap: 0.75 }}>
        {payments.cards.map((item, i) => {
          return (
            <Box key={i}>
              <img src={item.src} alt={item.alt}></img>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

Payment.propTypes = { imgs: PropTypes.array };
