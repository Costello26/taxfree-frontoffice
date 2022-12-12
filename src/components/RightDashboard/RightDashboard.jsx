import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import cls from './rightDashboard.module.scss';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  let data = [
    {
      name: 'Bosh sahifa',
      link: '/',
    },
    {
      name: "Ro'yhatdan o'tish",
      link: '/register',
    },
    {
      name: 'Passport Scan',
      link: '/scan-passport',
    },
    {
      name: 'Talon Scan',
      link: '/scan-talon',
    },
    {
      name: 'Product Formalization',
      link: '/product-formalization',
    },
    {
      name: 'Users Formalization',
      link: '/users-formalization',
    },
    {
      name: 'Print check',
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
          <MenuIcon
            sx={{ fontSize: '45px', cursor: 'pointer' }}
            onClick={toggleDrawer(anchor, true)}
          />
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
