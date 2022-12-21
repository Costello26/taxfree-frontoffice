import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import UserIcons from '../../assets/Png/UserIcons.png';
import successIcon from '../../assets/Png/Success.png';
import cls from './User.module.scss';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const UserInfo = () => {

  const { passportImage, fullname, passportNumber, phone } = useSelector(
    (state) => state.passport
  );
  const { selectedLang } = useSelector(state => state.lang)
  return (
    <Card
      sx={{
        width: '100%',
        height: '246px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
        borderRadius: '30px',
        //marginTop: '11px',
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'Nunito',
          fontWeight: '500',
          fontSize: '25px',
          borderBottom: '2px solid #D9D9D9',
          paddingTop: '11px',
          color: 'rgba(35, 50, 89, 1)'
        }}
      >
        {globalLocales.infoPage.heading[selectedLang]}
      </Typography>
      <div className={cls['user-info']}>
        <Avatar
          src={passportImage || UserIcons}
          sx={{
            width: '158px',
            height: '158px',
            borderRadius: '20px',
            objectFit: 'contain',
            boxShadow: '0px 0px 4px rgba(182, 182, 182, 0.25)'
          }}
        />
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Nunito' }} component="div">
              {globalLocales.infoPage.fio[selectedLang]}: {fullname}
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Nunito' }} component="div">
            {globalLocales.infoPage.passport[selectedLang]}: {passportNumber}
            </Typography>
            {phone && (
              <Typography sx={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Nunito' }} component="div">
                Telefon: {phone}
              </Typography>
            )}
            <Typography sx={{ fontSize: '18px', fontWeight: '500', fontFamily: 'Nunito' }} component="div">
            {globalLocales.infoPage.visa[selectedLang]}: 400*******9010
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'Nunito'
              }}
              gutterBottom
              component="div"
            >
              {globalLocales.infoPage.status[selectedLang]}:&nbsp;
              <Typography
                sx={{
                  color: '#12B903',
                  fontSize: '18px',
                  fontWeight: '500',
                  display: 'flex',
                  gap: '6px',
                  alignItems: 'center',
                  fontFamily: 'Nunito'
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
