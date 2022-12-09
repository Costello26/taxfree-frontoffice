import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });
    let data = [
        {
            name: "Bosh sahifa",
            link: "/"
        },
        {
            name: "Register",
            link: "/register"
        },
        {
            name: "Passport Scan",
            link: "/scan-passport"
        },
        {
            name: "Talon Scan",
            link: "/scan-talon"
        },
        {
            name: "Product Formalization",
            link: "/product-formalization"
        },
        {
            name: "Users Formalization",
            link: "/users-formalization"
        },
        {
           name:"print check",
           link:"/statistics"
        }
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {data.map((text, index) => (
                    <ListItem key={index} disablePadding >
                        <NavLink to={text.link}>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon> */}
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
                    <MenuIcon sx={{ fontSize: '45px' }} onClick={toggleDrawer(anchor, true)} />
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