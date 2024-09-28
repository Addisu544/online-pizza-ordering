// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuDrawer from './MenuDrawer'; // Import your MenuDrawer

// const UserBar = ({ drawerOpen, toggleDrawer, menuItems }) => {
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
//                         all panel
//                     </Typography>
                  
//                 </Toolbar>
//             </AppBar>
//             <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />
//         </>
//     );
// };

// export default UserBar;

// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuDrawer from './MenuDrawer'; // Import your MenuDrawer
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const UserBar = ({ drawerOpen, toggleDrawer, menuItems }) => {
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
//                         all Panel
//                     </Typography>
//                     <Link to="/logout" style={{ textDecoration: 'none' }}>
//                         <Button color="inherit">Logout</Button>
//                     </Link>
//                 </Toolbar>
//             </AppBar>
//             <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />
//         </>
//     );
// };

// export default UserBar;
//mesqel home



import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './MenuDrawer'; // Make sure to import your MenuDrawer
import { Link } from 'react-router-dom';

const UserBar = ({ isLoggedIn, drawerOpen, toggleDrawer, menuItems }) => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {toggleDrawer && ( // Render the menu icon only if toggleDrawer is provided
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={toggleDrawer(true)}
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Pizza Ordering Service
                    </Typography>
                    {isLoggedIn ? (
                        <Link to="/logout" style={{ textDecoration: 'none' }}>
                            <Button color="inherit">Logout</Button>
                        </Link>
                    ) : (
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button color="inherit">Login</Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
            {menuItems && (
                <MenuDrawer 
                    drawerOpen={drawerOpen} 
                    toggleDrawer={toggleDrawer} 
                    menuItems={menuItems} 
                />
            )}
        </>
    );
};

export default UserBar;