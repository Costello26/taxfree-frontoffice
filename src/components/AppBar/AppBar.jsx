import React, { useState } from 'react';
import { ButtonGroup, Button, Container } from '@mui/material';
import cls from './AppBar.scss'

const AppBar = (props) => {
  const [isRegActive, setIsRegActive] = useState(true);
  const [isStatActive, setIsStatActive] = useState(false);
  const onRegClickHandler = () => {
    setIsRegActive(true);
    setIsStatActive(false);
    props.onRegClick(isRegActive);
  };
  const onStatClickHandler = () => {
    setIsStatActive(true);
    setIsRegActive(false);
    props.onStatClick(isStatActive);
  };
  return (
    <Container disableGutters={true} maxWidth={false} sx={{ textAlign: 'center' }}>
      <ButtonGroup
        variant="contained"
        aria-label="button group"
        sx={{
          marginTop: '59px',
          width: '100%',
          borderRadius: '20px',
          boxShadow: 'none',
          maxWidth: '1536px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '50%',
            padding: '12px 0px',
            borderRadius: '20px',
            fontWeight: 500,
            fontSize: '20px',
            border: '1px solid #D3E0FF',
            borderRight: '0',
            textTransform: 'none',
            lineHeight: '28px',
            borderColor: '#D3E0FF !important',
            backgroundColor: isRegActive ? '#325ECD' : '#fff',
            color: isRegActive ? '#fff' : '#000',
            ':hover': {
              backgroundColor: isRegActive ? '#325ECD' : '#fff',
            },
          }}
          onClick={onRegClickHandler}
        >
          Ro’yxatga olish
        </Button>
        <Button
          
          variant="contained"
          sx={{
            width: '50%',
            padding: '16px 0px',
            borderRadius: '20px',
            fontWeight: 600,
            fontSize: '20px',
            background: '#FFF',
            border: '1px solid #D3E0FF',
            borderLeft: '0',
            textTransform: 'none',
            lineHeight: '28px',
            borderColor: '#D3E0FF',
            backgroundColor: isStatActive ? '#325ECD' : '#fff',
            color: isStatActive ? '#fff' : '#000',
            ':hover': {
              background: isStatActive ? '#325ECD' : '#fff',
            },
          }}
          onClick={onStatClickHandler}
        >
          Statistika
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default AppBar;
