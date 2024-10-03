// // LoginPage.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Using useNavigate
// import { TextField, Button, Typography } from '@mui/material';

// import { Container } from '@mui/material';
// import PizzaMenu from './components/PizzaMenu'
// import pizzas from './PizzaInfo';

// const LoginPage = () => {

    
  

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             const role = response.data.role;

//             // Redirect based on user role
//             if (role === 'Administrator') {
//                 navigate('/admin');
//             } else if (role === 'Super Chef') {
//                 navigate('/chef');
//             } else if (role === 'Food Delivery') {
//                 navigate('/delivery');
//             }
//             else if (role === 'customer') {
//                 navigate('/customer');
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <div>
//             <Container>
//        <Typography variant="h2" align="center" gutterBottom>
//           Pizza Ordering Service
//        </Typography>
     
//        <PizzaMenu pizzas={pizzas} />
//    </Container> 
//             <Typography variant="h4">Login</Typography>
//             <form onSubmit={handleLogin}>
//                 <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button type="submit" variant="contained" color="primary">Login</Button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;





// src/LoginPage.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Using useNavigate
// import { TextField, Button, Typography, Container } from '@mui/material';
// import PizzaMenu from './components/PizzaMenu'; // No need to import pizzas

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             const role = response.data.role;

//             // Redirect based on user role
//             if (role === 'Administrator') {
//                 navigate('/admin');
//             } else if (role === 'Super Chef') {
//                 navigate('/chef');
//             } else if (role === 'Food Delivery') {
//                 navigate('/delivery');
//             } else if (role === 'customer') {
//                 navigate('/customer');
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h2" align="center" gutterBottom>
//                 Pizza Ordering Service
//             </Typography>
//             <PizzaMenu /> {/* No need to pass pizzas as a prop */}
//             <Typography variant="h4">Login</Typography>
//             <form onSubmit={handleLogin}>
//                 <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button type="submit" variant="contained" color="primary">Login</Button>
//             </form>
//         </Container>
//     );
// };

// export default LoginPage;

//do



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Using useNavigate
// import { TextField, Button, Typography, Container } from '@mui/material';
// import PizzaMenu from './components/PizzaMenu'; // No need to import pizzas

// const HomePage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             const role = response.data.role;

//             // Redirect based on user role
//             if (role === 'Administrator') {
//                 navigate('/admin');
//             } else if (role === 'Super Chef') {
//                 navigate('/chef');
//             } else if (role === 'Food Delivery') {
//                 navigate('/delivery');
//             } else if (role === 'customer') {
//                 navigate('/customer');
//             }
//         } catch (error) {
//             console.error('Login failed:', error);
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h2" align="center" gutterBottom>
//                 Pizza Ordering Service
//             </Typography>
//             <PizzaMenu /> {/* No need to pass pizzas as a prop */}
//             <Typography variant="h4">Login</Typography>
//             <form onSubmit={handleLogin}>
//                 <TextField
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <TextField
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button type="submit" variant="contained" color="primary">Login</Button>
//             </form>
//         </Container>
//     );
// };

// export default HomePage;


//do2

// src/HomePage.js

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Using useNavigate
// import { Typography, Button, Container } from '@mui/material';
// import PizzaMenu from './components/PizzaMenu';

// const HomePage = () => {
//     const navigate = useNavigate();

//     const handleLoginRedirect = () => {
//         navigate('/login'); // Redirect to the LoginPage
//     };

//     return (
//         <Container>
//             <Typography variant="h2" align="center" gutterBottom>
//                 Pizza Ordering Service
//             </Typography>
//             <Button 
//                 variant="contained" 
//                 color="primary" 
//                 onClick={handleLoginRedirect} 
//                 style={{ marginTop: '20px' }} // Optional styling for spacing
//             >
//                 Login
//             </Button>

//             <PizzaMenu />
//                     </Container>
//     );
// };

// export default HomePage;

// hide login button
// src/HomePage.js


















import React from 'react';
import { useNavigate } from 'react-router-dom'; // Using useNavigate
import { Typography, Button, Container } from '@mui/material';
import PizzaMenu from './PizzaMenu';

const UserDashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Check for token

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to the LoginPage
    };

    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Pizza Ordering Service
            </Typography>
            {/* {!token && ( // Only show the login button if the user is not logged in
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLoginRedirect} 
                    style={{ marginTop: '20px' }} // Optional styling for spacing
                >
                    Login
                </Button>
            )} */}

            <PizzaMenu />
        </Container>
    );
};

export default UserDashboard;
// //for cart         


