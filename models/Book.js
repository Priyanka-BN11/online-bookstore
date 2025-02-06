const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 10 }, // Stock quantity
    image: { type: String }, // Image URL
    ratings: { type: Number, default: 0 }, // Book rating
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
