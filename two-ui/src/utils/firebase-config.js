import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4qVP8vCpiour7DrVXKRjITvEOAD5QY7I",
  authDomain: "two-app-netflix-clone.firebaseapp.com",
  projectId: "two-app-netflix-clone",
  storageBucket: "two-app-netflix-clone.appspot.com",
  messagingSenderId: "556365480003",
  appId: "1:556365480003:web:d37cba94432d799dfd94f6",
  measurementId: "G-SVCX3FTYRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);