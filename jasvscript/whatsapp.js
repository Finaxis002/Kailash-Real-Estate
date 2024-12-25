// JavaScript for WhatsApp Button (Optional: Can add dynamic functionality)
document.addEventListener('DOMContentLoaded', function () {
    const whatsappLink = document.getElementById('whatsapp-link');
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    whatsappLink.href = `https://wa.me/${phoneNumber}`;
});
