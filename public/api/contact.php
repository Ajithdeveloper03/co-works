<?php
/**
 * Universe Coworks - Rebuilt Contact Form Handler
 * Powered by PHPMailer & Gmail SMTP
 * 100% Self-Contained (No Composer Required)
 */

// Disable error display to prevent output corruption
error_reporting(0);
ini_set('display_errors', 0);

// Set headers for CORS and JSON response
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(["success" => false, "message" => "Method not allowed"]));
}

// Read JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate data receipt
if (!$data) {
    http_response_code(400);
    die(json_encode(["success" => false, "message" => "No data received"]));
}

// Extract form fields
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

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    die(json_encode([
        "success" => false,
        "message" => "Invalid email address"
    ]));
}

// Sanitize inputs
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$interest = htmlspecialchars($interest);
$message = htmlspecialchars($message);

// Load PHPMailer classes from local directory
require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// SMTP Server Configuration
$smtp_host = 'smtp.gmail.com';
$smtp_port = 465;
$smtp_username = 'inymartlabs@gmail.com';
$smtp_password = 'zinv bcnm thak kxkm'; // Gmail App Password
$admin_email = 'info@universecoworks.com';

try {
    // ----------------------------------------------------
    // 1. Send Notification Email to Admin
    // ----------------------------------------------------
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host       = $smtp_host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_username;
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port       = $smtp_port;
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom($smtp_username, 'Universe Coworks Website');
    $mail->addAddress($admin_email, 'Universe Coworks Admin');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Workspace Inquiry: $name - $interest";
    
    // HTML Email template for Admin
    $mail->Body = "
    <html>
    <body style='font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;'>
        <div style='max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; border: 1px solid #eef0f3;'>
            <h2 style='color: #273a96; border-bottom: 2px solid #00a896; padding-bottom: 10px; margin-top: 0;'>New Inquiry Received</h2>
            
            <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
                <tr>
                    <td style='padding: 10px 0; font-weight: bold; color: #555; width: 150px; border-bottom: 1px solid #f0f0f0;'>Name:</td>
                    <td style='padding: 10px 0; color: #333; border-bottom: 1px solid #f0f0f0;'>$name</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; font-weight: bold; color: #555; border-bottom: 1px solid #f0f0f0;'>Email:</td>
                    <td style='padding: 10px 0; color: #333; border-bottom: 1px solid #f0f0f0;'><a href='mailto:$email' style='color: #273a96; text-decoration: none;'>$email</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; font-weight: bold; color: #555; border-bottom: 1px solid #f0f0f0;'>Phone:</td>
                    <td style='padding: 10px 0; color: #333; border-bottom: 1px solid #f0f0f0;'><a href='tel:$phone' style='color: #273a96; text-decoration: none;'>$phone</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; font-weight: bold; color: #555; border-bottom: 1px solid #f0f0f0;'>Interest:</td>
                    <td style='padding: 10px 0; color: #333; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #00a896;'>$interest</td>
                </tr>
            </table>
            
            <h3 style='color: #273a96; margin-top: 25px; margin-bottom: 10px;'>Requirements / Message:</h3>
            <p style='background: #f9fafb; padding: 15px; border-left: 4px solid #00a896; border-radius: 4px; line-height: 1.6; color: #444; margin: 0;'>
                " . ($message ? nl2br($message) : 'No additional message provided.') . "
            </p>
            
            <hr style='border: none; border-top: 1px solid #eee; margin: 25px 0;'>
            <p style='font-size: 11px; color: #999; margin: 0; text-align: center;'>
                Sent automatically from universecoworks.com • " . date('Y-m-d H:i:s') . "
            </p>
        </div>
    </body>
    </html>";

    $mail->send();

    // ----------------------------------------------------
    // 2. Send Auto-Reply Confirmation to User
    // ----------------------------------------------------
    $auto_reply = new PHPMailer(true);

    $auto_reply->isSMTP();
    $auto_reply->Host       = $smtp_host;
    $auto_reply->SMTPAuth   = true;
    $auto_reply->Username   = $smtp_username;
    $auto_reply->Password   = $smtp_password;
    $auto_reply->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $auto_reply->Port       = $smtp_port;
    $auto_reply->CharSet    = 'UTF-8';

    $auto_reply->setFrom($smtp_username, 'Universe Coworks');
    $auto_reply->addAddress($email, $name);

    $auto_reply->isHTML(true);
    $auto_reply->Subject = "We have received your workspace inquiry - Universe Coworks";
    
    // HTML Email template for User
    $auto_reply->Body = "
    <html>
    <body style='font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;'>
        <div style='max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; border: 1px solid #eef0f3;'>
            <h2 style='color: #273a96; margin-top: 0;'>Thank you, $name!</h2>
            
            <p style='line-height: 1.6; color: #444;'>
                We have received your interest in our <strong>$interest</strong> solutions. Our team is already reviewing your request.
            </p>
            
            <p style='line-height: 1.6; color: #444;'>
                A workspace advisor will reach out to you within the next <strong>2 hours</strong> (during business hours) to discuss pricing and book your tour.
            </p>
            
            <div style='background: #f0fdfa; border-left: 4px solid #00a896; padding: 15px; border-radius: 4px; margin: 25px 0;'>
                <p style='margin: 0; font-weight: bold; color: #0d9488;'>Need immediate assistance?</p>
                <p style='margin: 5px 0 0 0; color: #333;'>
                    Feel free to call or WhatsApp us directly at: <a href='tel:+919789913368' style='font-weight: bold; color: #273a96; text-decoration: none;'>+91 97899 13368</a>
                </p>
            </div>
            
            <hr style='border: none; border-top: 1px solid #eee; margin: 25px 0;'>
            <p style='margin: 0; font-size: 12px; color: #777;'>
                <strong>Universe Coworks</strong><br>
                Workspace Solutions built for Startups, Remote Teams & Professionals.<br>
                <a href='https://universecoworks.com' style='color: #00a896; text-decoration: none;'>universecoworks.com</a>
            </p>
        </div>
    </body>
    </html>";

    $auto_reply->send();

    // Success response
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Your inquiry has been successfully received. We will contact you within 2 hours!"
    ]);

} catch (Exception $e) {
    // Log exception details to PHP error log
    error_log("PHPMailer exception: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "We encountered an email delivery issue. Please contact us directly at +91 97899 13368."
    ]);
}
?>
