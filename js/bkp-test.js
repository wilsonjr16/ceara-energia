<script>
  // Attach an event handler to the form submit event
  $('#myForm').on('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form data
    var formData = $(this).serialize();

    // Make an AJAX request to send form data to the server for email processing
    $.ajax({
      url: '/send-email', // Update with your server-side endpoint for email processing
      type: 'POST', // Use POST or GET depending on your server-side implementation
      data: formData,
      success: function(response) {
        // Handle success response from the server
        console.log(response);
        alert('Email sent successfully!');
      },
      error: function(error) {
        // Handle error response from the server
        console.log(error);
        alert('Failed to send email. Please try again later.');
      }
    });
  });
</script>