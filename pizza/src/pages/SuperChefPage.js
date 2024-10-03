// import React from 'react';
// import { Container, Typography } from '@mui/material';
// const SuperChefPage = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//        super chef page 
//       </Typography>
     
     
//     </Container>
//     </>
//   );
// };

// export default SuperChefPage;


// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     Divider,
//     Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Route, Routes, Link } from 'react-router-dom';
// import SuperChefPageOne from '../components/SuperChefPageOne';
// import SuperChefPageTwo from '../components/SuperChefPageTwo';
// const AdminPage = () => {
//     const [drawerOpen, setDrawerOpen] = React.useState(false);

//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         setDrawerOpen(open);
//     };

//     return (
//         <>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         onClick={toggleDrawer(true)}
//                         aria-label="menu"
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         Admin Panel
//                     </Typography>
//                 </Toolbar>
//                 <Drawer
//                     anchor="left"
//                     open={drawerOpen}
//                     onClose={toggleDrawer(false)}
//                 >
//                     <div
//                         role="presentation"
//                         onClick={toggleDrawer(false)}
//                         onKeyDown={toggleDrawer(false)}
//                         style={{ width: 250 }}
//                     >
//                         <List>
//                             <ListItem button component={Link} to="Superone">
//                                 <ListItemText primary="SuperChefPageOne" />
//                             </ListItem>
//                             <ListItem button component={Link} to="Supertwo">
//                                 <ListItemText primary="SuperChefPageTwo" />
//                             </ListItem>
                           
//                         </List>
//                         <Divider />
//                     </div>
//                 </Drawer>
//             </AppBar>

//             <Container>
//                 <Routes>
//                     <Route path="Superone" element={<SuperChefPageOne />} />
//                     <Route path="Supertwo" element={<SuperChefPageTwo />} />

//                     <Route path="/" element={<SuperChefPageOne />} /> {/* Default route */}
//                 </Routes>
//             </Container>
//         </>
//     );
// };

// export default AdminPage;



//to be one
// src/pages/SuperChefPage.js

// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Route, Routes } from 'react-router-dom';
// import SuperChefPageOne from '../components/SuperChefPageOne';
// import SuperChefPageTwo from '../components/SuperChefPageTwo';
// import MenuDrawer from '../components/MenuDrawer';
// import UserBar from '../components/UserBar';

// const SuperChefPage = () => {
//     const [drawerOpen, setDrawerOpen] = React.useState(false);

//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         setDrawerOpen(open);
//     };

//     const menuItems = [
//         { label: 'SuperChef Page One', path: 'Superone' },
//         { label: 'SuperChef Page Two', path: 'Supertwo' },
        
//     ];

//     return (
//         <>
//             {/* <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         onClick={toggleDrawer(true)}
//                         aria-label="menu"
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         Super Chef Dashboard
//                     </Typography>
//                 </Toolbar>
//             </AppBar>

//             <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} /> */}
//         <UserBar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />

//             <Container>
//                 <Routes>
//                     <Route path="Superone" element={<SuperChefPageOne />} />
//                     <Route path="Supertwo" element={<SuperChefPageTwo />} />
//                     <Route path="/" element={<SuperChefPageOne />} /> {/* Default route */}
//                 </Routes>
//             </Container>
//         </>
//     );
// };

// export default SuperChefPage;


//mesqel home


import React from 'react';
import {  Container,} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SuperChefPageOne from '../components/SuperChefPageOne';
import SuperChefPageTwo from '../components/SuperChefPageTwo';
import MenuDrawer from '../components/MenuDrawer';
import UserBar from '../components/UserBar';

const SuperChefPage = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: 'Home', path: 'Superone' },
        { label: 'second page', path: 'Supertwo' },
    ];

    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    return (
        <>
            <UserBar 
                isLoggedIn={isLoggedIn} 
                drawerOpen={drawerOpen} 
                toggleDrawer={toggleDrawer} 
                menuItems={menuItems} 
            />

            <Container>
                <Routes>
                    <Route path="Superone" element={<SuperChefPageOne />} />
                    <Route path="Supertwo" element={<SuperChefPageTwo />} />
                    <Route path="/" element={<SuperChefPageOne />} />
                </Routes>
            </Container>
        </>
    );
};

export default SuperChefPage;