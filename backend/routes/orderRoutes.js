const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// **1. Place a new order**
router.post('/create', async (req, res) => {
    try {
        const { user, books, totalPrice } = req.body;
        const newOrder = new Order({ user, books, totalPrice, paymentStatus: 'Pending', orderStatus: 'Processing' });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **2. Get all orders for a user**
router.get('/user/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).populate('books.bookId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **3. Get all orders (Admin only)**
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('books.bookId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// **4. Update order status (Admin only)**
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
