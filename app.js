const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/burrito-shop', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/burrito', require('./routes/burrito'));
app.use('/api/orders', require('./routes/order'));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Burrito Shop API');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});