import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC04BACtNZKUYS9UEXFwbBF21U83JAkUjQ",
  authDomain: "gamecorner-dc6a0.firebaseapp.com",
  projectId: "gamecorner-dc6a0",
  storageBucket: "gamecorner-dc6a0.firebasestorage.app",
  messagingSenderId: "335577997036",
  appId: "1:335577997036:web:2dc7cd53e0dbb87411cfc9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };