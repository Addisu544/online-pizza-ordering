
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');
// const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'gg',
//     password: '1234',
//     port: 5432,
// });

// // Test the database connection
// pool.connect()
//     .then(() => {
//         console.log('Database connected successfully');
//     })
//     .catch((err) => {
//         console.error('Database connection error:', err);
//     });

// // Route to register a new customer
// app.post('/api/register', async (req, res) => {
//     const { first_name, last_name, phone_number, address, email, country, subcity, kebele, phobia, password } = req.body;
//     const role = 'customer'; // Set default role to customer

//     try {
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const result = await pool.query(
//             'INSERT INTO customers (first_name, last_name, phone_number, address, email, country, subcity, kebele, role, phobia, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
//             [first_name, last_name, phone_number, address, email, country, subcity, kebele, role, phobia, hashedPassword]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Error registering customer' });
//     }
// });













// // Route to register a new staff
// app.post('/api/register-staff', async (req, res) => {
//     const { first_name, last_name, phone, email, password, role } = req.body;

//     try {
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const result = await pool.query(
//             'INSERT INTO staffs (first_name, last_name, phone, email, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//             [first_name, last_name, phone, email, hashedPassword, role]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Error registering staff' });
//     }

// });











// // Start server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
/////////////////?????????????????????????????????????????????????????????????


// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gg',
    password: '1234',
    port: 5432,
});

// Test the database connection
pool.connect()
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// Route to register a new staff
app.post('/api/register-staff', async (req, res) => {
    const { first_name, last_name, phone, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO staffs (first_name, last_name, phone, email, password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [first_name, last_name, phone, email, hashedPassword, role]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registering staff' });
    }
});


// // Route to login2
// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // First, check the staffs table
//         let result = await pool.query('SELECT * FROM staffs WHERE email = $1', [email]);
        
//         // If no staff found, check the customers table
//         if (result.rowCount === 0) {
//             result = await pool.query('SELECT * FROM customers WHERE email = $1', [email]);
//         }

//         // If still no user found, return an error
//         if (result.rowCount === 0) {
//             return res.status(401).json({ error: 'Invalid credentials' });
//         }

//         const user = result.rows[0];
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).json({ error: 'Invalid credentials' });
//         }
//         const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'secret_key');
//         // const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key');
//         res.json({ token, role: user.role });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Error logging in' });
//     }
// });


// route to login 3 context
// Route to login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // First, check the staffs table
        let result = await pool.query('SELECT * FROM staffs WHERE email = $1', [email]);
        
        // If no staff found, check the customers table
        if (result.rowCount === 0) {
            result = await pool.query('SELECT * FROM customers WHERE email = $1', [email]);
        }

        // If still no user found, return an error
        if (result.rowCount === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = result.rows[0];
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



// Route to register a new customer
app.post('/api/register', async (req, res) => {
    const { first_name, last_name, phone_number, address, email, country, subcity, kebele, phobia, password } = req.body;
    const role = 'customer'; // Set default role to customer

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            'INSERT INTO customers (first_name, last_name, phone_number, address, email, country, subcity, kebele, role, phobia, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [first_name, last_name, phone_number, address, email, country, subcity, kebele, role, phobia, hashedPassword]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registering customer' });
    }
});



// Route to get all staffs (excluding password)
app.get('/api/staffs', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, first_name, last_name, phone, email, role FROM staffs'); // Exclude password
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching staffs' });
    }
});

// Route to get all customers (excluding password)
app.get('/api/customers', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, first_name, last_name, phone_number, email, country, subcity, kebele FROM customers'); // Exclude password
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching customers' });
    }
});



// Route to add a new pizza
app.post('/api/pizzas', async (req, res) => {
    const { name, description, toppings, price } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO pizzas (name, description, toppings, price) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, description, toppings, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error adding pizza' });
    }
});



// Route to get all pizzas
app.get('/api/pizzas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pizzas');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching pizzas' });
    }
});





// // POST endpoint to create an order
// app.post('/api/orders', async (req, res) => {
//     const { email, pizzaName } = req.body;

//     if (!email || !pizzaName) {
//         return res.status(400).json({ error: 'Email and pizza name are required' });
//     }

//     try {
//         const result = await pool.query(
//             'INSERT INTO orders (email, pizza_name) VALUES ($1, $2) RETURNING *',
//             [email, pizzaName]
//         );
//         res.status(201).json(result.rows[0]); // Send back the created order
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ error: 'Failed to create order' });
//     }
// });






// // order two

// app.post('/api/orders', async (req, res) => {
//     const { email, pizzaName, toppings } = req.body;

//     if (!email || !pizzaName || !toppings) {
//         return res.status(400).json({ error: 'Email, pizza name, and toppings are required' });
//     }

//     try {
//         const result = await pool.query(
//             'INSERT INTO orders (email, pizza_name, toppings) VALUES ($1, $2, $3) RETURNING *',
//             [email, pizzaName, toppings]
//         );
//         res.status(201).json(result.rows[0]); // Send back the created order
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ error: 'Failed to create order' });
//     }
// });





// // order three add status 
// app.post('/api/orders', async (req, res) => {
//     const { email, pizzaName, toppings } = req.body;

//     if (!email || !pizzaName || !toppings) {
//         return res.status(400).json({ error: 'Email, pizza name, and toppings are required' });
//     }

//     // Set default status in the backend
//     const status = 'queued'; // Default status when an order is placed

//     try {
//         const result = await pool.query(
//             'INSERT INTO orders (email, pizza_name, toppings, status) VALUES ($1, $2, $3, $4) RETURNING *',
//             [email, pizzaName, toppings, status] // Pass the status as 'queued'
//         );
//         res.status(201).json(result.rows[0]); // Send back the created order
//     } catch (error) {
//         console.error('Error creating order:', error);
//         res.status(500).json({ error: 'Failed to create order' });
//     }
// });



// order fkey
app.post('/api/orders', async (req, res) => {
    console.log('Received order:', req.body); // Log the request body
    const { email, pizzaName, toppings } = req.body;

    if (!email || !pizzaName || !toppings) {
        return res.status(400).json({ error: 'Email, pizza name, and toppings are required' });
    }

    const status = 'queued'; // Default status

    try {
        const customerResult = await pool.query(
            'SELECT id FROM customers WHERE email = $1',
            [email]
        );
        const customerId = customerResult.rows[0]?.id;

        const pizzaResult = await pool.query(
            'SELECT id FROM pizzas WHERE name = $1',
            [pizzaName]
        );
        const pizzaId = pizzaResult.rows[0]?.id;

        if (!customerId || !pizzaId) {
            return res.status(400).json({ error: 'Invalid email or pizza name' });
        }

        const result = await pool.query(
            'INSERT INTO orders (email, pizza_name, toppings, status, customer_id, pizza_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [email, pizzaName, toppings, status, customerId, pizzaId]
        );

        res.status(201).json(result.rows[0]); // Send back the created order
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});





// Route to get all orders with relevant details in super chef page
app.get('/api/orders', async (req, res) => {
    try {
        const result = await pool.query(`
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
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching orders' });
    }
});










// Route to get all orders with relevant details in delivery page
app.get('/api/deliveries', async (req, res) => {
    try {
        const result = await pool.query(`
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
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching deliveries' });
    }
});






// Route to update order status
app.put('/api/orders/:orderId/status', async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body; // Get the new status from the request body

    try {
        if (!status || !orderId) {
            return res.status(400).json({ error: 'Missing status or order ID' });
        }
        await pool.query(`
            UPDATE orders
            SET status = $1
            WHERE id = $2
        `, [status, orderId]);

        res.status(200).json({ message: 'Order status updated successfully' });
    } catch (err) {
        console.error(err);
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

// // Route to get a user's order history
// app.get('/api/orderhistory', authenticateToken, async (req, res) => {
//     const userId = req.user.id; // Access user ID from the token
//     console.log('Fetching order history for user ID:', userId);

//     try {
//         const result = await pool.query(`
//             SELECT 
               
//                 p.name AS pizza_name,
//                 p.price,
//                 o.created_at AS order_date -- Change this line to use created_at
//             FROM orders o
//             JOIN pizzas p ON o.pizza_id = p.id
//             WHERE o.customer_id = $1
//         `, [userId]); // Assuming you have a customer_id in orders table

//         console.log('Order history fetched:', result.rows);
//         res.json(result.rows);
//     } catch (err) {
//         console.error('Error fetching user order history:', err);
//         res.status(500).json({ error: 'Error fetching user order history' });
//     }
// });


// add order status
// Route to get a user's order history
app.get('/api/orderhistory', authenticateToken, async (req, res) => {
    const userId = req.user.id; // Access user ID from the token
    console.log('Fetching order history for user ID:', userId);

    try {
        const result = await pool.query(`
            SELECT 
                p.name AS pizza_name,
                p.price,
                o.created_at AS order_date,  -- Use created_at for order date
                o.status AS order_status      -- Add the status column
            FROM orders o
            JOIN pizzas p ON o.pizza_id = p.id
            WHERE o.customer_id = $1
        `, [userId]); // Assuming you have a customer_id in orders table

        console.log('Order history fetched:', result.rows);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching user order history:', err);
        res.status(500).json({ error: 'Error fetching user order history' });
    }
});










// Route to get order status counts
app.get('/api/admin/order-status-counts', async (req, res) => {
    try {
        const result = await pool.query(`
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
        result.rows.forEach(row => {
            statusCounts[row.status] = parseInt(row.count);
        });

        res.json(statusCounts);
    } catch (err) {
        console.error('Error fetching order status counts:', err);
        res.status(500).json({ error: 'Error fetching order status counts' });
    }
});










// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});