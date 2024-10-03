// import React, { useState } from 'react';
// import axios from 'axios';

// const OrderLogic = ({ selectedPizza, setOpenDialog }) => {
//     const [selectedToppings, setSelectedToppings] = useState([]);

//     const handleToppingChange = (topping) => {
//         setSelectedToppings((prev) => {
//             if (prev.includes(topping)) {
//                 return prev.filter((t) => t !== topping);
//             } else {
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
//             setOpenDialog(false); // Close the dialog after order is confirmed
//         } catch (error) {
//             console.error('Error placing order:', error);
//             alert('Failed to place order. Please try again.');
//         }
//     };

//     return { selectedToppings, handleToppingChange, handleConfirmOrder };
// };

// export default OrderLogic;
// // crat list
// topping reset
// OrderLogic.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderLogic = ({ selectedPizza, setOpenDialog, resetToppings }) => {
    const [selectedToppings, setSelectedToppings] = useState([]);

    const handleToppingChange = (topping) => {
        setSelectedToppings((prev) => {
            if (prev.includes(topping)) {
                return prev.filter((t) => t !== topping);
            } else {
                return [...prev, topping];
            }
        });
    };

    const handleConfirmOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
            alert('You need to log in to place an order!');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/orders', {
                email: userEmail,
                pizzaName: selectedPizza.name,
                toppings: selectedToppings,
            });
            alert(`You ordered: ${selectedPizza.name} with toppings: ${selectedToppings.join(', ')}`);
            setOpenDialog(false); // Close the dialog after order is confirmed
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

    // Reset toppings when a new pizza is selected
    React.useEffect(() => {
        resetToppings();
    }, [selectedPizza, resetToppings]);

    return { selectedToppings, handleToppingChange, handleConfirmOrder };
};

export default OrderLogic;

