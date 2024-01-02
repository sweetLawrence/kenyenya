import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfb1v56jhxtaJWzPnl80AjK_4qtGKXnxM",
  authDomain: "admission-system-16bd6.firebaseapp.com",
  projectId: "admission-system-16bd6",
  storageBucket: "admission-system-16bd6.appspot.com",
  messagingSenderId: "374880017768",
  appId: "1:374880017768:web:b41c5ce76ae302c4a24add",
  measurementId: "G-9N1DFDV55G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);