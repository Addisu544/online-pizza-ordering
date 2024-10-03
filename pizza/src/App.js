// import React from 'react';
// import { Container, Typography } from '@mui/material';

// import PizzaMenu from './components/PizzaMenu'
// import TopBar from './components/TopBar'
// import AddPersonForm from './components/AddPersonForm';
// import UserRegistration from './components/UserRegistration'
// import StaffRegistration from './components/StaffRegistration'
// import AdminPage from './pages/AdminPage'

// const App = () => {

//   const pizzas = [
//     {
//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },
//     {

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
//       price: 12.99,
//     },{

//       id: 1,
//       name: 'Margherita',
//       description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//       toppings: ['Tomato', 'Mozzarella', 'Basil'],
      
      
//       price: 12.99,
//     },
//     // ... other pizzas
//   ];
//   return (
//     <>
//        <TopBar />
//        <AdminPage/>
//   <StaffRegistration/>
//     <UserRegistration/>
// {/*     
    // <Container>
    //   <Typography variant="h2" align="center" gutterBottom>
    //     Pizza Ordering Service
    //   </Typography>
     
    //   <PizzaMenu pizzas={pizzas} />
    // </Container> */}
//     </>
//   );
// };

// export default App;






///////////////////////////////??????????????????????????????????////
// App.js// App.js
// // App.js// App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useAbility } from '@casl/react'; // Use useAbility instead
// import LoginPage from './LoginPage';
// import AdminPage from './pages/AdminPage';
// import SuperChefPage from './pages/SuperChefPage';
// import DeliveryPage from './pages/DeliveryPage';
// import defineAbilitiesFor from './abilities';
// import { jwtDecode } from 'jwt-decode'; // Corrected import for named export

// const App = () => {
//     const [ability, setAbility] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             setAbility(defineAbilitiesFor(decoded.role));
//         }
//     }, []);

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<LoginPage />} />
//                 <Route path="/admin" element={<AdminPage />} />
//                 <Route path="/chef" element={<SuperChefPage />} />
//                 <Route path="/delivery" element={<DeliveryPage />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;

//////////////////////////////////////////////1444444444444//
// // App.js err1
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import AdminPage from './pages/AdminPage';
// import SuperChefPage from './pages/SuperChefPage';
// import DeliveryPage from './pages/DeliveryPage';
// import defineAbilitiesFor from './abilities';
// import { jwtDecode } from 'jwt-decode';
// import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute

// const App = () => {
//     const [ability, setAbility] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             setAbility(defineAbilitiesFor(decoded.role));
//         }
//     }, []);

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<LoginPage />} />
//                 <Route 
//                     path="/admin" 
//                     element={
//                         <ProtectedRoute requiredAction="manage" resource="all">
//                             <AdminPage />
//                         </ProtectedRoute>
//                     } 
//                 />
//                 <Route 
//                     path="/chef" 
//                     element={
//                         <ProtectedRoute requiredAction="read" resource="Order">
//                             <SuperChefPage />
//                         </ProtectedRoute>
//                     } 
//                 />
//                 <Route 
//                     path="/delivery" 
//                     element={
//                         <ProtectedRoute requiredAction="read" resource="Order">
//                             <DeliveryPage />
//                         </ProtectedRoute>
//                     } 
//                 />
//                 <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


//////errr1//////////////////

// // // App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import LoginPage from './components/LoginPage'
// import AdminPage from './pages/AdminPage';
// import SuperChefPage from './pages/SuperChefPage';
// import DeliveryPage from './pages/DeliveryPage';

// import CustomerPage from './pages/CustomerPage'
// import defineAbilitiesFor from './abilities';
// import { jwtDecode } from 'jwt-decode';
// import ProtectedRoute from './ProtectedRoute';
// import { AbilityProvider } from './AbilityContext'; // Import AbilityProvider
// import { Ability } from '@casl/ability'; // Import Ability

// //
// import { Container, Typography } from '@mui/material';

// import PizzaMenu from './components/PizzaMenu'
// import TopBar from './components/TopBar'
// import AddPersonForm from './components/AddPersonForm';
// import UserRegistration from './components/UserRegistration'


// import DataTable from './components/DataTable';
// import AddPizza from './components/AddPizza'

// // import StaffRegistration from './components/StaffRegistration'

// //
// const App = () => {
    
 
//     const [ability, setAbility] = useState(new Ability()); // Initialize with an empty Ability

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             setAbility(defineAbilitiesFor(decoded.role)); // Update ability based on role
//         }
//     }, []);

//     return (

//         <>
//         <TopBar />
//        {/* <AdminPage/> */}
//   {/* <StaffRegistration/> */}
//     {/* <UserRegistration/> */}
       

//     {/* <Container>
//        <Typography variant="h2" align="center" gutterBottom>
//           Pizza Ordering Service
//        </Typography>
     
//        <PizzaMenu pizzas={pizzas} />
//    </Container>  */}




//         <AbilityProvider ability={ability}> {/* Wrap your app with AbilityProvider */}
//             <Router>
            
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/table" element={<DataTable />} />
//                     <Route path="/addpizza" element={<AddPizza />} />





                    
//                      <Route 
//                         path="/admin" 
//                         element={
//                             <ProtectedRoute requiredAction="manage" resource="all">
//                                 <AdminPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/chef" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <SuperChefPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/delivery" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <DeliveryPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/customer" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <CustomerPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
//                 </Routes>
//             </Router>
//         </AbilityProvider>
//         </>
//     );







// };



// export default App;

//rob

// src/App.js

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import LoginPage from './components/LoginPage';
// import AdminPage from './pages/AdminPage';
// import SuperChefPage from './pages/SuperChefPage';
// import DeliveryPage from './pages/DeliveryPage';
// import CustomerPage from './pages/CustomerPage';
// import defineAbilitiesFor from './abilities';
// import { jwtDecode } from 'jwt-decode';
// import ProtectedRoute from './ProtectedRoute';
// import { AbilityProvider } from './AbilityContext';
// import { Ability } from '@casl/ability';
// import { Container, Typography } from '@mui/material';
// import PizzaMenu from './components/PizzaMenu';
// import TopBar from './components/TopBar';
// import DataTable from './components/DataTable';
// import AddPizza from './components/AddPizza';
// import AdminDashboard from './components/AdminDashboard'

// import SuperChefPageOne from './components/SuperChefPageOne'
// import SuperChefPageTwo from './components/SuperChefPageTwo'
// import DeliveryOne from './components/DeliveryOne';
// import DeliveryTwo from './components/DeliveryTwo';

// import UserDashboard from './components/UserDashboard';
// import UserOne from './components/UserOne';
// import UserTwo from './components/UserTwo';
// import UserThree from './components/UserThree';

// const App = () => {
//     const [ability, setAbility] = useState(new Ability());

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             console.log('Decoded Role:', decoded.role);
//             setAbility(defineAbilitiesFor(decoded.role));
//         }
//     }, []);

//     return (
//         <AbilityProvider ability={ability}>
//             <Router>
//                 <TopBar /> {/* Always rendered */}
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/table" element={<DataTable />} />
//                     <Route path="/addpizza" element={<AddPizza />} />

//                     <Route path="/Superone" element={<SuperChefPageOne />} />
//                     <Route path="/Supertwo" element={<SuperChefPageTwo />} />

//                     <Route path="/deliveryone" element={<DeliveryOne />} />
//                     <Route path="/deliverytwo" element={<DeliveryTwo />} />

//                     <Route path="/home" element={<UserDashboard />} />
//                     <Route path="/userone" element={<UserOne />} />
//                     <Route path="/usertwo" element={<UserTwo />} />
//                     <Route path="/usethree" element={<UserThree />} />


//                     <Route 
//                         path="/admin/*" // Use wildcard to handle nested routes
//                         element={
//                             <ProtectedRoute requiredAction="manage" resource="all">
//                                 <AdminPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/chef/*" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <SuperChefPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/delivery/*" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <DeliveryPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/customer/*" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
                               
//                                 <HomePage />
                                
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
//                 </Routes>
//             </Router>
//         </AbilityProvider>
//     );
// };

// export default App;

//mesqel mata


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import LoginPage from './components/LoginPage';
// import AdminPage from './pages/AdminPage';
// import SuperChefPage from './pages/SuperChefPage';
// import DeliveryPage from './pages/DeliveryPage';
// import CustomerPage from './pages/CustomerPage'
// import { AbilityProvider } from './AbilityContext';
// import { Ability } from '@casl/ability'; // Make sure this line is included
// import { jwtDecode } from 'jwt-decode';
// import defineAbilitiesFor from './abilities'; // Ensure this function is defined correctly
// import ProtectedRoute from './ProtectedRoute';
// import TopBar from './components/TopBar';
// import UserDashboard from './components/UserDashboard'

// import LogOut from './components/LogOut';
// const App = () => {
//     const [ability, setAbility] = useState(new Ability());

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decoded = jwtDecode(token);
//             setAbility(defineAbilitiesFor(decoded.role)); // Set ability based on decoded role
//         }
//     }, []);

//     return (
//         <AbilityProvider value={{ ability, setAbility }}>
//             <Router>
//                 {/* <TopBar /> */}
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     {/* <Route path="/" element={<UserDashboard />} /> */}

//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/logout" element={<LogOut />} />
//                     <Route 
//                         path="/admin/*" 
//                         element={
//                             <ProtectedRoute requiredAction="manage" resource="all">
//                                 <AdminPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/chef/*" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <SuperChefPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/delivery/*" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Order">
//                                 <DeliveryPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route 
//                         path="/customer/*" 
//                         element={
//                             <ProtectedRoute requiredAction="read" resource="Menu">
//                                 <CustomerPage />
//                             </ProtectedRoute>
//                         } 
//                     />
//                     <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
//                 </Routes>
//             </Router>
//         </AbilityProvider>
//     );
// };

// export default App;
// //user cart





























import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './components/LoginPage';
import AdminPage from './pages/AdminPage';
import SuperChefPage from './pages/SuperChefPage';
import DeliveryPage from './pages/DeliveryPage';
import CustomerPage from './pages/CustomerPage';
import { AbilityProvider } from './AbilityContext';
import { Ability } from '@casl/ability';
import { jwtDecode } from 'jwt-decode';
import defineAbilitiesFor from './abilities';
import ProtectedRoute from './ProtectedRoute';
import TopBar from './components/TopBar';
import UserDashboard from './components/UserDashboard';
import LogOut from './components/LogOut';
import UserRegistration from './components/UserRegistration'
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './context/AuthContext';
const App = () => {
    const [ability, setAbility] = useState(new Ability());

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setAbility(defineAbilitiesFor(decoded.role));
        }
    }, []);

    return (
        <AbilityProvider value={{ ability, setAbility }}>
            <AuthProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/logout" element={<LogOut />} />
                        <Route path="/UserRegistration" element={<UserRegistration />} />
                        <Route 
                            path="/admin/*" 
                            element={
                                <ProtectedRoute requiredAction="manage" resource="all">
                                    <AdminPage />
                                </ProtectedRoute>
                            } 
                        />
                        <Route 
                            path="/chef/*" 
                            element={
                                <ProtectedRoute requiredAction="read" resource="Order">
                                    <SuperChefPage />
                                </ProtectedRoute>
                            } 
                        />
                        <Route 
                            path="/delivery/*" 
                            element={
                                <ProtectedRoute requiredAction="read" resource="Order">
                                    <DeliveryPage />
                                </ProtectedRoute>
                            } 
                        />
                        <Route 
                            path="/customer/*" 
                            element={
                                <ProtectedRoute requiredAction="read" resource="Menu">
                                    <CustomerPage />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/unauthorized" element={<div>You are not authorized to view this page.</div>} />
                    </Routes>
                </Router>
            </CartProvider>
            </AuthProvider>
        </AbilityProvider>
    );
};

export default App;

