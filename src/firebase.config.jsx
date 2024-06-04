import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signOut, signInWithRedirect } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYzrb91znr5wEe-E8_C31NzZRALunVbp0",
  authDomain: "blog-app-d953d.firebaseapp.com",
  projectId: "blog-app-d953d",
  storageBucket: "blog-app-d953d.appspot.com",
  messagingSenderId: "931961983980",
  appId: "1:931961983980:web:8160c03b40f1126f4c26c9"
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
