const express = require('express');
const Book = require('../models/Book.js');
const router = express.Router();

// 1. create a new book (Admin only)
router.post('/add',async(req,res) => {
    try {
        const {title, author, description, price, category, stock, image} = req.body;
        const newBook = new Book({title, author, description, price, category, stock, iamge});
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    }
    catch(error) {
        res.status(500).json({error:error.message});
    }
});

// 2. Get all books

router.get('/', async(req,res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  }  
  catch(error){
    res.status(500).json({error:error.message});
  }
});

// 3. Get a single book by ID
router.get('/:id', async(req,res)=> {
    try {
        const book= await Book.findById(req.params.id);
        if (!book) return res.status(404).json({message:'Book not found'});
        res.status(200).json(book);
    }
    catch(error) {
        res.status(500).json({error:error.message});
    }
});

// 4. Update book details (Admin only)

router.put('/:id',async(req,res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body, {new: true});
        res.status(200).json(updatedBook);
    }
    catch(error){
        res.status(500).json({error:error.message});

    }
});

// 5. Delete a book (Admin only)

router.delete('/:id',async(req,res) => {
    try{
        await Book.findByIdAndDelete(req,params.id);
        res.status(200).json({message:'Book deleted'});
    }
    catch(error){
        res.status(500).json({error:error.message});

    }
});

module.exports = router; 