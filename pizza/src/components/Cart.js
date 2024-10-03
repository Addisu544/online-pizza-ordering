// import React from 'react';
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Button,
//     Typography,
// } from '@mui/material';
// import axios from 'axios';

// const Cart = ({ cartItems, open, onClose }) => {
//     const handleConfirmOrder = async () => {
//         const userEmail = localStorage.getItem('userEmail');
//         if (!userEmail) {
//             alert('You need to log in to place an order!');
//             return;
//         }

//         try {
//             await Promise.all(cartItems.map(item =>
//                 axios.post('http://localhost:5000/api/orders', {
//                     email: userEmail,
//                     pizzaName: item.name,
//                     toppings: item.selectedToppings,
//                 })
//             ));
//             alert('Your order has been placed!');
//             onClose(); // Close the cart dialog after order is confirmed
//         } catch (error) {
//             console.error('Error placing order:', error);
//             alert('Failed to place order. Please try again.');
//         }
//     };

//     return (
//         <Dialog open={open} onClose={onClose}>
//             <DialogTitle>Your Cart</DialogTitle>
//             <DialogContent>
//                 {cartItems.length === 0 ? (
//                     <Typography>No items in the cart.</Typography>
//                 ) : (
//                     cartItems.map((item, index) => (
//                         <Typography key={index}>
//                             {item.name} with toppings: {item.selectedToppings.join(', ')}
//                         </Typography>
//                     ))
//                 )}
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={onClose} color="primary">Close</Button>
//                 <Button onClick={handleConfirmOrder} color="primary">Confirm Order</Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default Cart;








// Cart.js
import React, { useContext, useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { CartContext } from './CartContext';
import axios from 'axios';

const Cart = ({ open, onClose }) => {
    const { cart, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);

    const handleOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
            alert('You need to log in to place an order!');
            return;
        }

        setLoading(true);
        try {
            await Promise.all(cart.map((item) =>
                axios.post('http://localhost:5000/api/orders', {
                    email: userEmail,
                    pizzaName: item.pizza.name,
                    toppings: item.toppings,
                })
            ));
            alert('Order placed successfully!');
            clearCart();
            onClose();
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Cart</DialogTitle>
            <DialogContent>
                {cart.length === 0 ? (
                    <Typography variant="body1">Your cart is empty.</Typography>
                ) : (
                    <List>
                        {cart.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={item.pizza.name}
                                    secondary={`Toppings: ${item.toppings.join(', ')}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
                <Button onClick={handleOrder} color="primary" disabled={loading || cart.length === 0}>
                    {loading ? 'Ordering...' : 'Order'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Cart;