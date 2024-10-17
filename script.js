// White Paper Modal
const whitePaperModal = document.getElementById('whitePaperModal');
const whitePaperLink = document.getElementById('whitepaper');
const whitePaperCloseBtn = document.querySelector('#whitePaperModal .close'); // Specific close button

// Show modal when clicking the White Paper link
whitePaperLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    whitePaperModal.style.display = 'flex'; // Show the modal with flex display
});

// Close White Paper modal when clicking the 'X' (close button)
whitePaperCloseBtn.addEventListener('click', () => {
    whitePaperModal.style.display = 'none'; // Hide the modal
});

// Close White Paper modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === whitePaperModal) {
        whitePaperModal.style.display = 'none'; // Hide modal if clicking outside
    }
});


// Email Modal
const emailModal = document.getElementById('emailModal');
const emailLink = document.getElementById('email-us');
const emailCloseBtn = document.querySelector('#emailModal .close'); // Specific close button

// Show Email modal when clicking the 'Email Us' link
emailLink.addEventListener('click', function(event) {
    event.preventDefault();
    emailModal.style.display = 'flex'; // Show the email modal
});

// Close Email modal when clicking the 'X' (close button)
emailCloseBtn.addEventListener('click', function() {
    emailModal.style.display = 'none'; // Hide the email modal
});

// Close Email modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === emailModal) {
        emailModal.style.display = 'none'; // Hide the email modal if clicking outside
    }
});
