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


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this); // Collect form data

    fetch('https://formspree.io/f/mldeeavz', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            document.getElementById('feedback').style.display = 'block';
            document.getElementById('feedback').innerHTML = 'Your email has been sent successfully!';
            document.getElementById('feedback').style.color = 'green';
            document.getElementById('contactForm').reset(); // Clear the form fields
        } else {
            document.getElementById('feedback').style.display = 'block';
            document.getElementById('feedback').innerHTML = 'Oops! Something went wrong.';
            document.getElementById('feedback').style.color = 'red';
        }
    }).catch(function(error) {
        document.getElementById('feedback').style.display = 'block';
        document.getElementById('feedback').innerHTML = 'Error sending email. Please check your connection.';
        document.getElementById('feedback').style.color = 'red';
    });
});
