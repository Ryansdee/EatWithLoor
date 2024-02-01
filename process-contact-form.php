<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ryan.deschuyteneer@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Vous pouvez rediriger l'utilisateur vers une page de confirmation
    header("Location: thank-you.html");
    exit();
}
?>
