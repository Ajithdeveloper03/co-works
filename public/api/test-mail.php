<?php
/**
 * Universe Coworks - SMTP Mail Diagnostic Test
 * Enables full display of errors and SMTP logs in browser.
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Content-Type: text/html; charset=UTF-8");

echo "<h2>Starting SMTP Mail Diagnostic Test...</h2>";
echo "<p>Loading PHPMailer files...</p>";

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

echo "<p>PHPMailer files loaded successfully. Initializing mailer...</p>";

$mail = new PHPMailer(true);

try {
    // Enable verbose debug output
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
    
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'inymartlabs@gmail.com';
    $mail->Password   = 'zinv bcnm thak kxkm';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('inymartlabs@gmail.com', 'Universe Coworks Test');
    $mail->addAddress('info@universecoworks.com', 'Universe Coworks Admin');
    
    // Content
    $mail->isHTML(true);
    $mail->Subject = 'SMTP Diagnostics Test Mail';
    $mail->Body    = 'This is a secure diagnostic email to test Gmail SMTP credentials.';

    echo "<h3>SMTP Debug Output:</h3><pre>";
    $mail->send();
    echo "</pre>";
    echo "<h3 style='color: green;'>Test Result: SUCCESS! Connection and credentials are working perfectly.</h3>";
    
} catch (Exception $e) {
    echo "</pre>";
    echo "<h3 style='color: red;'>PHPMailer Exception: " . $e->getMessage() . "</h3>";
    echo "<p>Error Info: " . $mail->ErrorInfo . "</p>";
} catch (\Exception $e) {
    echo "</pre>";
    echo "<h3 style='color: red;'>Global Exception: " . $e->getMessage() . "</h3>";
}
?>
