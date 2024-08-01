// routes/burrito.js
const express = require('express');
const router = express.Router();
const Burrito = require('../models/Burrito');
const authenticate = require('../middleware/auth');

// GET /api/burrito - Get list of burritos
router.get('/', authenticate, async (req, res) => {
    try {
        const burritos = await Burrito.find();
        res.json(burritos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/burrito - Create a new burrito
router.post('/', authenticate, async (req, res) => {
    const burrito = new Burrito({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        options: req.body.options
    });

    try {
        const newBurrito = await burrito.save();
        res.status(201).json(newBurrito);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;