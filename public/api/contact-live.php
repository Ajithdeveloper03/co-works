<?php
// Live server contact form with enhanced error handling and debugging
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Enable error reporting for debugging (remove in production if needed)
error_reporting(E_ALL);
ini_set('display_errors', 0); // Don't display errors to user

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data received']);
    exit;
}

// Extract and validate fields
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$interest = isset($data['interest']) ? trim(strip_tags($data['interest'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Basic validation
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields (name, email, phone) are missing']);
    exit;
}

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email setup
$to = 'info@universecoworks.com';
$subject = 'New Contact Form Submission: ' . $name;

// HTML email body for better formatting
$emailBody = "
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
    <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;'>
        <h2 style='color: #00a896; border-bottom: 2px solid #00a896; padding-bottom: 10px;'>New Contact Form Submission</h2>
        
        <table style='width: 100%; border-collapse: collapse;'>
            <tr style='background-color: #f9f9f9;'>
                <td style='padding: 10px; font-weight: bold; width: 150px;'>Name:</td>
                <td style='padding: 10px;'>" . htmlspecialchars($name) . "</td>
            </tr>
            <tr>
                <td style='padding: 10px; font-weight: bold; background-color: #f9f9f9;'>Email:</td>
                <td style='padding: 10px;'>" . htmlspecialchars($email) . "</td>
            </tr>
            <tr style='background-color: #f9f9f9;'>
                <td style='padding: 10px; font-weight: bold;'>Phone:</td>
                <td style='padding: 10px;'>" . htmlspecialchars($phone) . "</td>
            </tr>
            <tr>
                <td style='padding: 10px; font-weight: bold; background-color: #f9f9f9;'>Interest:</td>
                <td style='padding: 10px;'>" . htmlspecialchars($interest) . "</td>
            </tr>
        </table>
        
        <div style='margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #00a896;'>
            <h3 style='margin-top: 0; color: #00a896;'>Message:</h3>
            <p style='margin-bottom: 0;'>" . nl2br(htmlspecialchars($message)) . "</p>
        </div>
        
        <div style='margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;'>
            <p style='margin: 0;'>Submitted on: " . date('Y-m-d H:i:s') . "</p>
            <p style='margin: 0;'>IP Address: " . $_SERVER['REMOTE_ADDR'] . "</p>
        </div>
    </div>
</body>
</html>";

// Headers for HTML email
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Universe Coworks Website <info@universecoworks.com>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 1\r\n"; // High priority

// Send main email
$sent = mail($to, $subject, $emailBody, $headers);

if ($sent) {
    // Send auto-reply to user
    $autoSubject = 'Thank you for contacting Universe Coworks';
    
    $autoBody = "
    <html>
    <head>
        <title>Thank you for contacting Universe Coworks</title>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
        <div style='max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;'>
            <h2 style='color: #00a896; text-align: center;'>Thank You for Contacting Universe Coworks!</h2>
            
            <p>Dear " . htmlspecialchars($name) . ",</p>
            
            <p>Thank you for reaching out to Universe Coworks. We have successfully received your message and our team will get back to you within 2 hours during business hours.</p>
            
            <div style='background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00a896; margin: 20px 0;'>
                <h3 style='color: #00a896; margin-top: 0;'>What happens next?</h3>
                <ul>
                    <li>Our team will review your inquiry</li>
                    <li>We'll contact you within 2 hours</li>
                    <li>We'll provide personalized workspace solutions</li>
                </ul>
            </div>
            
            <div style='background-color: #273a96; color: white; padding: 15px; text-align: center; margin: 20px 0;'>
                <h3 style='margin-top: 0; color: white;'>For Urgent Inquiries</h3>
                <p style='margin: 5px 0;'><strong>Call:</strong> +91 97899-13368</p>
                <p style='margin: 5px 0;'><strong>Email:</strong> info@universecoworks.com</p>
            </div>
            
            <p style='font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 15px; margin-top: 30px;'>
                This is an automated message. Please do not reply to this email.<br>
                Universe Coworks | Thillai Nagar, Trichy | www.universecoworks.com
            </p>
        </div>
    </body>
    </html>";
    
    $autoHeaders = "MIME-Version: 1.0\r\n";
    $autoHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $autoHeaders .= "From: Universe Coworks <info@universecoworks.com>\r\n";
    $autoHeaders .= "Reply-To: info@universecoworks.com\r\n";
    $autoHeaders .= "X-Mailer: PHP/" . phpversion();
    
    // Send auto-reply (don't wait for success/failure)
    @mail($email, $autoSubject, $autoBody, $autoHeaders);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Message sent successfully! We will contact you within 2 hours.',
        'data' => [
            'name' => $name,
            'email' => $email,
            'timestamp' => date('Y-m-d H:i:s')
        ]
    ]);
} else {
    // Log error for debugging
    error_log("Mail sending failed for: " . json_encode($data));
    error_log("Mail error: " . error_get_last()['message'] ?? 'Unknown error');
    
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send email. Please try again or call us directly at +91 97899-13368.'
    ]);
}
?>
