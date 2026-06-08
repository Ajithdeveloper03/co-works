<?php
/**
 * Universe Coworks - Form submission logic diagnostic
 * Visit this file directly in your browser to debug contact.php issues.
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: text/html; charset=UTF-8");

echo "<h2>Starting contact.php Logic Diagnostic Test...</h2>";

$data = [
    'name' => 'Inymart Test Team',
    'email' => 'info@universecoworks.com',
    'phone' => '8776578904',
    'interest' => 'Hot Desk',
    'message' => 'This is a test diagnostic submission.'
];

echo "<p>Mock form data initialized. Loading PHPMailer files...</p>";

require_once __DIR__ . '/PHPMailer/Exception.php';
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

echo "<p>PHPMailer files loaded. Configuring SMTP settings...</p>";

$smtp_host = 'smtp.gmail.com';
$smtp_port = 465;
$smtp_username = 'inymartlabs@gmail.com';
$smtp_password = 'zinv bcnm thak kxkm'; // Gmail App Password
$admin_email = 'info@universecoworks.com';

try {
    $mail = new PHPMailer(true);

    // Enable verbose debug output
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; 

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
    $mail->setFrom($smtp_username, 'Universe Coworks Website Test');
    $mail->addAddress($admin_email, 'Universe Coworks Admin');
    $mail->addReplyTo($data['email'], $data['name']);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Workspace Inquiry: " . $data['name'] . " - " . $data['interest'];
    $mail->Body    = "This is a test notification body from test-contact.php.";

    echo "<h3>SMTP Debug Output for Admin Notification:</h3><pre>";
    $mail->send();
    echo "</pre>";
    echo "<p style='color: green; font-weight: bold;'>✓ Admin notification sent successfully!</p>";

    // Auto reply
    echo "<p>Reusing connection to send user auto-reply...</p>";
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->addAddress($data['email'], $data['name']);
    $mail->setFrom($smtp_username, 'Universe Coworks');
    $mail->Subject = "We have received your workspace inquiry - Universe Coworks";
    $mail->Body    = "This is a test auto-reply body from test-contact.php.";

    echo "<h3>SMTP Debug Output for User Auto-Reply:</h3><pre>";
    $mail->send();
    echo "</pre>";
    echo "<p style='color: green; font-weight: bold;'>✓ User auto-reply sent successfully!</p>";

    echo "<h2 style='color: green;'>All tests completed successfully! No errors found.</h2>";

} catch (\Throwable $e) {
    echo "</pre>";
    echo "<h3 style='color: red;'>Fatal Error Caught: " . $e->getMessage() . "</h3>";
    echo "<p>File: " . $e->getFile() . " on line " . $e->getLine() . "</p>";
    if (isset($mail)) {
        echo "<p>PHPMailer Error Info: " . $mail->ErrorInfo . "</p>";
    }
}
?>
