<?php
// Debug version to identify the exact issue
error_reporting(E_ALL);
ini_set('display_errors', 1); // Show errors for debugging

// Set headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["debug" => true, "message" => "CORS preflight successful"]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["debug" => true, "success" => false, "message" => "Method Not Allowed"]);
    exit();
}

// Debug: Check if we can read input
$json = file_get_contents('php://input');
if ($json === false) {
    echo json_encode(["debug" => true, "success" => false, "message" => "Unable to read input"]);
    exit();
}

// Debug: Check JSON parsing
$data = json_decode($json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "debug" => true, 
        "success" => false, 
        "message" => "Invalid JSON: " . json_last_error_msg(),
        "received_data" => $json
    ]);
    exit();
}

// Debug: Show received data
echo json_encode([
    "debug" => true,
    "message" => "Debug mode - script is working",
    "received_data" => $data,
    "server_info" => [
        "php_version" => phpversion(),
        "server_software" => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
        "document_root" => $_SERVER['DOCUMENT_ROOT'] ?? 'Unknown',
        "script_filename" => $_SERVER['SCRIPT_FILENAME'] ?? 'Unknown'
    ]
]);
?>
