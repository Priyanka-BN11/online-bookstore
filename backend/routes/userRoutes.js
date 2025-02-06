const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

// 1. Register a new user

router.post('/register', async(req,res) => {
    try{
        const {name, email, password } = req.body;
        let user = await User.findOne({email});
        if(user) return res.status(400).json({message:'User already exists'});

        const hashedPassword = await bcrypt.hash(password,10);
        user = new User({name, email, password: hashedPassword});

        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});