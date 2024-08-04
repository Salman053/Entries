import express from 'express';
import UserData from '../model/UserData.js';

const router = express.Router();

// Create a new user
router.post('/create', async (req, res) => {
    const { name, CNIC, fathername, work, phone, zilla, sanf } = req.body;

    try {
        const newUser = new UserData({
            name,
            CNIC,
            fathername,
            work,
            phone,
            zilla,
            sanf
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Read a single user by CNIC
router.get('/:CNIC', async (req, res) => {
    const { CNIC } = req.params;

    try {
        const user = await UserData.findOne({ CNIC });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ data: user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Update a user by CNIC
router.put('/update/:CNIC', async (req, res) => {
    const { CNIC } = req.params;
    const { name, fathername, work, phone, zilla, sanf } = req.body;

    try {
        const user = await UserData.findOneAndUpdate({ CNIC }, {
            name,
            fathername,
            work,
            phone,
            zilla,
            sanf
        }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', data: user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Delete a user by CNIC
router.delete('/delete/:CNIC', async (req, res) => {
    const { CNIC } = req.params;

    try {
        const user = await UserData.findOneAndDelete({ CNIC });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Delete multiple users by CNICs
router.delete('/delete-many', async (req, res) => {
    const { CNICs } = req.body; // CNICs should be an array of CNIC strings

    try {
        const result = await UserData.deleteMany({ CNIC: { $in: CNICs } });
        res.status(200).json({ message: 'Users deleted successfully', data: result });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Paginated list of users
router.get('/list', async (req, res) => {
    const { page = 1, limit = 12 } = req.query; // Default to page 1 and limit 10

    try {
        const users = await UserData.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await UserData.countDocuments();

        res.status(200).json({
            data: users,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / limit)
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default router;
