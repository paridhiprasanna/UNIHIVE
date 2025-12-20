import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPSAu_PVF39qu0m5SUO7_Jp9c7gAu5_K0",
  authDomain: "login-5fddb.firebaseapp.com",
  projectId: "login-5fddb",
  storageBucket: "login-5fddb.appspot.com", // fixed typo in bucket domain
  messagingSenderId: "4063991478",
  appId: "1:4063991478:web:f6f0ac46cb389196a4f817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Input
const login = document.getElementById('login');
login.addEventListener("click", function (event) {
  event.preventDefault();
  const StudentID = document.getElementById('StudentID').value;
  const password = document.getElementById('password').value;

  // Firebase expects an email, so make sure StudentID is in email format or modify accordingly
  createUserWithEmailAndPassword(auth, StudentID, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href ="elibrary.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});