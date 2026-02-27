// patient-form-validation.js

// Validate name
function validateName(name) {
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(name);
}

// Validate email
function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
}

// Validate phone number
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

// Validate form
function validateForm(form) {
    const nameValid = validateName(form.name);
    const emailValid = validateEmail(form.email);
    const phoneValid = validatePhoneNumber(form.phone);

    if (!nameValid) {
        return 'Invalid name';
    }
    if (!emailValid) {
        return 'Invalid email';
    }
    if (!phoneValid) {
        return 'Invalid phone number';
    }
    return 'Form is valid';
}

// Export validation functions
module.exports = {
    validateName,
    validateEmail,
    validatePhoneNumber,
    validateForm
};