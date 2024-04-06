// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO8XY0gEhBY9o6bei9HEQ0wu647OorQW4",
  authDomain: "schoolnews-91125.firebaseapp.com",
  projectId: "schoolnews-91125",
  storageBucket: "schoolnews-91125.appspot.com",
  messagingSenderId: "512321698921",
  appId: "1:512321698921:web:c4bd3416664d12eb1bb6f8",
  measurementId: "G-L4GV7TYE9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);