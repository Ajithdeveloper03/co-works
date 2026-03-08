<?php
// 1. Setup Headers & Security
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow Next.js to call this
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// 2. Debugging (Temporary: Remove after it works)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 3. Process Input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid data received.']);
    exit;
}

$name     = strip_tags(trim($data['name'] ?? ''));
$email    = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone    = strip_tags(trim($data['phone'] ?? ''));
$interest = strip_tags(trim($data['interest'] ?? ''));
$message  = strip_tags(trim($data['message'] ?? ''));

if (!$name || !$email || !$phone) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in name, email, and phone.']);
    exit;
}

// 4. Email Configuration (CRITICAL FOR HOSTINGER)
$to = 'info@universecoworks.com';
$fromDomainEmail = 'info@universecoworks.com'; // MUST be a real email in your Hostinger panel
$subject = "New Inquiry: $name ($interest)";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Universe Website <$fromDomainEmail>\r\n"; // Mandatory for Hostinger
$headers .= "Reply-To: $email\r\n"; // Clicking 'Reply' goes to the user

$body = "<h2>New Contact Form Submission</h2>
         <p><strong>Name:</strong> $name</p>
         <p><strong>Email:</strong> $email</p>
         <p><strong>Phone:</strong> $phone</p>
         <p><strong>Interest:</strong> $interest</p>
         <p><strong>Message:</strong><br>$message</p>";

// 5. Execution
$success = mail($to, $subject, $body, $headers);

if ($success) {
    // Optional: Send auto-reply to user
    $autoHeaders = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nFrom: info@universecoworks.com\r\n";
    @mail($email, "We received your inquiry", "Hi $name, we will contact you within 2 hours.", $autoHeaders);

    echo json_encode(['success' => true, 'message' => 'Mail sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server failed to send mail. Check Hostinger error_log.']);
}
?>