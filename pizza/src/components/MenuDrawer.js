// src/components/MenuDrawer.js

import React from 'react';
// import {
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Divider,
// } from '@mui/material';
import { Drawer, List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuDrawer = ({ drawerOpen, toggleDrawer, menuItems }) => {
    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250, backgroundColor: '#f7f7f7', height: '100%', padding: '16px' }}
        >
            <Typography variant="h6" style={{ marginBottom: '16px', fontWeight: 'bold', textAlign: 'center' }}>
                Menu
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
                {menuItems.map((item) => (
                    <ListItem button component={Link} to={item.path} key={item.label} style={{ borderRadius: '4px', marginBottom: '8px' }}>
                        <ListItemText primary={item.label} style={{ textAlign: 'center' }} />
                    </ListItem>
                ))}
            </List>
        </div>
    </Drawer>
    );
};

export default MenuDrawer;