const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    burrito: { type: mongoose.Schema.Types.ObjectId, ref: 'Burrito' },
    quantity: Number
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);