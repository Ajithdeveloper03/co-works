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
$name = strip_tags(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = strip_tags(trim($data['phone'] ?? ''));
$interest = strip_tags(trim($data['interest'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

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
$to = "info@universecoworks.com"; 
$subject = "New Inquiry from Universe Coworks Website: $name";

// Email Body
$email_content = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-top: 5px solid #00a896; border-radius: 8px; }
        .header { background: #00a896; color: white; padding: 15px; border-radius: 4px 4px 0 0; text-align: center; }
        h2 { margin: 0; color: #ffffff; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
        .label { font-weight: bold; color: #555; display: block; font-size: 12px; text-transform: uppercase; }
        .val { color: #273a96; font-size: 16px; font-weight: bold; }
        .message-box { background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #00a896; margin-top: 10px; }
        .footer { font-size: 11px; color: #999; margin-top: 30px; text-align: center; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Workspace Inquiry</h2>
        </div>
        <div class='content'>
            <div class='field'><span class='label'>Name:</span> <span class='val'>$name</span></div>
            <div class='field'><span class='label'>Email:</span> <span class='val'><a href='mailto:$email' style='color: #273a96;'>$email</a></span></div>
            <div class='field'><span class='label'>Phone:</span> <span class='val'>$phone</span></div>
            <div class='field'><span class='label'>Interest:</span> <span class='val'>$interest</span></div>
            
            <div class='field' style='border-bottom: none;'>
                <span class='label'>Requirements / Message:</span>
                <div class='message-box'>$message</div>
            </div>
        </div>
        <div class='footer'>
            Sent from universecoworks.com website contact form.
        </div>
    </div>
</body>
</html>
";

// Email Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Universe Coworks <info@universecoworks.com>" . "\r\n"; 
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// --- SEND EMAIL ---
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Thank you! Your message has been sent successfully."]);
} else {
    // If mail() returns false, it could be a server configuration issue
    $last_error = error_get_last();
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Sorry, the server could not send your email. Please contact us directly at +91 8675556079.",
        "debug" => $last_error['message'] ?? 'Unknown error'
    ]);
}
?>
