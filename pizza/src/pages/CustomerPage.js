// import React from 'react';
// import { Container, Typography } from '@mui/material';
// const CustomerPage = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//       Customer  page
//       </Typography>
     
     
//     </Container>
//     </>
//   );
// };

// export default CustomerPage;


import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes } from 'react-router-dom';

import MenuDrawer from '../components/MenuDrawer';
import UserDashboard from '../components/UserDashboard';
import UserOne from '../components/UserOne';
import UserTwo from '../components/UserTwo';
import UserThree from '../components/UserThree'
import UserBar from '../components/UserBar'

const CustomerPage = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: 'home page', path: 'home' },
        { label: 'UserOne', path: 'userone' },
        { label: 'UserTwo', path: 'userTwo' },
        { label: 'UserThree', path: 'userthree' },
    ];

    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    return (
        <>
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer(true)}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                  Customer Page
                    </Typography>
                </Toolbar>
            </AppBar>

            <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} /> */}
        <UserBar  isLoggedIn={isLoggedIn}  drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />

            <Container>
                <Routes>
                   <Route path="home" element={<UserDashboard />} />  
                    <Route path="userone" element={<UserOne />} />
                    <Route path="usertwo" element={<UserTwo />} />
                    <Route path="userthree" element={<UserThree />} />
                    <Route path="/" element={<UserDashboard />} /> {/* Default route */}
                </Routes>
            </Container>
            {/* <UserDashboard/> */}
        </>
    );
};

export default CustomerPage;
