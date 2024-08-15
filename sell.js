const registerForm = document.getElementById('register-form');
const listingSection = document.getElementById('add-listing-section');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Simulate registration logic (replace with actual API call)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`); // Replace with actual registration functionality
  alert('Registration Successful! Please Login.');
  // Show listing section after successful registration (replace with actual login logic)
  listingSection.style.display = 'block';
});

// Implement logic for listing submission (including image and video upload)
const listingForm = document.getElementById('listing-form');

listingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get form data
  const location = document.getElementById('location').value;
  const type = document.getElementById('type').value;
  const area = document.getElementById('area').value;
  const price = document.getElementById('price').value;
  const images = document.getElementById('images').files;
  const video = document.getElementById('video').files[0]; // Assuming only one video
  console.log(location + "Locationiiiiioiu");
  console.log(type + "Locationiiiiioiu");
  console.log(area + "Locationiiiiioiu");
  console.log(price + "Locationiiiiioiu");

  // Token which we get after logging in.
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZW51b…Y4NH0.icK58wY3E9GF8OS4Wg9qnIE93u20xXO_78J1xPxyBvs';

  // Simulate data submission (replace with actual API calls)
  const formData = new FormData();
  formData.append('location', location);
  formData.append('type', type);
  formData.append('area', area);
  formData.append('price', price);

  // Handle image uploads (replace with actual image upload logic)
  for (let i = 0; i < images.length; i++) {
    formData.append('images[]', images[i]);
  }

  // Handle video upload (replace with actual video upload logic)
  if (video) {
    formData.append('video', video);
  }

  // Send data to server using

  // "
  // /update/property"
  // /remove/property
  // /myproperty

  console.log("Locationiiiiioiu");

  axios.post('http://localhost:8000/api/auth/user/register/new/property', formData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => {
    const data = response.data;
    console.log(data + ":::This is data.");

    if (data.success) {
      alert('Listing submitted successfully!');
    } else {
      alert('Error submitting listing: ' + data.message);
    }
  }).catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });

});

// fetch('/api/auth/user/register/new/property', {
//   method: 'POST',
//   body: formData
// })
// .then(response => response.json())
// .then(data => {
//   if (data.success) {
//     alert('Listing submitted successfully!');
//     // Clear form after successful submission
//     listingForm.reset();
//   } else {
//     alert('Error submitting listing: ' + data.message);
//   }
// })
// .catch(error => {
//   console.error('Error:', error);
//   alert('An error occurred. Please try again later.');
// });
// });
