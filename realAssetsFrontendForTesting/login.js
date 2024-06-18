document.addEventListener("DOMContentLoaded", function() {
    const signUpLink = document.querySelector("#signup-link");
    const loginLink = document.querySelector("#login-link");
    const signUpContainer = document.querySelector("#signup-container");
    const loginContainer = document.querySelector("#login-container");

    // Function to show the sign-up form
    function showSignUpForm() {
        signUpContainer.style.display = "block";
        loginContainer.style.display = "none";
    }

    // Function to show the login form
    function showLoginForm() {
        signUpContainer.style.display = "none";
        loginContainer.style.display = "block";
    }

    // Event listener for sign-up link
    signUpLink.addEventListener("click", function(event) {
        event.preventDefault();
        showSignUpForm();
    });

    // Event listener for login link
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        showLoginForm();
    });
});
