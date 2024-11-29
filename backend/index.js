const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Replace with your MySQL username
    password: '',  // Replace with your MySQL password
    database: 'gg',  // Your database name
});

// Test the database connection
connection.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Database connected successfully');
});






// Route to register a new customer
app.post('/api/register', async (req, res) => {
    const { first_name, last_name, phone_number, address, email, country, subcity, kebele, phobia, password } = req.body;
    const role = 'customer'; // Set default role to customer

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new customer into the database
        const query = `
            INSERT INTO customers (first_name, last_name, phone_number, address, email, country, subcity, kebele, role, phobia, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        const result = await connection.promise().query(query, [first_name, last_name, phone_number, address, email, country, subcity, kebele, role, phobia, hashedPassword]);

        res.status(201).json({ id: result[0].insertId, first_name, last_name, email }); // Return the newly created customer info
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registering customer' });
    }
});





// Route to register a new staff
app.post('/api/register-staff', async (req, res) => {
    const { first_name, last_name, phone, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Insert the new staff into the database
        const query = `
            INSERT INTO staffs (first_name, last_name, phone, email, password, role)
            VALUES (?, ?, ?, ?, ?, ?)`;

        const result = await connection.promise().query(query, [first_name, last_name, phone, email, hashedPassword, role]);

        // Respond with the newly created staff information
        res.status(201).json({ id: result[0].insertId, first_name, last_name, email, role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registering staff' });
    }
});







// Route to login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // First, check the staffs table
        let [staffs] = await connection.promise().query('SELECT * FROM staffs WHERE email = ?', [email]);
        
        // If no staff found, check the customers table
        if (staffs.length === 0) {
            let [customers] = await connection.promise().query('SELECT * FROM customers WHERE email = ?', [email]);
            // If still no user found, return an error
            if (customers.length === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            var user = customers[0];
        } else {
            var user = staffs[0];
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token with user details
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'secret_key');

        // Prepare the response with additional user information
        const response = {
            token,
            role: user.role,
            firstName: user.first_name || user.firstName, // Adjust based on your table's field names
            lastName: user.last_name || user.lastName,     // Adjust based on your table's field names
        };

        res.json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error logging in' });
    }
});







// Route to get all staffs (excluding password)
app.get('/api/staffs', async (req, res) => {
    try {
        const [result] = await connection.promise().query('SELECT id, first_name, last_name, phone, email, role FROM staffs'); // Exclude password
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching staffs' });
    }
});




// Route to get all customers (excluding password)
app.get('/api/customers', async (req, res) => {
    try {
        const [result] = await connection.promise().query('SELECT id, first_name, last_name, phone_number, email, country, subcity, kebele FROM customers'); // Exclude password
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching customers' });
    }
});









// Route to add a new pizza
app.post('/api/pizzas', async (req, res) => {
    const { name, description, toppings, price } = req.body;

    try {
        // Ensure toppings are a comma-separated string
        const toppingsString = Array.isArray(toppings) ? toppings.join(', ') : toppings;

        // Debugging output
        console.log('Inserting pizza:', { name, description, toppings: toppingsString, price });

        const query = `
            INSERT INTO pizzas (name, description, toppings, price)
            VALUES (?, ?, ?, ?)`;
        
        const result = await connection.promise().query(query, [name, description, toppingsString, price]);

        // Respond with the newly created pizza information
        res.status(201).json({ id: result[0].insertId, name, description, toppings: toppingsString, price });
    } catch (err) {
        console.error('Error adding pizza:', err);
        res.status(500).json({ error: 'Error adding pizza' });
    }
});








// Route to get all pizzas
app.get('/api/pizzas', async (req, res) => {
    try {
        const [result] = await connection.promise().query('SELECT * FROM pizzas');

        
        res.json(result);
    } catch (err) {
        console.error('Error fetching pizzas:', err);
        res.status(500).json({ error: 'Error fetching pizzas' });
    }
});








// // Order pizza
// app.post('/api/orders', async (req, res) => {
//     console.log('Received order:', req.body); // Log the request body
//     const { email, pizzaName, toppings } = req.body;

//     // Validate the request body
//     if (!email || !pizzaName || !toppings) {
//         return res.status(400).json({ error: 'Email, pizza name, and toppings are required' });
//     }

//     const status = 'queued'; // Default status

//     try {
//         // Find customer by email
//         const [customerResult] = await connection.promise().query(
//             'SELECT id FROM customers WHERE email = ?',
//             [email]
//         );
//         const customerId = customerResult[0]?.id;

//         // Find pizza by name
//         const [pizzaResult] = await connection.promise().query(
//             'SELECT id FROM pizzas WHERE name = ?',
//             [pizzaName]
//         );
//         const pizzaId = pizzaResult[0]?.id;

//         // Check if customer and pizza exist
//         if (!customerId || !pizzaId) {
//             return res.status(400).json({ error: 'Invalid email or pizza name' });
//         }

//         // Insert order into the database
//         const [result] = await connection.promise().query(
//             'INSERT INTO orders (email, pizza_name, toppings, status, customer_id, pizza_id) VALUES (?, ?, ?, ?, ?, ?)',
//             [email, pizzaName, toppings, status, customerId, pizzaId]
//         );

//         // Send back the created order
//         res.status(201).json({ id: result.insertId, email, pizzaName, toppings, status });
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ error: 'Failed to create order' });
//     }
// });


// Order pizza
app.post('/api/orders', async (req, res) => {
    console.log('Received order:', req.body); // Log the request body
    const { email, pizzaName, toppings } = req.body;

    // Validate the request body
    if (!email || !pizzaName || !toppings) {
        return res.status(400).json({ error: 'Email, pizza name, and toppings are required' });
    }

    const status = 'queued'; // Default status

    try {
        // Find customer by email
        const [customerResult] = await connection.promise().query(
            'SELECT id FROM customers WHERE email = ?',
            [email]
        );
        const customerId = customerResult[0]?.id;

        // Find pizza by name
        const [pizzaResult] = await connection.promise().query(
            'SELECT id FROM pizzas WHERE name = ?',
            [pizzaName]
        );
        const pizzaId = pizzaResult[0]?.id;

        // Check if customer and pizza exist
        if (!customerId || !pizzaId) {
            return res.status(400).json({ error: 'Invalid email or pizza name' });
        }

        // Join toppings array into a string
        const toppingsString = Array.isArray(toppings) ? toppings.join(', ') : toppings;

        // Insert order into the database
        const [result] = await connection.promise().query(
            'INSERT INTO orders (email, pizza_name, toppings, status, customer_id, pizza_id) VALUES (?, ?, ?, ?, ?, ?)',
            [email, pizzaName, toppingsString, status, customerId, pizzaId]
        );

        // Send back the created order
        res.status(201).json({ id: result.insertId, email, pizzaName, toppings: toppingsString, status });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});










// Route to get all orders with relevant details in super chef page
app.get('/api/orders', async (req, res) => {
    try {
        const [result] = await connection.promise().query(`
            SELECT 
                o.id AS order_id,
                o.pizza_name,
                o.toppings,
                c.phobia,
                o.status,
                c.first_name AS fname,
                c.last_name AS lname,
                c.phone_number 
            FROM orders o
            JOIN customers c ON o.customer_id = c.id
        `);

        // Convert toppings from string to array
        const ordersWithArrayToppings = result.map(order => ({
            ...order,
            toppings: order.toppings ? order.toppings.split(',').map(topping => topping.trim()) : [] // Convert string to array
        }));

        res.json(ordersWithArrayToppings);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ error: 'Error fetching orders' });
    }
});











// Route to get all orders with relevant details in delivery page
app.get('/api/deliveries', async (req, res) => {
    try {
        const [result] = await connection.promise().query(`
            SELECT 
                o.id AS order_id,
                p.name AS pizza_name,
                p.price,
                c.country,
                c.subcity,
                c.kebele,
                c.first_name AS fname,
                c.last_name AS lname,
                c.phone_number,
                o.status
            FROM orders o
            JOIN customers c ON o.customer_id = c.id
            JOIN pizzas p ON o.pizza_id = p.id  -- Assuming pizza_id exists in orders
        `);
        
        res.json(result);
    } catch (err) {
        console.error('Error fetching deliveries:', err);
        res.status(500).json({ error: 'Error fetching deliveries' });
    }
});














// Route to update order status of pizza
app.put('/api/orders/:orderId/status', async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body; // Get the new status from the request body

    try {
        if (!status || !orderId) {
            return res.status(400).json({ error: 'Missing status or order ID' });
        }

        await connection.promise().query(`
            UPDATE orders
            SET status = ?
            WHERE id = ?
        `, [status, orderId]);

        res.status(200).json({ message: 'Order status updated successfully' });
    } catch (err) {
        console.error('Error updating order status:', err);
        res.status(500).json({ error: 'Error updating order status' });
    }
});








// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from the Authorization header
    console.log('Authorization Header:', req.headers['authorization']);
    
    if (!token) {
        console.log('No token provided');
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) {
            console.log('Token verification error:', err);
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Set user in request
        console.log('Authenticated user:', req.user);
        next(); // Proceed to the next middleware or route handler
    });
};









// Route to get a user's order history
app.get('/api/orderhistory', authenticateToken, async (req, res) => {
    const userId = req.user.id; // Access user ID from the token
    console.log('Fetching order history for user ID:', userId);

    try {
        const [result] = await connection.promise().query(`
            SELECT 
                p.name AS pizza_name,
                p.price,
                o.created_at AS order_date,  -- Use created_at for order date
                o.status AS order_status      -- Add the status column
            FROM orders o
            JOIN pizzas p ON o.pizza_id = p.id
            WHERE o.customer_id = ?
        `, [userId]); // Assuming you have a customer_id in orders table

        console.log('Order history fetched:', result);
        res.json(result);
    } catch (err) {
        console.error('Error fetching user order history:', err);
        res.status(500).json({ error: 'Error fetching user order history' });
    }
});







// Route to get order status counts
app.get('/api/admin/order-status-counts', async (req, res) => {
    try {
        const [result] = await connection.promise().query(`
            SELECT 
                status, 
                COUNT(*) AS count 
            FROM orders 
            GROUP BY status
        `);

        const statusCounts = {
            queued: 0,
            preparing: 0,
            on_route: 0,
            delivered: 0,
        };

        // Populate the counts based on the query result
        result.forEach(row => {
            statusCounts[row.status] = parseInt(row.count);
        });

        res.json(statusCounts);
    } catch (err) {
        console.error('Error fetching order status counts:', err);
        res.status(500).json({ error: 'Error fetching order status counts' });
    }
});






// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});