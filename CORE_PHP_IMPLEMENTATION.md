# Core PHP Backend Implementation for Contact Forms

This guide provides the necessary PHP code to handle contact form submissions securely on your hosting (e.g., cPanel, Apache, Nginx) for `universecoworks.com`.

## 1. Create the PHP Script

Create a file named `contact.php` in your public web directory (e.g., `public_html/api/contact.php`).

```php
<?php
// CORS Handling - Allow requests from your frontend domain
header("Access-Control-Allow-Origin: https://universecoworks.com"); // Replace with your actual domain
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
$to = "admin@universecoworks.com"; // CHANGE THIS to your admin email
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
$headers .= "From: Universe Coworks Website <no-reply@universecoworks.com>" . "\r\n"; // Ensure this domain is allowed to send mail
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
```

## 2. Configuration for Next.js

1.  **Frontend URL**: Update the CORS header in `contact.php` to match your live domain (e.g., `https://universecoworks.com`).
2.  **Admin Email**: Change `$to` variable in `contact.php` to receive emails.
3.  **Deploy**: Upload `contact.php` to your existing hosting provider (e.g., via FTP or File Manager).
4.  **Environment Variable**: Update your Next.js `.env` file to point to this script:

    ```env
    PHP_BACKEND_URL=https://your-domain.com/api/contact.php
    ```

    Ensure this URL is publicly accessible.

## 3. Deployment Check

After uploading, test the endpoint directly via Postman or Curl:
`POST https://your-domain.com/api/contact.php` with JSON body:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "1234567890",
  "interest": "Testing",
  "message": "This is a test message."
}
```

If you receive a success response, your backend is ready!
