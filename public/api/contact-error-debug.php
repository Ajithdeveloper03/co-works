<?php
// Show all errors to identify the 500 error issue
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
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

echo json_encode(['debug' => 'Starting to process request']);

// Get POST data
$input = file_get_contents('php://input');
echo json_encode(['debug' => 'Input received', 'input_length' => strlen($input)]);

$data = json_decode($input, true);
echo json_encode(['debug' => 'JSON decoded', 'json_error' => json_last_error_msg()]);

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

echo json_encode(['debug' => 'Fields extracted', 'name' => $name, 'email' => $email]);

// Basic validation
if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

echo json_encode(['debug' => 'Validation passed']);

// Email setup
$to = 'info@universecoworks.com';
$subject = 'New Contact: ' . $name;

echo json_encode(['debug' => 'Email setup complete']);

// Plain text email (most compatible)
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: $phone\n";
$emailBody .= "Interest: $interest\n\n";
$emailBody .= "Message:\n$message\n\n";
$emailBody .= "Sent from: " . date('Y-m-d H:i:s');

echo json_encode(['debug' => 'Email body created']);

// Simple headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

echo json_encode(['debug' => 'Headers created', 'about_to_send' => true]);

// Send email
$sent = mail($to, $subject, $emailBody, $headers);

echo json_encode(['debug' => 'Mail function called', 'result' => $sent]);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email', 'error' => error_get_last()]);
}
?>
