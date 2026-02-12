<?php
// Prevent direct access to file/directory listing if possible (via .htaccess usually)
// This script handles contact form submissions.

// CORS Handling - Allow requests from your frontend domain
// In production, tighten this to your actual domain
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit();
}

// Retrieve JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    exit();
}

// --- SPAM PROTECTION (Honeypot) ---
// The frontend sends a hidden field '_gotcha'. If filled, it's a bot.
if (!empty($data['_gotcha'])) {
    // Silently fail or return success to fool the bot
    echo json_encode(["success" => true, "message" => "Message received."]);
    exit();
}

// --- VALIDATION ---
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING);
$interest = filter_var($data['interest'] ?? '', FILTER_SANITIZE_STRING);
$message = htmlspecialchars($data['message'] ?? '');

$errors = [];
if (empty($name)) $errors[] = "Name is required.";
if (!$email) $errors[] = "Valid email is required.";
if (empty($phone)) $errors[] = "Phone number is required.";

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(["success" => false, "errors" => $errors]);
    exit();
}

// --- EMAIL CONFIGURATION ---
// REPLACE WITH YOUR ACTUAL EMAIL ADDRESS
$to = "admin@universecoworks.com"; 
$subject = "New Inquiry from Universe Coworks: $name";

// Email Body
$email_content = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-top: 5px solid #00a896; }
        h2 { color: #00a896; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
        .val { background: #f9f9f9; padding: 5px 10px; border-radius: 4px; display: inline-block; }
        .message-box { background: #f4f4f4; padding: 15px; border-radius: 5px; border-left: 4px solid #ddd; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>New Contact Inquiry</h2>
        <div class='field'><span class='label'>Name:</span> <span class='val'>$name</span></div>
        <div class='field'><span class='label'>Email:</span> <a href='mailto:$email'>$email</a></div>
        <div class='field'><span class='label'>Phone:</span> <span class='val'>$phone</span></div>
        <div class='field'><span class='label'>Interest:</span> <span class='val'>$interest</span></div>
        
        <br>
        <div class='field'>
            <span class='label'>Message:</span>
            <div class='message-box'>$message</div>
        </div>
        
        <p style='font-size: 12px; color: #999; margin-top: 30px;'>Sent from universecoworks.com website form.</p>
    </div>
</body>
</html>
";

// Email Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// Ensure the 'From' domain matches your hosting domain to avoid spam filters
$headers .= "From: Universe Coworks Website <no-reply@universecoworks.com>" . "\r\n"; 
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// --- SEND EMAIL ---
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Sorry, something went wrong. Please try again later."]);
}
?>
