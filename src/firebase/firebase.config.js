// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.React_app_apiKey,
    authDomain: process.env.React_app_authDomain,
    projectId: process.env.React_app_projectId,
    storageBucket: process.env.React_app_storageBucket,
    messagingSenderId: process.env.React_app_messagingSenderId,
    appId: process.env.React_app_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
