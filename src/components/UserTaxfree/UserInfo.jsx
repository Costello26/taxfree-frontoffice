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
        height: '236px',
        display: 'inline-flex',
        boxShadow: '0px 0px 15px rgba(160, 160, 160, 0.1)',
        borderRadius: '30px',
        marginTop: '11px',
      }}
    >
      <div className={cls['user-info']}>
        <Avatar
          src={passportImage || UserIcons}
          sx={{
            width: '158px',
            height: '164px',
            borderRadius: '0',
          }}
        />
        <Box>
          <CardContent>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
              {globalLocales.infoPage.fio[selectedLang]}: {fullname}
            </Typography>
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
            {globalLocales.infoPage.passport[selectedLang]}: {passportNumber}
            </Typography>
            {phone && (
              <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
                Telefon: {phone}
              </Typography>
            )}
            <Typography sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
            {globalLocales.infoPage.visa[selectedLang]}: 400*******9010
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
              {globalLocales.infoPage.status[selectedLang]}:&nbsp;
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
