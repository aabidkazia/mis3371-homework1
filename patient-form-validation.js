// patient-form-validation.js

// Function to validate the name field
function validateName(name) {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    return nameRegex.test(name);
}

// Function to validate the email field
function validateEmail(email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

// Function to validate the phone number field
function validatePhone(phone) {
    // Assuming US phone number format
    const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\(?\d{3}?\)?\-?\s?\d{3}\-?\s?\d{4}$/;
    return phoneRegex.test(phone);
}

// Function to validate required fields
function validateRequiredFields(fields) {
    return fields.every(field => field.trim() !== '');
}

// Export functions for use in other files
module.exports = {
    validateName,
    validateEmail,
    validatePhone,
    validateRequiredFields
};