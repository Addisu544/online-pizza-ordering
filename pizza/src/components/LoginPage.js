// // src/components/LoginPage.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Using useNavigate
// import { TextField, Button, Typography, Container } from '@mui/material';

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
//             <Typography variant="h4" align="center" gutterBottom>
//                 Login
//             </Typography>
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

// src/components/LoginPage.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Using useNavigate
// import { TextField, Button, Typography, Container } from '@mui/material';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', { email, password });
//             localStorage.setItem('token', response.data.token);
//             localStorage.setItem('userEmail', email); // Save the user email
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
//             <Typography variant="h4" align="center" gutterBottom>
//                 Login
//             </Typography>
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

//mesqel mata

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useAbility } from '../AbilityContext'; // Import ability context
import defineAbilitiesFor from '../abilities'; // Import ability definition

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAbility } = useAbility(); // Get the ability setter

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userEmail', email);
            const role = response.data.role;

            // Set abilities immediately after login
            setAbility(defineAbilitiesFor(role));

            // Redirect based on user role
            if (role === 'Administrator') {
                navigate('/admin');
            } else if (role === 'Super Chef') {
                navigate('/chef');
            } else if (role === 'Food Delivery') {
                navigate('/delivery');
            } else if (role === 'customer') {
                navigate('/customer');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials');
        }
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">Login</Button>
            </form>
        </Container>
    );
};

export default LoginPage;