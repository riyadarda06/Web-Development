// Smooth scroll to Menu section
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Handle Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-response").innerText = "Thank you for reaching out! We'll get back to you soon.";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-response").innerText = "Please fill out all fields.";
    }
});