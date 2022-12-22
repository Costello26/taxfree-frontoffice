import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const Card = () => {
  const { selectedLang } = useSelector((state) => state.lang);

  let cards = [
    {
      name: globalLocales.stats.statuses.all[selectedLang],
      src: './Images/All.png',
      statistic: 5123,
      color: '#325ECD',
    },
    {
      name: globalLocales.stats.statuses.approved[selectedLang],
      src: './Images/Success.png',
      statistic: 4500,
      color: '#12B903',
    },
    {
      name: globalLocales.stats.statuses.partly[selectedLang],
      src: './Images/chart.png',
      statistic: 213,
      color: '#FD9717',
    },
    {
      name: globalLocales.stats.statuses.declined[selectedLang],
      src: './Images/Failed.png',
      statistic: 210,
      color: '#CA0218',
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: '40px', marginBottom: '20px', padding: '0px !important' }}
    >
      <Grid container columns={12} justifyContent="space-between" sx={{ gap: '46px' }}>
        {cards.map((arr, ky) => {
          return (
            <Grid sx={{ display: 'flex', flex: 1 }}>
              <div
                style={{
                  width: '100%',
                  background: '#FFFFFF',
                  boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
                  borderRadius: '20px',
                  color: arr.color,
                  backgroundColor: '#fff',
                  padding: '16px',
                }}
              >
                <div
                  style={{
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img src={arr.src} alt="" style={{ width: '20px', height: '20px' }} />
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: '16px',
                      pl: '8px',
                    }}
                  >
                    {arr.name}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: '25px',
                    fontWeight: 700,
                  }}
                >
                  {arr.statistic}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Card;
