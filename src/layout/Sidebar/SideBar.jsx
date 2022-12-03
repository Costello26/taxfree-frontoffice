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
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const SideBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
            {/* <Link to="/"> */}
              <img
                src={SoliqLogo}
                alt="Soliq Logo"
                style={{ width: '70px', height: '62px', margin: '25px 10px' }}
              />
            {/* </Link> */}

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
                  display: { xs: 'none', md: 'flex' },
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
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Olimov Asqarali"
                src="/static/images/avatar/2.jpg"
                style={{ width: '56px', height: '56px' }}
              />
            </IconButton>
            <Box>
              <Typography sx={{ pl: 2, fontWeight: '600', fontSize: '16px' }}>
                Olimov Asqarali
              </Typography>
              <Typography sx={{ pl: 2, fontWeight: '400', fontSize: '16px' }}>
                JShShIR:12345678901234
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <SelectLanguage />
            <MenuIcon sx={{ fontSize: '45px' }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default SideBar;
