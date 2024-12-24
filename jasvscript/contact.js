document.getElementById("contactForm").addEventListener("submit", function (e) {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;

    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});