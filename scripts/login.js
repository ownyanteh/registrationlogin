// select form by id
const loginForm = document.querySelector('#login-form');


// handle form submit event
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // collect form data
    const formData = new FormData(loginForm);
    console.log(
        formData.get('username'),
        formData.get('password')
    );
    // save user information
    // display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'You have loggedin successfully';
});







