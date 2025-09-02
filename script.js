// Function to display the login form based on the view selected
function showLoginForm(view) {
    const loginForm = document.getElementById('login-form');
    const loginTitle = document.getElementById('login-title');

    // Show the login form
    loginForm.classList.remove('hidden');

    // Change the title and placeholder texts based on the view
    if (view === 'admin') {
        loginTitle.textContent = "Admin Login";
    } else if (view === 'franchise') {
        loginTitle.textContent = "Franchise Login";
    } else if (view === 'player') {
        loginTitle.textContent = "Player Login";
    }
}

// Function to handle login (you can add actual login functionality later)
function login() {
    alert("Sign In button clicked! (Implement your logic here)");
}

// Function to handle logout
function logout() {
    alert("Logged out successfully!");

    // Hide the login form again
    const loginForm = document.getElementById('login-form');
    loginForm.classList.add('hidden');
}
window.addEventListener('scroll', () => {
    const loginOptions = document.querySelector('.login-options');
    const scrollY = window.scrollY;
    const threshold = 200; // Adjust the threshold as needed

    if (scrollY > threshold) {
        loginOptions.classList.add('visible');
    } else {
        loginOptions.classList.remove('visible');
    }
});