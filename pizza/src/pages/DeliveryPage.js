// import React from 'react';
// import { Container, Typography } from '@mui/material';
// const DeliveryPage = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//       Delivery page
//       </Typography>
     
     
//     </Container>
//     </>
//   );
// };

// export default DeliveryPage;


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
import DeliveryOne from '../components/DeliveryOne';
import DeliveryTwo from '../components/DeliveryTwo';
import UserBar from '../components/UserBar'


import MenuDrawer from '../components/MenuDrawer';

const AdminPage = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: 'delivery1', path: 'deliveryone' },
        { label: 'delivery2', path: 'deliverytwo' },
        
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
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>

            <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} /> */}
        <UserBar  isLoggedIn={isLoggedIn}  drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />

            <Container>
                <Routes>
                    <Route path="deliveryone" element={<DeliveryOne />} />
                    <Route path="deliverytwo" element={<DeliveryTwo />} />
                    
                    <Route path="/" element={<DeliveryOne />} /> {/* Default route */}
                </Routes>
            </Container>
        </>
    );
};

export default AdminPage;