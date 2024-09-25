// Signup form validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirmPassword-error");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    if (username === "" || /\d/.test(username)) {
        usernameError.textContent = "Please enter a valid username (letters only).";
        usernameError.classList.add('error-message'); // Apply the CSS class
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.add('error-message');
        isValid = false;
    }

    if (password === "" || password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long, contain an uppercase letter, and a number.";
        passwordError.classList.add('error-message');
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.classList.add('error-message');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.add('error-message');
        isValid = false;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Please enter your password.";
        passwordError.classList.add('error-message');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
