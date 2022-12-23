import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';


const Card = () => {
  const { selectedLang } = useSelector(state => state.lang)

  let cards = [
    {
      name: globalLocales.stats.statuses.all[selectedLang],
      src: './Images/All.png',
      statistic: 1.5,
      status: 'mlrd',
      color: '#325ECD',
    },
    {
      name: globalLocales.stats.statuses.approved[selectedLang],
      src: './Images/Success.png',
      statistic: 300.6,
      status: 'mln',
      color: '#12B903',
    },
    {
      name: globalLocales.stats.statuses.partly[selectedLang],
      src: './Images/chart.png',
      statistic: 31.2,
      status: 'mln',
      color: '#FD9717',
    },
    {
      name: globalLocales.stats.statuses.declined[selectedLang],
      src: './Images/Failed.png',
      statistic: 1.5,
      status: 'mlrd',
      color: '#CA0218',
    },
    // {
    //   name: globalLocales.stats.statuses.overdue[selectedLang],
    //   src: './Images/block.png',
    //   statistic: 1.5,
    //   status: 'mlrd',
    //   color: '#000000',
    // },
    // {
    //   name: globalLocales.stats.statuses.notHandled[selectedLang],
    //   src: './Images/x.png',
    //   statistic: 1.5,
    //   status: 'mlrd',
    //   color: '#DBB491',
    // },
  ];

  return (
    <Container maxWidth="xl">
      <Grid container columns={8} justifyContent="space-between" sx={{paddingTop: '30px'}}>
        {cards.map((arr, ky) => {
          return (
            <Grid xs={1.8}>
              <Box
                sx={{
                  //height: '140px',
                  background: '#FFFFFF',
                  boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
                  borderRadius: '20px',
                  color: arr.color,
                  padding: '15px'
                }}
              >
                <Box
                  sx={{
                    //height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: '0 10px',
                    width: '100%',
                  }}
                >
                  <img src={arr.src} alt="" style={{ width: '20px', height: '20px' }} />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontFamily: '"Nunito", sans-serif',
                      fontSize: '16px',
                      pl: '10px',
                    }}
                  >
                    {arr.name}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontFamily: '"Nunito", sans-serif',
                    textAlign: 'center',
                    padding: '20px 0',
                    fontSize: '25px'
                  }}
                >
                  {arr.statistic} {arr.status}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Card;
