// document.addEventListener('DOMContentLoaded', function() {
//     const profileLink = document.getElementById('profile-link');
//     const loginLink = document.getElementById('login-link');
//     const signupLink = document.getElementById('signup-link');

//     // Placeholder logic to check if the user is logged in
//     const isLoggedIn = false; // Replace this with actual authentication check

//     if (isLoggedIn) {
//         loginLink.style.display = 'none';
//         signupLink.style.display = 'none';
//         profileLink.href = 'profile.html';
//     } else {
//         profileLink.href = 'login.html';
//     }
// });

// function searchProperties() {
//     const type = document.getElementById('type').value;
//     const location = document.getElementById('location').value;
//     const area = document.getElementById('area').value;
//     const price = document.getElementById('price').value;

//     if (!location) {
//         alert('Please enter a location.');
//         return;
//     }


//     // For demonstration purposes, we'll create a mock list of properties.
//     const properties = [
//         {type: 'plots', location: 'New York', area: 500, price: 300000},
//         {type: 'lands', location: 'Los Angeles', area: 1500, price: 900000},
//         {type: 'plots', location: 'Chicago', area: 800, price: 600000},
//         {type: 'lands', location: 'Houston', area: 2000, price: 1200000},
//         {type: 'plots', location: 'Phoenix', area: 700, price: 400000},
//         {type: 'lands', location: 'New York', area: 1200, price: 800000},
//     ];

//     const filteredProperties = properties.filter(property => {
//         return (type === 'both' || property.type === type) &&
//                property.location.toLowerCase().includes(location.toLowerCase()) &&
//                (!area || property.area <= area) &&
//                (!price || property.price <= price);
//     });

//     displayResults(filteredProperties);
// }

// function displayResults(results) {
//     const resultsContainer = document.getElementById('results');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     if (results.length === 0) {
//         resultsContainer.innerHTML = '<p>No properties found matching your criteria.</p>';
//         return;
//     }

//     results.forEach(property => {
//         const propertyElement = document.createElement('div');
//         propertyElement.style.border = '1px solid #ccc';
//         propertyElement.style.padding = '10px';
//         propertyElement.style.margin = '10px 0';
//         propertyElement.style.borderRadius = '8px';
//         propertyElement.style.backgroundColor = '#f9f9f9';

//         propertyElement.innerHTML = `
//             <p><strong>Type:</strong> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
//             <p><strong>Location:</strong> ${property.location}</p>
//             <p><strong>Area:</strong> ${property.area} sq ft</p>
//             <p><strong>Price:</strong> $${property.price.toLocaleString()}</p>
//         `;

//         resultsContainer.appendChild(propertyElement);
//     });
// }

























// REquest to get all properties

// fetch(`http://localhost:8000/api/auth/land/all`)
//     .then(response => response.json())
//     .then(propertie => {
//         const properties = propertie.data;
//         displayResults(properties);

//     })
//     .catch(error => {
//         console.error('Error fetching properties:', error);
//         alert('There was an error fetching properties. Please try again later.');
//     });


// const { log } = require("console");

document.addEventListener('DOMContentLoaded', function () {
    const profileLink = document.getElementById('profile-link');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');

    // Placeholder logic to check if the user is logged in
    const isLoggedIn = false; // Replace this with actual authentication check

    if (isLoggedIn) {
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        profileLink.href = 'profile.html';
    } else {
        profileLink.href = 'login.html';
    }
});

function searchProperties() {
    // const type = document.getElementById('type').value;
    // const area = document.getElementById('area').value;
    // const price = document.getElementById('price').value;

    const location = document.getElementById('location').value;
    // const state = document.getElementById('location').value;
    // const city = document.getElementById('location').value;
    // const pincode = document.getElementById('location').value;

    if (!location) {
        alert('Please enter a location.');
        return;
    }
    const queryParams = new URLSearchParams({
        location: location
        // ,city: city,
        // state: state,
        // pin_code: pincode

    });

    // fetch(`http://localhost:8000/api/auth/land/all/location?${queryParams.toString()}`)
    //     .then(response => response.json())
    //     .then(propertie => {
    //         const properties = propertie.data;
    //         displayResults(properties);

    //     })
    //     .catch(error => {
    //         console.error('Error fetching properties:', error);
    //         alert('There was an error fetching properties. Please try again later.');
    //     });

    axios.get('http://localhost:8000/api/auth/land/all/location', { params: queryParams }).then(response => {
        const properties = response.data.data;
        displayResults(properties);
    }).catch(error => {
        console.error('Error fetching properties:', error);
        alert('There was an error fetching properties. Please try again later.');
    });
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No properties found matching your criteria.</p>';
        return;
    }

    results.forEach(property => {

        const propertyElement = document.createElement('div');
        propertyElement.style.border = '1px solid #ccc';
        propertyElement.style.padding = '10px';
        propertyElement.style.margin = '10px 0';
        propertyElement.style.borderRadius = '8px';
        propertyElement.style.backgroundColor = '#f9f9f9';

        // <p><strong>Type:</strong> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
        propertyElement.innerHTML = `
        <p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Area:</strong> ${property.area} sq ft</p>
        <p><strong>Price:</strong> $${property.price.toLocaleString()}</p>
        `;

        resultsContainer.appendChild(propertyElement);
    });
}
