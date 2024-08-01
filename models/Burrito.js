const mongoose = require('mongoose');

const burritoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    options: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Burrito', burritoSchema);