document.addEventListener("DOMContentLoaded", function () {
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
    signUpLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSignUpForm();
    });

    // Event listener for login link
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        showLoginForm();
    });


});


// FOR GENERAL USER
function GenerateOtp() {

    const phonenumber = document.getElementById('mobile').value;

    const queryParams = new URLSearchParams({
        phonenumber: phonenumber
    });

    axios.get('http://localhost:8000/api/auth/user/generateotp', { params: queryParams }).then(response => {
        const properties = response.data;
      
        console.log(properties);
        
    }).catch(error => {
        console.error('Error fetching properties:', error);
        alert('There was an error fetching properties. Please try again later.');
    });
}

function Login() {

    const phonenumber = document.getElementById('mobile').value;
    const otp = document.getElementById('otp').value;

    const queryParams = new URLSearchParams({
        phonenumber: phonenumber,
        otp: otp
    });

    axios.get('http://localhost:8000/api/auth/user/login', { params: queryParams }).then(response => {
        const res= response.data;
        // console.log(properties);
        console.log(res);
        // Redirect to the home screen
        // and save the response in local storage.
    }).catch(error => {
        console.error('Error fetching properties:', error);
        alert('There was an error fetching properties. Please try again later.');
    });
}






// // FOR AGENT
// function GenerateOtp() {

//     const phonenumber = document.getElementById('mobile').value;

//     const queryParams = new URLSearchParams({
//         phonenumber: phonenumber
//     });

//     axios.get('http://localhost:8000/api/auth/agent/generateotp', { params: queryParams }).then(response => {
//         const properties = response.data.data;
//         displayResults(properties);
//     }).catch(error => {
//         console.error('Error fetching properties:', error);
//         alert('There was an error fetching properties. Please try again later.');
//     });
// }

// function Login() {

//     const phonenumber = document.getElementById('mobile').value;
//     const otp = document.getElementById('otp').value;

//     const queryParams = new URLSearchParams({
//         phonenumber: phonenumber,
//         otp: otp
//     });

//     axios.get('http://localhost:8000/api/auth/agent/login', { params: queryParams }).then(response => {
//         const res= response.data;
//         // console.log(properties);
//         console.log(res);
//         // Redirect to the home screen
//         // displayResults(properties);
//     }).catch(error => {
//         console.error('Error fetching properties:', error);
//         alert('There was an error fetching properties. Please try again later.');
//     });
// }





// // FOR ADMIN
// function GenerateOtp() {

//     const phonenumber = document.getElementById('mobile').value;

//     const queryParams = new URLSearchParams({
//         phonenumber: phonenumber
//     });

//     axios.get('http://localhost:8000/api/auth/admin/generateotp', { params: queryParams }).then(response => {
//         const properties = response.data.data;
//         displayResults(properties);
//     }).catch(error => {
//         console.error('Error fetching properties:', error);
//         alert('There was an error fetching properties. Please try again later.');
//     });
// }

// function Login() {

//     const phonenumber = document.getElementById('mobile').value;
//     const otp = document.getElementById('otp').value;

//     const queryParams = new URLSearchParams({
//         phonenumber: phonenumber,
//         otp: otp
//     });

//     axios.get('http://localhost:8000/api/auth/admin/login', { params: queryParams }).then(response => {
//         const res= response.data;
//         // console.log(properties);
//         console.log(res);
//         // Redirect to the home screen
//         // displayResults(properties);
//     }).catch(error => {
//         console.error('Error fetching properties:', error);
//         alert('There was an error fetching properties. Please try again later.');
//     });
// }