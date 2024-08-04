import express from 'express';
import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'username',
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
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128
    }
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

const User = mongoose.model("User", UserSchema);

export default User;
