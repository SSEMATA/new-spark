// Handle form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Capture user input
    const userDetails = {
        name: document.getElementById("full-name").value,
        phone: document.getElementById("phone-number").value,
        email: document.getElementById("email").value,
        location: document.getElementById("location").value,
        village: document.getElementById("village").value,
        tradingCenter: document.getElementById("trading-center").value,
        district: document.getElementById("district").value,
    };

    // Store user details in localStorage to transfer to home page
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Redirect to home page
    window.location.href = "home.html";
});