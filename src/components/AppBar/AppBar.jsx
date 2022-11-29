import React from 'react';
import { ButtonGroup, Button, Container } from '@mui/material';

const AppBar = () => {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <ButtonGroup
        variant="contained"
        aria-label="button group"
        sx={{ marginTop: '59px', width: '100%', borderRadius: '20px' }}
      >
        <Button
          variant="contained"
          sx={{
            width: '50%',
            padding: '12px 0px',
            borderRadius: '20px',
            fontWeight: 500,
            fontSize: '25px',
            border: '1px solid #D3E0FF',
            textTransform: 'none',
            lineHeight: '28px',
          }}
        >
          Ro’yxatga olish
        </Button>
        <Button
          variant="outline"
          sx={{
            width: '50%',
            padding: '16px 0px',
            borderRadius: '20px',
            fontWeight: 600,
            fontSize: '25px',
            background: '#FFF',
            border: '1px solid #D3E0FF',
            textTransform: 'none',
            lineHeight: '28px',
          }}
        >
          Statistika
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default AppBar;
