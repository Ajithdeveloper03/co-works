<?php
/**
 * Universe Coworks Contact Form Handler
 * Simple, Reliable, Hostinger-Optimized
 */

// Prevent errors from showing
error_reporting(0);
ini_set('display_errors', 0);

// Set headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(["success" => false, "message" => "Method not allowed"]));
}

// Read input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate we got data
if (!$data) {
    http_response_code(400);
    die(json_encode(["success" => false, "message" => "No data received"]));
}

// Extract fields
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$interest = isset($data['interest']) ? trim($data['interest']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(422);
    die(json_encode([
        "success" => false,
        "message" => "Name, email, and phone are required"
    ]));
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    die(json_encode([
        "success" => false,
        "message" => "Invalid email address"
    ]));
}

// Sanitize
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$interest = htmlspecialchars($interest);
$message = htmlspecialchars($message);

// Admin email
$admin_email = "info@universecoworks.com";

// Prepare admin email
$admin_subject = "New Inquiry: $name - $interest";
$admin_body = "
<html>
<body style='font-family: Arial; background: #f5f5f5; padding: 20px;'>
    <div style='max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px;'>
        <h2 style='color: #273a96; border-bottom: 2px solid #00a896; padding-bottom: 10px;'>New Inquiry from Website</h2>
        
        <table style='width: 100%; margin-top: 20px;'>
            <tr>
                <td style='padding: 8px 0; font-weight: bold; color: #555; width: 150px;'>Name:</td>
                <td style='padding: 8px 0;'>$name</td>
            </tr>
            <tr>
                <td style='padding: 8px 0; font-weight: bold; color: #555;'>Email:</td>
                <td style='padding: 8px 0;'><a href='mailto:$email'>$email</a></td>
            </tr>
            <tr>
                <td style='padding: 8px 0; font-weight: bold; color: #555;'>Phone:</td>
                <td style='padding: 8px 0;'>$phone</td>
            </tr>
            <tr>
                <td style='padding: 8px 0; font-weight: bold; color: #555;'>Interest:</td>
                <td style='padding: 8px 0;'>$interest</td>
            </tr>
        </table>
        
        <h3 style='color: #273a96; margin-top: 20px;'>Message:</h3>
        <p style='background: #f9f9f9; padding: 15px; border-left: 4px solid #00a896; line-height: 1.6;'>
            " . ($message ? $message : 'No additional message') . "
        </p>
        
        <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
        <p style='font-size: 12px; color: #999;'>
            Sent from: universecoworks.com<br>
            Date: " . date('Y-m-d H:i:s') . "
        </p>
    </div>
</body>
</html>";

// Prepare auto-reply
$user_subject = "We've received your inquiry - Universe Coworks";
$user_body = "
<html>
<body style='font-family: Arial; background: #f5f5f5; padding: 20px;'>
    <div style='max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px;'>
        <h2 style='color: #273a96;'>Thank You, $name!</h2>
        
        <p style='line-height: 1.6; color: #555;'>
            We've received your inquiry for <strong>$interest</strong>.<br><br>
            Our team will review your requirements and get back to you within <strong>2 hours</strong>.<br><br>
            If you have any urgent questions, please call us at: <strong>+91 97899 13368</strong>
        </p>
        
        <div style='background: #f0f7f7; padding: 15px; border-radius: 5px; margin-top: 20px;'>
            <p style='margin: 0; font-size: 12px; color: #666;'>
                <strong>Universe Coworks</strong><br>
                Workspace Solutions for Your Success
            </p>
        </div>
    </div>
</body>
</html>";

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: info@universecoworks.com\r\n";

// Send admin email
$admin_sent = @mail($admin_email, $admin_subject, $admin_body, $headers);

// Send user auto-reply
@mail($email, $user_subject, $user_body, $headers);

// Respond
if ($admin_sent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you! We'll contact you shortly."
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Email service error. Please try again or call us at +91 97899 13368"
    ]);
}
?>
