// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs8HN5sCwxTO6boyMpSHp0erIm8fM2UXs",
  authDomain: "jui-project-920e8.firebaseapp.com",
  projectId: "jui-project-920e8",
  storageBucket: "jui-project-920e8.appspot.com",
  messagingSenderId: "424701513088",
  appId: "1:424701513088:web:a5d1869277debbdda18565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc };




// // Function to create or update a document
// const createOrUpdateDocument = async (collectionName, docId, data) => {
//     try {
//         // Create a reference to the document
//         const docRef = doc(db, collectionName, docId);
        
//         // Set the document with the provided data
//         await setDoc(docRef, data);
//         console.log('Document created/updated successfully');
//         console.log(`Document Path: ${docRef.path}`);
//         console.log('Data:', data);
//         console.log('Document created/updated successfully');
//     } catch (error) {
//         console.error('Error creating/updating document:', error);
//     }
// };


// // Create a user document with user ID as the document ID
// createOrUpdateDocument('users', 'user123', {
//     email: 'user@example.com',
//     name: 'John Doe',
//     age: 30
// });




// // Function to retrieve a document
// const getDocument = async (collectionName, docId) => {
//     try {
//         // Create a reference to the document
//         const docRef = doc(db, collectionName, docId);
        
//         // Get the document snapshot
//         const docSnap = await getDoc(docRef);
        
//         if (docSnap.exists()) {
//             console.log('Document data:', docSnap.data());
//         } else {
//             console.log('No such document!');
//         }
//     } catch (error) {
//         console.error('Error retrieving document:', error);
//     }
// };

// // Retrieve the user document with user ID as the document ID
// getDocument('users', 'user123');
// console.log(getDocument('users', 'user123'));


// // Example usage
// const example = async () => {
//     await createOrUpdateDocument('users', 'user123', {
//         email: 'user@example.com',
//         name: 'John Doe',
//         age: 30
//     });
    
//     await getDocument('users', 'user123');
// };

// example();