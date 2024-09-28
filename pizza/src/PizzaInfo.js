// // src/components/PizzaInfo.js

// const pizzas = [
//     {
//         id: 1,
//         name: 'Margherita',
//         description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//         toppings: ['Tomato', 'Mozzarella', 'Basil'],
//         price: 12.99,
//     },
//     {
//         id: 2,
//         name: 'Pepperoni',
//         description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//         toppings: ['Pepperoni', 'Mozzarella', 'Tomato'],
//         price: 14.99,
//     },
//     {
//         id: 3,
//         name: 'Vegetarian',
//         description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//         toppings: ['Bell Peppers', 'Olives', 'Onions', 'Mozzarella'],
//         price: 13.99,
//     },{
//         id: 1,
//         name: 'Margherita',
//         description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//         toppings: ['Tomato', 'Mozzarella', 'Basil'],
//         price: 12.99,
//     },
//     {
//         id: 2,
//         name: 'Pepperoni',
//         description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//         toppings: ['Pepperoni', 'Mozzarella', 'Tomato'],
//         price: 14.99,
//     },
//     {
//         id: 3,
//         name: 'Vegetarian',
//         description: 'Classic pizza with tomato sauce, mozzarella, and basil.',
//         toppings: ['Bell Peppers', 'Olives', 'Onions', 'Mozzarella'],
//         price: 13.99,
//     },
//     // Add more pizzas as needed
// ];

// export default pizzas;





// src/components/PizzaInfo.js
// src/components/PizzaInfo.js

import axios from 'axios';

// Function to fetch pizzas from the API
export const fetchPizzas = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/pizzas');
        return response.data;
    } catch (error) {
        console.error('Error fetching pizzas:', error);
        throw new Error('Failed to fetch pizza data');
    }
};