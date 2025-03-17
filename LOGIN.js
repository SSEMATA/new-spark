// Handling the form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the data to a server, but for now, we can just log it.
    console.log(`User Name: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    // For now, just show a message and clear the form
    alert('You have successfully signed up!');

    // Reset the form
    document.getElementById('signup-form').reset();
}