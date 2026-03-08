<?php
// Ultra-simple Hostinger contact form - minimal dependencies
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
    echo json_encode(['success' => false, 'message' => 'Invalid data']);
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
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

// Email setup
$to = 'info@universecoworks.com';
$subject = 'New Contact: ' . $name;

// Plain text email (most compatible)
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: $phone\n";
$emailBody .= "Interest: $interest\n\n";
$emailBody .= "Message:\n$message\n\n";
$emailBody .= "Sent from: " . date('Y-m-d H:i:s');

// Simple headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$sent = mail($to, $subject, $emailBody, $headers);

if ($sent) {
    // Send auto-reply (simple text)
    $autoSubject = 'Thank you for contacting Universe Coworks';
    $autoBody = "Dear $name,\n\n";
    $autoBody .= "Thank you for contacting Universe Coworks. We have received your message and will get back to you within 2 hours.\n\n";
    $autoBody .= "If you have urgent questions, call us at +91 97899-13368.\n\n";
    $autoBody .= "Best regards,\nUniverse Coworks Team";
    
    $autoHeaders = "From: Universe Coworks <info@universecoworks.com>\r\n";
    $autoHeaders .= "X-Mailer: PHP/" . phpversion();
    
    @mail($email, $autoSubject, $autoBody, $autoHeaders);
    
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
?>
