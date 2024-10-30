<?php
// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data and sanitize it
    $name = htmlspecialchars(trim($_POST['name']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Simple validation
    if (!empty($name) && !empty($message)) {
        // File to store messages
        $file = 'messages.txt';

        // Format the data for storage
        $formattedMessage = "Name: $name\nMessage: $message\n\n";

        // Write the message to the file
        if (file_put_contents($file, $formattedMessage, FILE_APPEND)) {
            echo "Thank you for your message!";
        } else {
            echo "Sorry, there was an error saving your message. Please try again.";
        }
    } else {
        echo "Please fill out both fields.";
    }
} else {
    echo "Invalid request method.";
}
?>
