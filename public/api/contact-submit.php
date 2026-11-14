<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/config.php';

$payload = json_decode(file_get_contents('php://input'), true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request body.',
    ]);
    exit;
}

$formSource = trim((string) ($payload['form_source'] ?? ''));
$fullName = trim((string) ($payload['full_name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$preferredTime = trim((string) ($payload['preferred_time'] ?? ''));
$course = trim((string) ($payload['course'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));

$allowedSources = [
    'home_enquiry',
    'contact_page',
    'clat_enquiry',
    'cuet_enquiry',
];

if (!in_array($formSource, $allowedSources, true)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid form source.',
    ]);
    exit;
}

if ($fullName === '' || mb_strlen($fullName) > 120) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid name.',
    ]);
    exit;
}

if ($email !== '' && (mb_strlen($email) > 190 || !filter_var($email, FILTER_VALIDATE_EMAIL))) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid email address.',
    ]);
    exit;
}

if ($phone !== '' && mb_strlen($phone) > 30) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid phone number.',
    ]);
    exit;
}

if ($message !== '' && mb_strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'The message is too long.',
    ]);
    exit;
}

try {
    $statement = $pdo->prepare(
        'INSERT INTO contact_submissions
            (form_source, full_name, email, phone, preferred_time, course, message)
         VALUES
            (:form_source, :full_name, :email, :phone, :preferred_time, :course, :message)'
    );
    $statement->execute([
        ':form_source' => $formSource,
        ':full_name' => $fullName,
        ':email' => $email !== '' ? $email : null,
        ':phone' => $phone !== '' ? $phone : null,
        ':preferred_time' => $preferredTime !== '' ? $preferredTime : null,
        ':course' => $course !== '' ? $course : null,
        ':message' => $message !== '' ? $message : null,
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Your enquiry was submitted successfully.',
    ]);
} catch (PDOException $error) {
    error_log('Contact API insert failed: ' . $error->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to save your enquiry right now.',
    ]);
}
