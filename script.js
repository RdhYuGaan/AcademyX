// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDVye-5N7uJuE-rVJxZgiO38x3nwAbPts8",
  authDomain: "educational-institute-764e4.firebaseapp.com",
  projectId: "educational-institute-764e4",
  storageBucket: "educational-institute-764e4.appspot.com",
  messagingSenderId: "237874859946",
  appId: "1:237874859946:web:7f64009afad2717fc1a5d3",
  measurementId: "G-27787N6R43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register function
function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert('User registered: ' + user.email);
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            alert('User logged in: ' + user.email);
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

const firebaseConfig = {
  apiKey: "AIzaSyDVye-5N7uJuE-rVJxZgiO38x3nwAbPts8",
  authDomain: "educational-institute-764e4.firebaseapp.com",
  projectId: "educational-institute-764e4",
  storageBucket: "educational-institute-764e4.appspot.com",
  messagingSenderId: "237874859946",
  appId: "1:237874859946:web:7f64009afad2717fc1a5d3",
  measurementId: "G-27787N6R43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);