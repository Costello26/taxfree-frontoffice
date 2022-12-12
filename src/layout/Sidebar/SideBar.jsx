import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import SelectLanguage from '../../components/SelectLanguage/SelectLang';
import SoliqLogo from '../../assets/Png/SoliqLogo.png';
import { useSelector } from 'react-redux';
import RightDashboard from '../../components/RightDashboard/RightDashboard';

const SideBar = () => {
  const firstName = useSelector((state) => state.passport.firstName);
  const lastName = useSelector((state) => state.passport.lastName);
  const passportImage = useSelector((state) => state.passport.passportImage);
  const passportJSHR = useSelector((state) => state.passport.passportJSHR);
  console.log(firstName, lastName);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#F6F6F6',
        color: 'black',
        boxShadow: '0 0 10px rgba(128, 128, 128, 0.567)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <img
              src={SoliqLogo}
              alt="Soliq Logo"
              style={{ width: '70px', height: '62px', margin: '25px 10px' }}
            />

            <Box sx={{ lineHeight: '20px' }}>
              <Typography
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Nunito',
                  color: 'black',
                  fontSize: '30px',
                  fontWeight: '600',
                  lineHeight: '25px',
                }}
              >
                TaxFree
              </Typography>
              <Typography
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Nunito',
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '25px',
                }}
              >
                Front office
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Nunito',
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px',
                }}
              >
                Tashkent Airport
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Olimov Asqarali"
                src={`${passportImage}` || '/static/images/avatar/2.jpg'}
                style={{ width: '56px', height: '56px' }}
              />
            </IconButton>
            <Box>
              {/* <Typography sx={{ pl: 2, fontWeight: '600', fontSize: '16px' }}>
                {lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() || 'Olimov'}{' '}
                {firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() ||
                  'Asqarali'}
              </Typography> */}
              <Typography sx={{ pl: 2, fontWeight: '400', fontSize: '16px' }}>
                JShShIR:{passportJSHR || 123456789}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <SelectLanguage />
            <RightDashboard />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SideBar;
