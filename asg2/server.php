<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the raw input data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // For demonstration, just send back a success message
    echo json_encode(["status" => "success", "message" => "User registered successfully!"]);
}
?>