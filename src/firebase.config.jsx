import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signOut, signInWithRedirect } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0n46NlSKsUI_l-CzUZAKd5A29caSOtrA",
  authDomain: "patblog-75fe0.firebaseapp.com",
  projectId: "patblog-75fe0",
  storageBucket: "patblog-75fe0.appspot.com",
  messagingSenderId: "650968857205",
  appId: "1:650968857205:web:ada7a8695d23c575ca963c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

const LogOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

const handleLogin = async () => {
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error during login: ", error);
  }
};

export { db, auth, storage, provider, LogOut, handleLogin };
