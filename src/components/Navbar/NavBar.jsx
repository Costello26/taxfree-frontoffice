import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';
import SelectLanguage from '../SelectLanguage/SelectLang';
import SoliqLogo from '../../assets/Png/SoliqLogo.png';
import RightDashboard from '../RightDashboard/RightDashboard';
import user from '../../assets/Png/User.png';
import { useLocation } from 'react-router-dom';



const Navbar = () => {
  const location = useLocation();
  const { selectedLang } = useSelector((state) => state.lang);
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
          <Link
            to="/"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src={SoliqLogo}
              alt="Soliq Logo"
              style={{ width: '60px', height: '52px', margin: '25px 10px' }}
            />

            <Box sx={{ lineHeight: '20px' }}>
              <Typography
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Nunito',
                  color: 'black',
                  fontSize: '24px',
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
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '25px',
                  paddingLeft: '5px',
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
                  paddingLeft: '5px',
                }}
              >
                Tashkent Airport
              </Typography>
            </Box>
          </Link>
          {location.pathname !== '/' ? (
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Olimov Asqarali"
                  src={user}
                  style={{ width: '56px', height: '56px' }}
                />
              </IconButton>
              <Box>
                <Typography sx={{ pl: 2, fontWeight: '600', fontSize: '16px', fontFamily: '"Nunito", sans-serif' }}>
                  Olimov Asqarali
                </Typography>
                <Typography sx={{ pl: 2, fontWeight: '400', fontSize: '16px', fontFamily: '"Nunito", sans-serif' }}>
                  {globalLocales.header.pinfl[selectedLang]}: 12345678901234
                </Typography>
              </Box>
            </Box>
          ) : (
            <></>
          )}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <SelectLanguage />
            <RightDashboard />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
