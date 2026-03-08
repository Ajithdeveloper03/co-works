<?php
// Simple Hostinger-compatible contact form
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't display errors to user

// Set headers first
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit();
}

$json = file_get_contents('php://input');
if ($json === false) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Unable to read input"]);
    exit();
}

$data = json_decode($json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON: " . json_last_error_msg()]);
    exit();
}

// Spam protection
if (!empty($data['_gotcha'])) {
    echo json_encode(["success" => true, "message" => "Message received."]);
    exit();
}

// Validation
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

// Prepare email
$to = "info@universecoworks.com";
$subject = "New Inquiry from Universe Coworks Website: $name";

// Plain text version for better compatibility
$plainContent = "New Workspace Inquiry

Name: $name
Email: $email
Phone: $phone
Interest: $interest

Message:
$message

---
Sent from universecoworks.com website contact form on " . date('Y-m-d H:i:s');

// HTML version
$htmlContent = "
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
            Sent from universecoworks.com website contact form on " . date('Y-m-d H:i:s') . "
        </div>
    </div>
</body>
</html>";

// Hostinger-compatible headers
$headers = "From: Universe Coworks <info@universecoworks.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Try to send email with error handling
try {
    $success = mail($to, $subject, $htmlContent, $headers);
    
    if ($success) {
        // Send auto-reply
        $autoSubject = "Thank you for contacting Universe Coworks";
        $autoContent = "
        <html>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-top: 5px solid #00a896; border-radius: 8px;'>
                <div style='background: #00a896; color: white; padding: 15px; border-radius: 4px 4px 0 0; text-align: center;'>
                    <h2 style='margin: 0;'>Thank You for Your Inquiry!</h2>
                </div>
                <div style='padding: 20px;'>
                    <p>Dear $name,</p>
                    <p>Thank you for reaching out to Universe Coworks. We have received your inquiry and our team will get back to you within 2 hours.</p>
                    <p>If you have any urgent questions, please call us at +91 97899-13368.</p>
                    <p>Best regards,<br>Universe Coworks Team</p>
                </div>
            </div>
        </body>
        </html>";
        
        $autoHeaders = "From: Universe Coworks <info@universecoworks.com>\r\n";
        $autoHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
        $autoHeaders .= "MIME-Version: 1.0\r\n";
        
        @mail($email, $autoSubject, $autoContent, $autoHeaders); // Suppress errors for auto-reply
        
        http_response_code(200);
        echo json_encode([
            "success" => true, 
            "message" => "Thank you! Your message has been sent successfully. We'll contact you within 2 hours."
        ]);
    } else {
        // Log detailed error for debugging
        $error = error_get_last();
        error_log("Mail sending failed. To: $to, Subject: $subject, Error: " . ($error['message'] ?? 'Unknown error'));
        
        http_response_code(500);
        echo json_encode([
            "success" => false, 
            "message" => "Sorry, the server could not send your email. Please contact us directly at +91 97899-13368."
        ]);
    }
} catch (Exception $e) {
    error_log("Exception in mail sending: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "success" => false, 
        "message" => "Server error occurred. Please contact us directly at +91 97899-13368."
    ]);
}
?>
