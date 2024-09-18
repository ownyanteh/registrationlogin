// select form by id
// const registerForm = document.querySelector('#register-form');
const registerForm = document.querySelector('#register-form');


// handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(registerForm);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // save user information
    // send confirmation email
    // display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account registered successfully';
});
// registerForm.onsubmit = function () {
// // collect username
// // collect email
// // collect password
// // save user information
// // send confirmation email
// }

// Age Variable
const age = 44;

// // Square of Age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}



const squaredAge = squareAge(45)


// function to get full name
function fullName(firstname, lastname) {
    // return firstname + lastname;
    return `${firstname} ${lastname}`;
}

const myFullName = fullName('William', 'Nyanteh');
