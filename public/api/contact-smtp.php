<?php
// Live server contact form with SMTP for better reliability
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

// SMTP Configuration for Hostinger
$smtp_host = 'smtp.hostinger.com';
$smtp_username = 'inymartlabs@gmail.com';
$smtp_password = 'zinv bcnm thak kxkm';
$smtp_port = 587;
$from_email = 'contact@universecoworks.com'; // Use domain email for better deliverability
$to = 'info@universecoworks.com';

// Import PHPMailer (create this in same directory)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

try {
    // Create new PHPMailer instance
    $mail = new PHPMailer(true);
    
    // Server settings
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $smtp_port;
    
    // Recipients
    $mail->setFrom($from_email, 'Universe Coworks Website');
    $mail->addAddress($to, 'Universe Coworks Team');
    $mail->addReplyTo($email, $name);
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission: ' . $name;
    
    // HTML email body
    $mail->Body = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
            .header { background-color: #00a896; color: white; padding: 15px; text-align: center; }
            .content { padding: 15px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; width: 150px; display: inline-block; }
            .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00a896; margin-top: 10px; }
            .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Contact Form Submission</h2>
            </div>
            
            <div class='content'>
                <div class='field'>
                    <span class='label'>Name:</span> " . htmlspecialchars($name) . "
                </div>
                <div class='field'>
                    <span class='label'>Email:</span> " . htmlspecialchars($email) . "
                </div>
                <div class='field'>
                    <span class='label'>Phone:</span> " . htmlspecialchars($phone) . "
                </div>
                <div class='field'>
                    <span class='label'>Interest:</span> " . htmlspecialchars($interest) . "
                </div>
                
                <div class='message-box'>
                    <h3>Message:</h3>
                    <p>" . nl2br(htmlspecialchars($message)) . "</p>
                </div>
                
                <div class='field'>
                    <span class='label'>Submitted:</span> " . date('Y-m-d H:i:s') . "
                </div>
                <div class='field'>
                    <span class='label'>IP Address:</span> " . $_SERVER['REMOTE_ADDR'] . "
                </div>
            </div>
            
            <div class='footer'>
                <p>This is an automated message from Universe Coworks Website</p>
            </div>
        </div>
    </body>
    </html>";
    
    // Send email
    if ($mail->send()) {
        // Send auto-reply to user
        $autoMail = new PHPMailer(true);
        $autoMail->isSMTP();
        $autoMail->Host = $smtp_host;
        $autoMail->SMTPAuth = true;
        $autoMail->Username = $smtp_username;
        $autoMail->Password = $smtp_password;
        $autoMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $autoMail->Port = $smtp_port;
        
        $autoMail->setFrom($from_email, 'Universe Coworks');
        $autoMail->addAddress($email, $name);
        $autoMail->isHTML(true);
        $autoMail->Subject = 'Thank you for contacting Universe Coworks';
        
        $autoMail->Body = "
        <html>
        <head>
            <title>Thank you for contacting Universe Coworks</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
                .header { background-color: #00a896; color: white; padding: 15px; text-align: center; }
                .content { padding: 15px; }
                .urgent { background-color: #273a96; color: white; padding: 15px; text-align: center; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Thank You for Contacting Universe Coworks!</h2>
                </div>
                
                <div class='content'>
                    <p>Dear " . htmlspecialchars($name) . ",</p>
                    
                    <p>Thank you for reaching out to Universe Coworks. We have successfully received your message and our team will get back to you within 2 hours during business hours.</p>
                    
                    <div class='urgent'>
                        <h3>For Urgent Inquiries</h3>
                        <p><strong>Call:</strong> +91 97899-13368</p>
                        <p><strong>Email:</strong> info@universecoworks.com</p>
                    </div>
                </div>
                
                <div class='footer'>
                    <p>This is an automated message. Please do not reply to this email.</p>
                    <p>Universe Coworks | Thillai Nagar, Trichy | www.universecoworks.com</p>
                </div>
            </div>
        </body>
        </html>";
        
        $autoMail->send();
        
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
        error_log("SMTP Mail sending failed for: " . json_encode($data));
        error_log("PHPMailer Error: " . $mail->ErrorInfo);
        
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to send email. Please try again or call us directly at +91 97899-13368.'
        ]);
    }
} catch (Exception $e) {
    error_log("Exception in mail sending: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Server error occurred. Please try again or call us directly at +91 97899-13368.'
    ]);
}
?>
