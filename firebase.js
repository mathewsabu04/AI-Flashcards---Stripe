import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT5AOrFYt7W48olWoAQQkTkWF9YqwZX6Y",
  authDomain: "flashcardsa-3d7f4.firebaseapp.com",
  projectId: "flashcardsa-3d7f4",
  storageBucket: "flashcardsa-3d7f4.appspot.com",
  messagingSenderId: "339544054250",
  appId: "1:339544054250:web:a731c34520311d6c82ba93",
  measurementId: "G-7HZVT3V3XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);