import { auth, createUserWithEmailAndPassword } from './firebase';
import { auth, signInWithEmailAndPassword } from './firebase';
import { auth, signInWithEmailAndPassword } from './firebase';

const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered:', userCredential.user);
    } catch (error) {
        console.error('Error registering user:', error.message);
    }
};


const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in user:', error.message);
    }
};


const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in user:', error.message);
    }
};
