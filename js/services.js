
   // Initialize EmailJS with your user ID
   (function() {
    emailjs.init("AcSk6RGpRcby_yE-j"); // Replace with your user ID
})();

document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    // Use EmailJS to send the email
    emailjs.send("service_q1h60jc", "template_a5gmd0f", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        // Close the modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('chatModal'));
        modal.hide();
        // Reset the form
        document.getElementById('chatForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
    });
});



function toggleReviewBox() {
    const reviewBox = document.getElementById('review-input-box');
    if (reviewBox.style.display === 'none') {
        reviewBox.style.display = 'block';
    } else {
        reviewBox.style.display = 'none';
    }
}

function submitReview() {
    const reviewText = document.getElementById('new-review').value;
    if (reviewText) {
        // Create a new paragraph element to display the review
        const reviewElement = document.createElement('p');
        reviewElement.className = 'review';
        reviewElement.textContent = `"${reviewText}" - New Client`;

        // Add the new review to the top of the review list
        const reviewList = document.getElementById('review-list');
        reviewList.insertBefore(reviewElement, reviewList.firstChild);

        // Clear the text area and hide the input box
        document.getElementById('new-review').value = '';
        toggleReviewBox();
    } else {
        alert("Please write a review before submitting.");
    }
}


document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the form data
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
  
    // Construct the mailto link
    const mailtoLink = `mailto:jmnavia470@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  
    // Open the user's email client
    window.location.href = mailtoLink;
  
    // Close the modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('chatModal'));
    modal.hide();
  
    // Reset the form
    this.reset();
  });
  
