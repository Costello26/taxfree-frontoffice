import React from 'react';
import { Button, Typography } from '@mui/material';
import cls from './UserKey.module.scss';
const UserKey = (props) => {
  return (
    <Button
      sx={{
        width: '571px',
        height: '150px',
        bgcolor: 'rgba(238, 238, 238, 0.5)',
        margin: '9px',
        borderRadius: '25px',
        padding: '25px 30px',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontWeight: 800,
          fontSize: '20px',
        }}
      >
        {props.fullname}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: '20px',
        }}
      >
        <span style={{ color: 'gray' }}>JShShIR</span>: {props.jshr}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: '20px',
        }}
      >
        <span style={{ color: 'gray' }}>STIR</span>:{props.stir}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: '16px',
          color: '#D29404',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className={cls.circle}></span>
        ЭРИ нинг амал килиш муддати тугайди 25.04.2024
      </Typography>
    </Button>
  );
};

export default UserKey;
