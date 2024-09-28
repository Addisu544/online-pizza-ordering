// import React from 'react';
// import { Container, Typography } from '@mui/material';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DataTable from '../components/DataTable';
// import StaffRegistration from '../components/StaffRegistration'
// import AddPizza from '../components/AddPizza'



// const AdminPage = () => {
 
//   return (
//     <>
      
    
//     <Container>
//       <Typography variant="h2" align="center" gutterBottom>
//         admin page
//       </Typography>
//      <StaffRegistration/>
//      <DataTable />
//      <AddPizza/>
//     </Container>
//     </>

   

//   );
// };

// // export default AdminPage;
// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
// import { Route, Routes, Link } from 'react-router-dom';
// import DataTable from '../components/DataTable';
// import StaffRegistration from '../components/StaffRegistration';
// import AddPizza from '../components/AddPizza';

// const AdminPage = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             onClick={toggleDrawer(true)}
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
//             Admin Panel
//           </Typography>
//         </Toolbar>
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <div
//             role="presentation"
//             onClick={toggleDrawer(false)}
//             onKeyDown={toggleDrawer(false)}
//             style={{ width: 250 }}
//           >
//             <List>
//               <ListItem button component={Link} to="/admin/staff">
//                 <ListItemText primary="Staff" />
//               </ListItem>
//               <ListItem button component={Link} to="/admin/addpizza">
//                 <ListItemText primary="Add Pizza" />
//               </ListItem>
//               <ListItem button component={Link} to="/admin/data-table">
//                 <ListItemText primary="Data Table" />
//               </ListItem>
//             </List>
//             <Divider />
//           </div>
//         </Drawer>
//       </AppBar>

//       <Container>
//         <Routes>
//           <Route path="/staff" element={<StaffRegistration />} />
//           <Route path="/addpizza" element={<AddPizza />} />
//           <Route path="/data-table" element={<DataTable />} />
//           <Route path="/" element={<StaffRegistration />} /> {/* Default route */}
//         </Routes>
//       </Container>
//     </>
//   );
// };

// export default AdminPage;
//rob
// src/pages/AdminPage.js

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
// import DataTable from '../components/DataTable';
// import StaffRegistration from '../components/StaffRegistration';
// import AddPizza from '../components/AddPizza';
// import AdminDashboard from '../components/AdminDashboard';
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
//                             <ListItem button component={Link} to="staff">
//                                 <ListItemText primary="Staff" />
//                             </ListItem>
//                             <ListItem button component={Link} to="addpizza">
//                                 <ListItemText primary="Add Pizza" />
//                             </ListItem>
//                             <ListItem button component={Link} to="data-table">
//                                 <ListItemText primary="Data Table" />
//                             </ListItem>
//                         </List>
//                         <Divider />
//                     </div>
//                 </Drawer>
//             </AppBar>

//             <Container>
//                 <Routes>
//                     <Route path="staff" element={<StaffRegistration />} />
//                     <Route path="addpizza" element={<AddPizza />} />
//                     <Route path="data-table" element={<DataTable />} />
//                     <Route path="/" element={<AdminDashboard />} /> {/* Default route */}
//                 </Routes>
//             </Container>
//         </>
//     );
// };

// export default AdminPage;



//to use one 


// src/pages/AdminPage.js

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
import DataTable from '../components/DataTable';
import StaffRegistration from '../components/StaffRegistration';
import AddPizza from '../components/AddPizza';
import AdminDashboard from '../components/AdminDashboard';
import MenuDrawer from '../components/MenuDrawer';
import UserBar from '../components/UserBar'
const AdminPage = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { label: 'Staff', path: 'staff' },
        { label: 'Add Pizza', path: 'addpizza' },
        { label: 'Data Table', path: 'data-table' },
    ];

    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    return (
        <>
{/*         
            <AppBar position="static">
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
             */}
        
        <UserBar  isLoggedIn={isLoggedIn}  drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} />
            {/* <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={menuItems} /> */}

            <Container>
                <Routes>
                    <Route path="staff" element={<StaffRegistration />} />
                    <Route path="addpizza" element={<AddPizza />} />
                    <Route path="data-table" element={<DataTable />} />
                    <Route path="/" element={<AdminDashboard />} /> {/* Default route */}
                </Routes>
            </Container>
        </>
    );
};

export default AdminPage;