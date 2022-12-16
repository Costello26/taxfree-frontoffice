import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import UserIcons from '../../assets/Png/UserIcons.png';
import successIcon from '../../assets/Png/Success.png';
import cls from './User.module.scss';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  // const { passportImage, firstName, lastName } = useSelector((state) => state.passport);
  // const fullname = localStorage.getItem('fullname');
  // const passportImage = localStorage.getItem('passportImage');
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [fullname, setfullname] = useState('');
  useEffect(() => {
     setfullname(userInfo.fullName)
  }, [userInfo]);
  console.log(userInfo);
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
          src={userInfo.passportImage || UserIcons}
          sx={{
            width: '158px',
            height: '164px',
            borderRadius: '0',
          }}
        />
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              FISh: {userInfo.fullName}
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              Passport: {userInfo.passportNumber}
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              Visa: 400*******9010
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '500' }}
              gutterBottom
              component="div"
            >
              Visa FISh: {userInfo.fullName}
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
              }}
              gutterBottom
              component="div"
            >
              Holati:
              <Typography
                sx={{
                  color: '#12B903',
                  fontSize: '18px',
                  fontWeight: '500',
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center',
                }}
              >
                Shaxsi tasdiqlangan
                <img src={successIcon} width={16.25} height={16.25} alt="success" />
              </Typography>
            </Typography>
          </CardContent>
        </Box>
      </div>
    </Card>
  );
};

export default UserInfo;
