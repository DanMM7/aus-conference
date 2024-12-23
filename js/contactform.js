  // Contact page script
  $(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();  // Prevent the default form submission

        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        // Create the request payload
        const payload = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Send POST request to FastAPI endpoint
        $.ajax({
            url: 'http://127.0.0.1:8000/contact/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(payload),
            success: function(response) {
                alert(response.message);  // Show success message
            },
            error: function(xhr, status, error) {
                const errorMessage = xhr.status + ': ' + xhr.statusText;
                alert('Error - ' + errorMessage);  // Show error message
            }
        });
    });
  });