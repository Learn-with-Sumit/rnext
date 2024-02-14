// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

// Your web app's Firebase configuration
// Create a .env file to keep your app configurations
// Find an .env.examples file for reference under the project folder.
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_MESSAGING_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (err) {
        throw error;
    }
};

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response;
    } catch (err) {
        throw error;
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw(error);
    }
}

const signInWithGoogle = async () => {
    try{
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        return user;
    } catch(error) {
        throw (error)
    }
}

export { loginWithEmailAndPassword, registerWithEmailAndPassword, auth, sendPasswordReset, signInWithGoogle};
