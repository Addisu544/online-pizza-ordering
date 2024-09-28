// src/components/MenuDrawer.js

import React from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const MenuDrawer = ({ drawerOpen, toggleDrawer, menuItems }) => {
    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                style={{ width: 250 }}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem button component={Link} to={item.path} key={item.label}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </div>
        </Drawer>
    );
};

export default MenuDrawer;