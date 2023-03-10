import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Burger from '../../assets/svg/burger.svg'
import { NavLink } from 'react-router-dom';
import cls from './rightDashboard.module.scss';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  let data = [
    {
      name: 'Authorization',
      link: '/',
    },
    {
      name: 'User identification',
      link: '/login',
    },
    {
      name: 'Passport scan',
      link: '/scan-passport',
    },
    {
      name: 'Boardpass scan',
      link: '/scan-talon',
    },
    {
      name: 'Products formalization',
      link: '/product-formalization',
    },
    {
      name: 'Statistics',
      link: '/users-formalization',
    },
    {
      name: 'Invoice',
      link: '/printCheck',
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((text, index) => (
          <ListItem sx={{ display: 'flex' }} key={index}>
            <NavLink to={text.link} className={cls['nav-link']}>
              <ListItemButton>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)} style={{ 
            width: '25px', 
            height: '25px', 
            display: 'flex', 
            justifyContent: 'center', 
            cursor: 'pointer'
            }}>
            <img src={Burger} style={{
              display: 'block', width: '100%'
            }} alt="burger"/>
          </span>
          {/* <MenuIcon
            sx={{ fontSize: '45px', cursor: 'pointer' }}
            onClick={toggleDrawer(anchor, true)}
          /> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
