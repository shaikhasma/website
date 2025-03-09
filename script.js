// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserLocalPersistence, onAuthStateChanged } 
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

    // 🔥 Firebase Configuration (Replace with your Firebase credentials)
    const firebaseConfig = {
        apiKey: "AIzaSyBK8LPYAnaBhX9NERIwj022AOHk_Curb6A",
        authDomain: "code-with-asma.firebaseapp.com",
        projectId: "code-with-asma",
        storageBucket: "code-with-asma.firebasestorage.app",
        messagingSenderId: "1080221326319",
        appId: "1:1080221326319:web:12a65cd6a282f21220f41a",
        measurementId: "G-7TL9KQ8VND"
    };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Ensure session persistence
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        console.log("Session persistence enabled.");
    })
    .catch((error) => {
        console.error("Session persistence error:", error);
    });

// Login Function
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login-btn").addEventListener("click", () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("User signed in:", result.user);
                updateUI(result.user);
            })
            .catch((error) => {
                console.error("Login failed:", error);
            });
    });

    document.getElementById("logout-btn").addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                updateUI(null);
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    });

    // Check if user is already logged in
    onAuthStateChanged(auth, (user) => {
        updateUI(user);
    });
});

function updateUI(user) {
    if (user) {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "block";
    } else {
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "none";
    }
}

function loadContent(page) {
    const content = document.getElementById("mainContent");
    
    if (page === "home") {
        content.innerHTML = `<h2>Home</h2><p>Welcome to our learning platform!</p>`;
    } 
    else if (page === "topics") {
        content.innerHTML = `<h2>DSA Topics</h2><p>Here are the core topics covered in DSA.</p>`;
    } 
    else if (page === "students") {
        content.innerHTML = `
            <h2>Our Students</h2>
            <div class="student-box">
                <img src="student1.jpg" alt="Student 1">
                <p>"This platform helped me crack FAANG interviews!" - John Doe</p>
            </div>
            <div class="student-box">
                <img src="student2.jpg" alt="Student 2">
                <p>"A great place to learn structured coding from scratch." - Jane Smith</p>
            </div>
        `;
    }
}

function toggleSubMenu() {
    const submenu = document.querySelector(".submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
