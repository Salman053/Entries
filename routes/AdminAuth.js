import express from 'express';
import User from '../model/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { name, CNIC, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ CNIC });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            CNIC,
            password: hashedPassword
        });

        // Log after declaration
        console.log(newUser);

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { CNIC, password } = req.body;

    try {
        // Find the user by CNIC
        const user = await User.findOne({ CNIC });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Successful login, return a response
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default router;
