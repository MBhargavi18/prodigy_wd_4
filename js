// JavaScript for form validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Perform your form validation here (example)
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }

        // Optional: You can add AJAX form submission here if needed
        // Example using fetch API:
        /*
        fetch('submit_form.php', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., show success message)
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error (e.g., show error message)
        });
        */

        // For demonstration, we'll just show an alert on success
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission
    });
});
