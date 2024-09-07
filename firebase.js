import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbun3YlX8avk8S6J91Zx0npVDfWjHMhrM",
    authDomain: "uber-next-clone-2da3f.firebaseapp.com",
    projectId: "uber-next-clone-2da3f",
    storageBucket: "uber-next-clone-2da3f.appspot.com",
    messagingSenderId: "327502929961",
    appId: "1:327502929961:web:fd6405a40f72bd1ca37c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };