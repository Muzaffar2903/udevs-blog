import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCMNaps9BXjpd8XtCp7qJNxWM2gdZw-6tY",
  authDomain: "udevs-blog-86150.firebaseapp.com",
  projectId: "udevs-blog-86150",
  storageBucket: "udevs-blog-86150.appspot.com",
  messagingSenderId: "107170165465",
  appId: "1:107170165465:web:477463cbd138bad13684c8",
  measurementId: "G-PKWQCZWZH0",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function logOut() {
  return signOut(auth);
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
