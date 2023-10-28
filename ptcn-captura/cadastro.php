<?php
ini_set('display_errors', '1');
$conn = new mysqli('srv1078.hstgr.io', 'u232384656_admin', '@Podal2023', 'u232384656_ptnc');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
if (isset($_POST['user_info']['email'])) {
    $nome = $conn->real_escape_string($_POST['user_info']['nome']);
    $sobrenome = $conn->real_escape_string($_POST['user_info']['sobrenome']);
    $email = $conn->real_escape_string($_POST['user_info']['email']);
    $hora = $conn->real_escape_string($_POST['event_info']['event_time']['time']);
    $data = $conn->real_escape_string($_POST['event_info']['event_time']['date']);
    $time_spent = $conn->real_escape_string($_POST['event_info']['time_spent']);
    $check = "SELECT * FROM `cadastros` WHERE email='$email'";
    $checkfor = $conn->query($check);
    if ($checkfor->num_rows > 0) {
        echo "\nUser exists, redirecting...";
    } else {
        $conn->query("INSERT IGNORE INTO `cadastros` (`nome`, `sobrenome`, `email`, `hora`, `data`,`permanencia`) VALUES ('$nome', '$sobrenome', '$email', '$hora', '$data','$time_spent')");
    };
}
