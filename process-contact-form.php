<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate and sanitize inputs (you may want to add more validation)
    $name = htmlspecialchars(trim($name));
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($message));

    // Send email (you may need to configure your mail server for this)
    $to = "newsletter@eatwithloor.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    // Send email
    mail($to, $subject, $email_message, $headers);

    // Redirect to a thank you page or display a thank you message
    header("Location: index.html");
    exit;
}
?>
