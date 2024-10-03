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



// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuDrawer from './MenuDrawer'; // Make sure to import your MenuDrawer
// import { Link } from 'react-router-dom';

// const UserBar = ({ isLoggedIn, drawerOpen, toggleDrawer, menuItems }) => {
//     return (
//         <>
//             <AppBar position="static">
//                 <Toolbar>
//                     {toggleDrawer && ( // Render the menu icon only if toggleDrawer is provided
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={toggleDrawer(true)}
//                             aria-label="menu"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     )}
//                     <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         Pizza Ordering Service
//                     </Typography>
//                     {isLoggedIn ? (
//                         <Link to="/logout" style={{ textDecoration: 'none' }}>
//                             <Button color="inherit">Logout</Button>
//                         </Link>
//                     ) : (
//                         <Link to="/login" style={{ textDecoration: 'none' }}>
//                             <Button color="inherit">Login</Button>
//                         </Link>
//                     )}
//                 </Toolbar>
//             </AppBar>
//             {menuItems && (
//                 <MenuDrawer 
//                     drawerOpen={drawerOpen} 
//                     toggleDrawer={toggleDrawer} 
//                     menuItems={menuItems} 
//                 />
//             )}
//         </>
//     );
// };

// export default UserBar;
// // // for user cart
// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuDrawer from './MenuDrawer'; 
// import { Link } from 'react-router-dom';

// const UserBar = ({ isLoggedIn, drawerOpen, toggleDrawer, menuItems, cartItems, viewCart }) => {
//     return (
//         <>
//             <AppBar position="static">
//                 <Toolbar>
//                     {toggleDrawer && (
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={toggleDrawer(true)}
//                             aria-label="menu"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     )}
//                     <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         Pizza Ordering Service
//                     </Typography>
//                     <Button color="inherit" onClick={viewCart}>
//                     Cart ({cartItems ? cartItems.length : 0}) {/* Handle undefined */}
//                         {/* Cart ({cartItems.length}) */}
//                     </Button>
//                     {isLoggedIn ? (
//                         <Link to="/logout" style={{ textDecoration: 'none' }}>
//                             <Button color="inherit">Logout</Button>
//                         </Link>
//                     ) : (
//                         <Link to="/login" style={{ textDecoration: 'none' }}>
//                             <Button color="inherit">Login</Button>
//                         </Link>
//                     )}
//                 </Toolbar>
//             </AppBar>
//             {menuItems && (
//                 <MenuDrawer 
//                     drawerOpen={drawerOpen} 
//                     toggleDrawer={toggleDrawer} 
//                     menuItems={menuItems} 
//                 />
//             )}
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
// import MenuDrawer from './MenuDrawer'; // Make sure to import your MenuDrawer
// import { Link } from 'react-router-dom';

// const UserBar = ({ isLoggedIn, drawerOpen, toggleDrawer, menuItems }) => {
//     return (
//         <>
//             <AppBar position="static">
//                 <Toolbar>
//                     {toggleDrawer && ( // Render the menu icon only if toggleDrawer is provided
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             onClick={toggleDrawer(true)}
//                             aria-label="menu"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     )}
//                     <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
//                         Pizza Ordering Service
//                     </Typography>
//                     {isLoggedIn ? (
//                         <Link to="/logout" style={{ textDecoration: 'none' }}>
//                             <Button color="inherit">Logout</Button>
//                         </Link>
//                     ) : (
//                         <Link to="/login" style={{ textDecoration: 'none' }}>
//                             <Button color="inherit">Login</Button>
//                         </Link>
//                     )}
//                 </Toolbar>
//             </AppBar>
//             {menuItems && (
//                 <MenuDrawer 
//                     drawerOpen={drawerOpen} 
//                     toggleDrawer={toggleDrawer} 
//                     menuItems={menuItems} 
//                 />
//             )}
//         </>
//     );
// };

// export default UserBar;



//cart




import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Badge,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuDrawer from './MenuDrawer'; // Make sure to import your MenuDrawer
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Cart from './Cart';
import { useAuth } from '../context/AuthContext'; 


const UserBar = ({ isLoggedIn, drawerOpen, toggleDrawer, menuItems }) => {
    const {  userRole,firstName } = useAuth(); // Get the auth context
    // const {  isLoggedIn } = useAuth(); // already defined in the above 
    const shouldDisplayCart = !isLoggedIn || (isLoggedIn && userRole === 'customer');
    
    
    const { cart } = React.useContext(CartContext);
    const [cartOpen, setCartOpen] = useState(false);

    const handleCartOpen = () => {
        setCartOpen(true);
    };

    const handleCartClose = () => {
        setCartOpen(false);
    };

    return (
        <>
            <AppBar position="static" color="info" variant="contained"  >
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
                    {/* <IconButton color="secondary" variant="contained" onClick={handleCartOpen}>
                        <Badge badgeContent={cart.length} color="error" variant="contained">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton> */}
                    {isLoggedIn && (

<Typography  >
{firstName}
                    </Typography>)}
                    {shouldDisplayCart && (
            <IconButton color="secondary" variant="contained"   sx={{ marginRight: 2,marginLeft: 2 }} onClick={handleCartOpen}>
                <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>)}



                    {isLoggedIn ? (
                        <Link to="/logout" style={{ textDecoration: 'none' }}>
                            <Button color="success" variant="contained" sx={{ marginLeft: 2 }}>Logout</Button>
                        </Link>
                    ) : (
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button color="success" variant="contained" sx={{ marginLeft: 2 }}>Login</Button>
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
            <Cart open={cartOpen} onClose={handleCartClose} />
      
           
            

            </>
    );
};

export default UserBar;