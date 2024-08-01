const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET /api/orders - Get the list of orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('items.burrito');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/orders/:id - Get the details of an individual order
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.burrito');
        if (order == null) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/orders - Submit an order
router.post('/', async (req, res) => {
    const order = new Order({
        items: req.body.items
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;