// 1. Registration Form - Username Validation:

const registrationForm = document.getElementById("registration");
const usernameForm = registrationForm.elements["username"];
const emailForm = registrationForm.elements["email"];
const passwordForm = registrationForm.elements["password"];

registrationForm.addEventListener("submit", validate);
function validate(event) {
    event.preventDefault();
    const usernameVal = validateUsername();
    console.log(usernameVal);
    if (usernameVal) {
        alert(usernameVal);
    }

    const emailVal = validateEmail();
    console.log(emailVal);
    if (emailVal) {
        alert(emailVal);
    }

    const passwordVal = validatePassword();
    console.log(passwordVal);
    if (passwordVal) {
        alert(passwordVal);
    }
}

function Countcharacter() {
    const counter = {};

    for (let i = 0; i < usernameForm.value.length; i++) {
        if (usernameForm.value[i] in counter) {
            counter[usernameForm.value[i]]++;
        } else {
            counter[usernameForm.value[i]] = 1;
        }
    }
    return counter;
}
function validateUsername() {
    const counter = Countcharacter();

    //The username cannot be blank.
    if (usernameForm.value === "") {
        // alert("username can not be blank");
        return "username can not be blank";

        //The username must be at least four characters long.
    } else if (usernameForm.value.length < 4) {
        // alert("username should be more than 4 characters");
        return "username should be more than 4 characters";
    }
    //The username must contain at least two unique characters.
    else if (Object.keys(counter).length === 1) {
        return "The username must contain at least two unique characters.";
    }
    //The username cannot contain any special characters or whitespace.
    else if (!usernameForm.value.match(/^[A-Za-z0-9]+$/)) {
        return "The username cannot contain special characters or whitespace.";
    } else {
        return "";
    }
}

// 2. Registration Form - Email Validation:
// The email must be a valid email address.
// The email must not be from the domain "example.com."

// function checkDomain () {
//    const splitEmail = emailForm.value.split ("@")
// }

function validateEmail() {
    const basicEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailForm.value) return "The email cannot be blank.";
    else if (!emailForm.value.match(basicEmail))
        return "The email must be a valid email address.";
    else if (emailForm.value.split("@")[1].toLowerCase() === "example.com")
        return 'The email must not be from the domain "example.com."';
}

// 3. Registration Form - Password Validation:
// Passwords must be at least 12 characters long.
// Passwords must have at least one uppercase and one lowercase letter.
// Passwords must contain at least one number.
// Passwords must contain at least one special character.
// Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
// Passwords cannot contain the username.
// Both passwords must match.

function validatePassword() {
    if (passwordForm.value.length < 12) {
        return "Passwords must be at least 12 characters long.";
    } else if (!passwordForm.value.match(/^[A-Z]+[a-z]+$/)) {
        return "Passwords must have at least one uppercase and one lowercase letter.";
    } else if (!passwordForm.value.match(/^[0-9]$/)) {
        return "Passwords must contain at least one number.";
    } else if (passwordForm.value.match(/^[A-Za-z0-9]+$/)) {
        return "Passwords must contain at least one special character.";
    }
}
