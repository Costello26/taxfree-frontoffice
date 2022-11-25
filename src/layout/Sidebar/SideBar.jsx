import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SelectLanguage from '../../components/SelectLanguage/SelectLang'

import SoliqLogo from '../../assets/Png/SoliqLogo.png'

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
        <AppBar position="static" sx={{ backgroundColor: "white", color: "black" , boxShadow:"0 0 10px rgba(128, 128, 128, 0.567)"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                        <img src={SoliqLogo} alt="Soliq Logo" style={{ width: "70px", height: "62px", margin: "25px 10px" }} />
                       <Box sx={{lineHeight:"20px"}}>
                       <Typography
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Nunito',
                                fontWeight: 700,
                                color: 'black',
                                fontSize:"30px",
                                fontWeight:"600",
                                lineHeight:'25px'
                            }}
                        >
                            TaxFree
                        </Typography>
                        <Typography
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Nunito',
                                fontWeight: 700,
                                color: 'black',
                                fontSize:"16px",
                                fontWeight:"400",
                                lineHeight:'25px'
                            }}
                        >
                           Front office
                        </Typography>
                        <Typography
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Nunito',
                                fontWeight: 700,
                                color: 'black',
                                fontSize:"16px",
                                fontWeight:"400",
                                lineHeight:'20px'
                            }}
                        >
                            Tashkent Airport
                        </Typography>
                       </Box>
                    </Box>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                           
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 0, display: "flex" , alignItems: 'center'}}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Olimov Asqarali" src="/static/images/avatar/2.jpg" style={{width:"56px" , height:"56px"}} />
                        </IconButton>
                        <Box>
                            <Typography sx={{ pl: 2 , fontWeight:"600" , fontSize:"16px"}}>
                                Olimov Asqarali
                            </Typography>
                            <Typography sx={{ pl: 2 , fontWeight:"400" , fontSize:"16px"}}>
                                JShShIR:12345678901234
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <SelectLanguage/>
                        <MenuIcon sx={{ fontSize: "45px" }} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default SideBar;