import express from 'express';
import mongoose from 'mongoose';

const UserDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    CNIC: {
        type: String,
        required: true,
        minlength: 13,
        maxlength: 15,
        unique: true // Ensure CNIC is unique
    },
    fathername: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    work: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 15,
    },
    zilla: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    sanf: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    adminID:{   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  // Reference to User model to store admin's user ID
    }
}, { timestamps: true }); // Add timestamps


const UserData = mongoose.model("UserData", UserDataSchema);

export default UserData;
