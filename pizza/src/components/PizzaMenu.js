// import React from 'react';
// import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

// function PizzaMenu({ pizzas }) {
//   return (
//     <Grid container spacing={2}>
//       {pizzas.map((pizza) => (
//         <Grid item key={pizza.id} xs={12} md={6} lg={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 {pizza.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {pizza.description}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Toppings: {pizza.toppings.join(', ')}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Price: ${pizza.price}
//               </Typography>
//               <Button variant="contained" color="primary">
//                 order now
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default PizzaMenu;

// src/components/PizzaMenu.js

// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { fetchPizzas } from '../PizzaInfo'; // Import the fetch function

// const PizzaMenu = () => {
//     const [pizzas, setPizzas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadPizzas = async () => {
//             try {
//                 const data = await fetchPizzas(); // Call the fetch function
//                 setPizzas(data);
//             } catch (err) {
//                 setError('Failed to load pizzas');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadPizzas(); // Execute the loading function
//     }, []);

//     if (loading) {
//         return <Typography variant="h6">Loading pizzas...</Typography>;
//     }

//     if (error) {
//         return <Typography variant="h6" color="error">{error}</Typography>;
//     }

//     return (
//         <Grid container spacing={2}>
//             {pizzas.map((pizza) => (
//                 <Grid item xs={12} sm={6} md={4} key={pizza.id}>
//                     <Card>
//                         <CardContent>
//                             <Typography variant="h5">{pizza.name}</Typography>
//                             <Typography variant="body2">{pizza.description}</Typography>
//                             <Typography variant="h6">${pizza.price.toFixed(2)}</Typography>
//                             <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

// export default PizzaMenu;
///?///

// src/components/PizzaMenu.js

// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { fetchPizzas } from '../PizzaInfo'; // Import the fetch function
// import { TextField, Button, Container } from '@mui/material';
// const PizzaMenu = () => {
//     const [pizzas, setPizzas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadPizzas = async () => {
//             try {
//                 const data = await fetchPizzas(); // Call the fetch function
//                 setPizzas(data);
//             } catch (err) {
//                 setError('Failed to load pizzas');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadPizzas(); // Execute the loading function
//     }, []);

//     if (loading) {
//         return <Typography variant="h6">Loading pizzas...</Typography>;
//     }

//     if (error) {
//         return <Typography variant="h6" color="error">{error}</Typography>;
//     }

//     return (
//         <Grid container spacing={2}>
//         {pizzas.map((pizza) => (
//             <Grid item xs={12} sm={6} md={4} key={pizza.id}>
//                 <Card>
//                     <CardContent>
//                         <Typography variant="h5">{pizza.name}</Typography>
//                         <Typography variant="body2">{pizza.description}</Typography>
//                         <Typography variant="h6">
//                             ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
//                         </Typography>
//                         <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
//                         <Button 
//                             variant="contained" 
//                             color="primary" 
                          
//                             style={{ marginTop: '16px' }} // Optional styling for spacing
//                         >
//                             Order
//                         </Button>
//                     </CardContent>
//                 </Card>
//             </Grid>
//         ))}
//     </Grid>
//     );
// };

// export default PizzaMenu;
//makse nigh

// src/components/PizzaMenu.js

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { fetchPizzas } from '../PizzaInfo'; // Import the fetch function
import axios from 'axios';

const PizzaMenu = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPizzas = async () => {
            try {
                const data = await fetchPizzas(); // Call the fetch function
                setPizzas(data);
            } catch (err) {
                setError('Failed to load pizzas');
            } finally {
                setLoading(false);
            }
        };

        loadPizzas(); // Execute the loading function
    }, []);

    if (loading) {
        return <Typography variant="h6">Loading pizzas...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    const handleOrder = async (pizzaName) => {
        const userEmail = localStorage.getItem('userEmail'); // Retrieve the email from local storage
        if (!userEmail) {
            alert('You need to log in to place an order!');
            return;
        }

        try {
            // Send order to the backend
            await axios.post('http://localhost:5000/api/orders', {
                email: userEmail,
                pizzaName: pizzaName
            });
            alert(`You ordered: ${pizzaName}`);
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

    return (
        <Grid container spacing={2}>
            {pizzas.map((pizza) => (
                <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{pizza.name}</Typography>
                            <Typography variant="body2">{pizza.description}</Typography>
                            <Typography variant="h6">
                                ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
                            </Typography>
                            <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={() => handleOrder(pizza.name)} // Pass pizza name to handleOrder
                                style={{ marginTop: '16px' }} // Optional styling for spacing
                            >
                                Order
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default PizzaMenu;