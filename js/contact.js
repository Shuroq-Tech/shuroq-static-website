// Clear form function
function clearForm() {
    document.getElementById("contactForm").reset();
}

// Input validation functions
function validateNameInput(event) {
    const value = event.target.value;
    // Allow only alphabets and spaces
    event.target.value = value.replace(/[^A-Za-z\s]/g, '');
}

function validatePhoneInput(event) {
    const value = event.target.value;
    // Allow only numbers, spaces, and + symbol
    event.target.value = value.replace(/[^0-9\s+]/g, '');
}

function validateEmailInput(event) {
    const value = event.target.value;
    // Basic email validation - prevent invalid characters
    event.target.value = value.replace(/[^a-zA-Z0-9._%+-@]/g, '');
}

// Add input event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    
    if (nameInput) {
        nameInput.addEventListener('input', validateNameInput);
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('input', validatePhoneInput);
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', validateEmailInput);
    }
});

// Submit form function
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;

    // Validate form
    if (!name || !email || !phone || !subject) {
        alert('Please fill out all fields');
        return;
    }
    
    // Check if email contains @ symbol
    if (!email.includes('@')) {
        alert('Failed to submit: @ is required in email');
        return;
    }

    // Create form data object
    const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        timestamp: new Date().toISOString()
    };

    // Send to S3 endpoint
    const apiUrl = 'https://8ba8wv1vc8.execute-api.us-east-1.amazonaws.com/dev/contactus';
    
    console.log('Submitting form to:', apiUrl);
    console.log('Form data:', formData);
    
    fetch(apiUrl, {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        console.log('Response received:', response);
        // With no-cors mode, we can't read the response status or body
        // But the request was sent successfully
        alert('Message sent successfully!');
        clearForm();
    })
    .catch(error => {
        console.error('Form submission error:', error);
        alert('Failed to send message. Please try again later.');
    });
}