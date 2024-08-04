import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import adminAuth from '../routes/AdminAuth.js';
import UserDataAuth from '../routes/UserDataAuth.js';
import { config } from 'dotenv';  // Correctly import `config` from `dotenv`
import serverless from 'serverless-http';

const app = express();

// Load environment variables from .env file
config();  

app.use(cors());
app.use(express.json());

// Connect to MongoDB using URI from environment variables
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://Salman:admin@cluster0.jshy5un.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Set up routes
app.use('/api/user', adminAuth);
app.use('/api/userData', UserDataAuth);

// Export the serverless function
export const handler = serverless(app);
