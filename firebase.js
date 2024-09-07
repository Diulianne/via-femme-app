import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyAoSV5vfGtabOj9lMMJDwDQHFv1K-fTMeA",
        authDomain: "via-femme-app.firebaseapp.com",
        projectId: "via-femme-app",
        storageBucket: "via-femme-app.appspot.com",
        messagingSenderId: "145696557495",
        appId: "1:145696557495:web:2314c406d1fe6df1e9c032"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };