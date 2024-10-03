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

// import React, { useEffect, useState } from 'react';
// import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
// import { fetchPizzas } from '../PizzaInfo'; // Import the fetch function
// import axios from 'axios';

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

//     const handleOrder = async (pizzaName) => {
//         const userEmail = localStorage.getItem('userEmail'); // Retrieve the email from local storage
//         if (!userEmail) {
//             alert('You need to log in to place an order!');
//             return;
//         }

//         try {
//             // Send order to the backend
//             await axios.post('http://localhost:5000/api/orders', {
//                 email: userEmail,
//                 pizzaName: pizzaName
//             });
//             alert(`You ordered: ${pizzaName}`);
//         } catch (error) {
//             console.error('Error placing order:', error);
//             alert('Failed to place order. Please try again.');
//         }
//     };

//     return (
//         <Grid container spacing={2}>
//             {pizzas.map((pizza) => (
//                 <Grid item xs={12} sm={6} md={4} key={pizza.id}>
//                     <Card>
//                         <CardContent>
//                             <Typography variant="h5">{pizza.name}</Typography>
//                             <Typography variant="body2">{pizza.description}</Typography>
//                             <Typography variant="h6">
//                                 ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
//                             </Typography>
//                             <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
//                             <Button 
//                                 variant="contained" 
//                                 color="primary" 
//                                 onClick={() => handleOrder(pizza.name)} // Pass pizza name to handleOrder
//                                 style={{ marginTop: '16px' }} // Optional styling for spacing
//                             >
//                                 Order
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

// export default PizzaMenu;
//kidame







// import React, { useEffect, useState } from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Checkbox,
//     FormControlLabel,
// } from '@mui/material';
// import { fetchPizzas } from '../PizzaInfo';
// import axios from 'axios';

// const PizzaMenu = () => {
//     const [pizzas, setPizzas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [selectedPizza, setSelectedPizza] = useState(null);
//     const [selectedToppings, setSelectedToppings] = useState([]);

//     useEffect(() => {
//         const loadPizzas = async () => {
//             try {
//                 const data = await fetchPizzas();
//                 setPizzas(data);
//             } catch (err) {
//                 setError('Failed to load pizzas');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadPizzas();
//     }, []);

//     const handleOrder = (pizza) => {
//         setSelectedPizza(pizza);
//         setSelectedToppings(pizza.toppings); // Set default toppings to all available
//         setOpenDialog(true);
//     };

//     const handleDialogClose = () => {
//         setOpenDialog(false);
//         setSelectedPizza(null);
//         setSelectedToppings([]);
//     };

//     const handleToppingChange = (topping) => {
//         setSelectedToppings((prev) => {
//             // Check if the topping is already selected
//             if (prev.includes(topping)) {
//                 // If yes, remove it from the array
//                 return prev.filter((t) => t !== topping);
//             } else {
//                 // If not, add it to the array
//                 return [...prev, topping];
//             }
//         });
//     };

//     const handleConfirmOrder = async () => {
//         const userEmail = localStorage.getItem('userEmail');
//         if (!userEmail) {
//             alert('You need to log in to place an order!');
//             return;
//         }

//         try {
//             await axios.post('http://localhost:5000/api/orders', {
//                 email: userEmail,
//                 pizzaName: selectedPizza.name,
//                 toppings: selectedToppings,
//             });
//             alert(`You ordered: ${selectedPizza.name} with toppings: ${selectedToppings.join(', ')}`);
//             handleDialogClose();
//         } catch (error) {
//             console.error('Error placing order:', error);
//             alert('Failed to place order. Please try again.');
//         }
//     };

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
//                             <Typography variant="h6">
//                                 ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
//                             </Typography>
//                             <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
//                             <Button 
//                                 variant="contained" 
//                                 color="primary" 
//                                 onClick={() => handleOrder(pizza)}
//                                 style={{ marginTop: '16px' }}
//                             >
//                                 Order
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}

//             {/* Dialog for selecting toppings */}
//             <Dialog open={openDialog} onClose={handleDialogClose}>
//                 <DialogTitle>Select Toppings</DialogTitle>
//                 <DialogContent>
//                     {selectedPizza && selectedPizza.toppings.map((topping, index) => (
//                         <FormControlLabel
//                             key={index}
//                             control={
//                                 <Checkbox
//                                     checked={selectedToppings.includes(topping)} // Check if topping is selected
//                                     onChange={() => handleToppingChange(topping)} // Toggle topping selection
//                                 />
//                             }
//                             label={topping}
//                         />
//                     ))}
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleDialogClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleConfirmOrder} color="primary">
//                         Confirm Order
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Grid>
//     );
// };

// export default PizzaMenu;
//topping work














// import React, { useEffect, useState } from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Checkbox,
//     FormControlLabel,
// } from '@mui/material';
// import { fetchPizzas } from '../PizzaInfo';
// import OrderLogic from './OrderLogic';

// const PizzaMenu = () => {
//     const [pizzas, setPizzas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [selectedPizza, setSelectedPizza] = useState(null);
//     const { selectedToppings, handleToppingChange, handleConfirmOrder } = OrderLogic({ selectedPizza, setOpenDialog });

//     useEffect(() => {
//         const loadPizzas = async () => {
//             try {
//                 const data = await fetchPizzas();
//                 setPizzas(data);
//             } catch (err) {
//                 setError('Failed to load pizzas');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadPizzas();
//     }, []);

//     const handleOrder = (pizza) => {
//         setSelectedPizza(pizza);
//         setOpenDialog(true);
//     };

//     const handleDialogClose = () => {
//         setOpenDialog(false);
//         setSelectedPizza(null);
//     };

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
//                             <Typography variant="h6">
//                                 ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
//                             </Typography>
//                             <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
//                             <Button 
//                                 variant="contained" 
//                                 color="primary" 
//                                 onClick={() => handleOrder(pizza)}
//                                 style={{ marginTop: '16px' }}
//                             >
//                                 Order
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}

//             {/* Dialog for selecting toppings */}
//             <Dialog open={openDialog} onClose={handleDialogClose}>
//                 <DialogTitle>Select Toppings</DialogTitle>
//                 <DialogContent>
//                     {selectedPizza && selectedPizza.toppings.map((topping, index) => (
//                         <FormControlLabel
//                             key={index}
//                             control={
//                                 <Checkbox
//                                     checked={selectedToppings.includes(topping)} // Check if topping is selected
//                                     onChange={() => handleToppingChange(topping)} // Toggle topping selection
//                                 />
//                             }
//                             label={topping}
//                         />
//                     ))}
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleDialogClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleConfirmOrder} color="primary">
//                         Confirm Order
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Grid>
//     );
// };

// export default PizzaMenu;
// // for cart





// import React, { useEffect, useState, useContext } from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Checkbox,
//     FormControlLabel,
// } from '@mui/material';
// import { fetchPizzas } from '../PizzaInfo';
// import OrderLogic from './OrderLogic';
// import { CartContext } from './CartContext';

// const PizzaMenu = () => {
//     const [pizzas, setPizzas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [selectedPizza, setSelectedPizza] = useState(null);
//     const { selectedToppings, handleToppingChange } = OrderLogic({ selectedPizza, setOpenDialog });
//     const { addToCart } = useContext(CartContext);

//     useEffect(() => {
//         const loadPizzas = async () => {
//             try {
//                 const data = await fetchPizzas();
//                 setPizzas(data);
//             } catch (err) {
//                 setError('Failed to load pizzas');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadPizzas();
//     }, []);

//     const handleOrder = (pizza) => {
//         setSelectedPizza(pizza);
//         setOpenDialog(true);
//     };

//     const handleDialogClose = () => {
//         setOpenDialog(false);
//         setSelectedPizza(null);
//     };

//     const handleAddToCart = () => {
//         addToCart(selectedPizza, selectedToppings);
//         setOpenDialog(false);
//         setSelectedPizza(null);
//     };

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
//                             <Typography variant="h6">
//                                 ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
//                             </Typography>
//                             <Typography variant="body2">Toppings: {pizza.toppings.join(', ')}</Typography>
//                             <Button 
//                                 variant="contained" 
//                                 color="primary" 
//                                 onClick={() => handleOrder(pizza)}
//                                 style={{ marginTop: '16px' }}
//                             >
//                                 Add to Cart
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}

//             {/* Dialog for selecting toppings */}
//             <Dialog open={openDialog} onClose={handleDialogClose}>
//                 <DialogTitle>Select Toppings</DialogTitle>
//                 <DialogContent>
//                     {selectedPizza && selectedPizza.toppings.map((topping, index) => (
//                         <FormControlLabel
//                             key={index}
//                             control={
//                                 <Checkbox
//                                     checked={selectedToppings.includes(topping)} // Check if topping is selected
//                                     onChange={() => handleToppingChange(topping)} // Toggle topping selection
//                                 />
//                             }
//                             label={topping}
//                         />
//                     ))}
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleDialogClose} color="primary">
//                         Cancel
//                     </Button>
//                     <Button onClick={handleAddToCart} color="primary">
//                         Add to Cart
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Grid>
//     );
// };

// export default PizzaMenu;
//reset topping









import React, { useEffect, useState, useContext } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import { CardMedia, Box ,Divider} from '@mui/material';
import { fetchPizzas } from '../PizzaInfo';
import { CartContext } from './CartContext';

const PizzaMenu = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const loadPizzas = async () => {
            try {
                const data = await fetchPizzas();
                setPizzas(data);
            } catch (err) {
                setError('Failed to load pizzas');
            } finally {
                setLoading(false);
            }
        };

        loadPizzas();
    }, []);

    const handleOrder = (pizza) => {
        setSelectedPizza(pizza);
        setSelectedToppings([]); // Reset toppings when a new pizza is selected
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setSelectedPizza(null);
    };

    const handleToppingChange = (topping) => {
        setSelectedToppings((prev) => {
            if (prev.includes(topping)) {
                return prev.filter((t) => t !== topping);
            } else {
                return [...prev, topping];
            }
        });
    };

    const handleAddToCart = () => {
        addToCart(selectedPizza, selectedToppings);
        setOpenDialog(false);
        setSelectedPizza(null);
    };

    if (loading) {
        return <Typography variant="h6">Loading pizzas...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Grid container spacing={2}>
            {pizzas.map((pizza) => (
                <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                    {/* <Card>
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
                                onClick={() => handleOrder(pizza)}
                                style={{ marginTop: '16px' }}
                            >
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card> */}
                      <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3, borderRadius: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {pizza.name}
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="body2" color="text.secondary" paragraph>
          {pizza.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginBottom: 1 }}>
          ${typeof pizza.price === 'number' ? pizza.price.toFixed(2) : pizza.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Toppings: {pizza.toppings.join(', ')}
        </Typography>
        <Box mt={2}>
          <Button 
            variant="contained" color="secondary" 
            onClick={() => handleOrder(pizza)}
            fullWidth
            sx={{ padding: 1.5, fontSize: '1rem' }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
                </Grid>
            ))}

            {/* Dialog for selecting toppings */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Select Toppings</DialogTitle>
                <DialogContent>
                    {selectedPizza && selectedPizza.toppings.map((topping, index) => (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={selectedToppings.includes(topping)} // Check if topping is selected
                                    onChange={() => handleToppingChange(topping)} // Toggle topping selection
                                />
                            }
                            label={topping}
                        />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddToCart} color="primary">
                        Add to Cart
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default PizzaMenu;