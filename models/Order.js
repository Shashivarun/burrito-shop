const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [
        {
            burrito: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Burrito',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);