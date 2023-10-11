// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEY,
  authDomain: "my-expense-tracker-57fe2.firebaseapp.com",
  projectId: "my-expense-tracker-57fe2",
  storageBucket: "my-expense-tracker-57fe2.appspot.com",
  messagingSenderId: "345952637303",
  appId: "1:345952637303:web:34121cf4fb3af5e3ea9172",
  measurementId: "G-P5N1R0BQ78",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
