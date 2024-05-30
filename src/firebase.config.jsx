import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signOut, signInWithRedirect } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHU1pQnl-m0gWS899BXQtqZ4fLu0iS7Do",
  authDomain: "patblogpost.firebaseapp.com",
  projectId: "patblogpost",
  storageBucket: "patblogpost.appspot.com",
  messagingSenderId: "504613469264",
  appId: "1:504613469264:web:f9bce2a4144f807cc2a555"
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

const LogOut = () => {
  return signOut(auth);
};

const handleLogin = () => {
  signInWithRedirect(auth, provider);
};

export { db, auth, storage, provider, LogOut, handleLogin };
