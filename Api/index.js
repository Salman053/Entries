import express from 'express';

import mongoose from 'mongoose';

import cors from 'cors';
import adminAuth from './routes/AdminAuth.js'; // Add the .js extension
import UserDataAuth from './routes/UserDataAuth.js';
const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://Salman:admin@cluster0.jshy5un.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))


app.use('/api/user',adminAuth);
app.use('/api/userData',UserDataAuth)
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})