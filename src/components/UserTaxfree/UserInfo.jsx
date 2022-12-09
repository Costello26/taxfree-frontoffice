import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import UserIcons from '../../assets/Png/UserIcons.png';
import cls from './User.module.scss';

const UserInfo = () => {
  const userImage = localStorage.getItem('image');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  return (
    <Card
      sx={{
        width: '100%',
        height: '236px',
        display: 'inline-flex',
        boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
        borderRadius: '30px',
        marginTop: '11px',
      }}
    >
      <div className={cls['user-info']}>
        <Avatar
          src={userImage || UserIcons}
          sx={{
            width: '158px',
            height: '164px',
            borderRadius: '0',
          }}
        />
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              FISh: {lastName} {firstName}
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              Telefon: +44-7871234567
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              Visa: 400*******9010
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '500' }}
              gutterBottom
              component="div"
            >
              Visa FISh: {lastName} {firstName}
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '500', display: 'flex' }}
              gutterBottom
              component="div"
            >
              Holati:
              <Typography sx={{ color: '#12B903', fontSize: '18px', fontWeight: '500' }}>
                Shaxsi tasdiqlangan
              </Typography>
            </Typography>
          </CardContent>
        </Box>
      </div>
    </Card>
  );
};

export default UserInfo;
