const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCodes = ['Astha']; // Array with multiple passwords
const nextPageUrl = 'main.html'; // URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();
    
    if (secretCodes.includes(userInput)) { // Check if input matches any password
        resultDiv.innerHTML = 'Baby';
        window.location.href = nextPageUrl; // Redirect to new page
    } else {
        // resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Sona';
        resultDiv.innerHTML = 'You are not the one!!!';
    }
});


