
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


// Route to login2
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

        const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key');
        res.json({ token, role: user.role });
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




// POST endpoint to create an order
app.post('/api/orders', async (req, res) => {
    const { email, pizzaName } = req.body;

    if (!email || !pizzaName) {
        return res.status(400).json({ error: 'Email and pizza name are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO orders (email, pizza_name) VALUES ($1, $2) RETURNING *',
            [email, pizzaName]
        );
        res.status(201).json(result.rows[0]); // Send back the created order
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});



// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});