// // src/components/AddPizza.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Typography, Container } from '@mui/material';

// const AddPizza = () => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [toppings, setToppings] = useState('');
//     const [price, setPrice] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const toppingsArray = toppings.split(',').map(topping => topping.trim()); // Convert toppings string to array
        
//         try {
//             const response = await axios.post('http://localhost:5000/api/pizzas', {
//                 name,
//                 description,
//                 toppings: toppingsArray,
//                 price: parseFloat(price),
//             });
//             alert('Pizza added successfully!');
//             // Clear the form fields
//             setName('');
//             setDescription('');
//             setToppings('');
//             setPrice('');
//         } catch (error) {
//             console.error('Error adding pizza:', error);
//             alert('Failed to add pizza');
//         }
//     };

//     return (
//         <Container>
//             <Typography variant="h4" gutterBottom>Add New Pizza</Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     label="Name"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <TextField
//                     label="Description"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//                 <TextField
//                     label="Toppings (comma separated)"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={toppings}
//                     onChange={(e) => setToppings(e.target.value)}
//                 />
//                 <TextField
//                     label="Price"
//                     type="number"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                 />
//                 <Button type="submit" variant="contained" color="primary">Add Pizza</Button>
//             </form>
//         </Container>
//     );
// };

// export default AddPizza;

// src/components/AddPizza.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Snackbar } from '@mui/material';
import { z } from 'zod';

// Define Zod schema for validation
const pizzaSchema = z.object({
    name: z.string().min(1, 'Pizza name is required'),
    description: z.string().min(1, 'Description is required'),
    toppings: z.string().min(1, 'At least one topping is required'),
    price: z.number().positive('Price must be a positive number'),
});

const AddPizza = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [toppings, setToppings] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form data
        const validationResult = pizzaSchema.safeParse({
            name,
            description,
            toppings,
            price: parseFloat(price),
        });

        if (!validationResult.success) {
            // Set errors if validation fails
            const validationErrors = {};
            validationResult.error.errors.forEach((error) => {
                validationErrors[error.path[0]] = error.message;
            });
            setErrors(validationErrors);
            return;
        }

        const toppingsArray = toppings.split(',').map(topping => topping.trim()); // Convert toppings string to array
        
        try {
            await axios.post('http://localhost:5000/api/pizzas', {
                name,
                description,
                toppings: toppingsArray,
                price: parseFloat(price),
            });
            setSnackbarOpen(true); // Open the snackbar after successful addition
            // Clear the form fields
            setName('');
            setDescription('');
            setToppings('');
            setPrice('');
            setErrors({}); // Clear errors
        } catch (error) {
            console.error('Error adding pizza:', error);
            alert('Failed to add pizza');
        }
    };

    // Function to handle closing the Snackbar
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Add New Pizza</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    error={!!errors.description}
                    helperText={errors.description}
                />
                <TextField
                    label="Toppings (comma separated)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={toppings}
                    onChange={(e) => setToppings(e.target.value)}
                    error={!!errors.toppings}
                    helperText={errors.toppings}
                />
                <TextField
                    label="Price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    error={!!errors.price}
                    helperText={errors.price}
                />
                <Button type="submit" variant="contained" color="primary">Add Pizza</Button>
            </form>

            {/* Snackbar for success notification */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Pizza info successfully added!"
            />
        </Container>
    );
};

export default AddPizza;