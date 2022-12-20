import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const Taxfree = () => {
  const { selectedLang } = useSelector(state => state.lang)
  return (
    <Card
      sx={{
        display: 'inline-block',
        width: '100%',
        height: '236px',
        boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
        borderRadius: '30px',
        marginTop: '11px',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fonFamily: 'Nunito',
          fontWeight: '600',
          fontSize: '25px',
          borderBottom: '2px solid #D9D9D9',
          paddingTop: '11px',
        }}
      >
        Tax Free
      </Typography>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px 0',
          borderBottom: '0.5px dashed rgba(0, 0, 0, 0.2)',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          {globalLocales.infoPage.overall[selectedLang]}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          1 293 000
        </Typography>
      </Box>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '4px 0',
          borderBottom: '0.5px dashed rgba(0, 0, 0, 0.2)',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          {globalLocales.infoPage.checksCount[selectedLang]}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          15
        </Typography>
      </Box>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px 0',
          borderBottom: '0.5px dashed rgba(0, 0, 0, 0.2)',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          {globalLocales.infoPage.countedSum[selectedLang]}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          124 682
        </Typography>
      </Box>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px 0',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          {globalLocales.infoPage.approvedSum[selectedLang]}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >
          124 682
        </Typography>
      </Box>
    </Card>
  );
};

export default Taxfree;
