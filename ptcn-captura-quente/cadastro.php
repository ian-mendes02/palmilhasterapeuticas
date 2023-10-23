<?php

$conn = new mysqli('srv1078.hstgr.io', 'u232384656_admin', '@Podal2023', 'u232384656_ptnc');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    echo "Connection successful!";
}

if (isset($_POST['user_email']) && isset($_POST['user_name'])) {

    $email = $conn->real_escape_string($_POST['user_email']);

    $nome = $conn->real_escape_string($_POST['user_name']);

    $check = "SELECT * FROM `cadastros-quente` WHERE email='$email'";

    $checkfor = $conn->query($check);

    if ($checkfor->num_rows > 0) {
        echo "user_exists";
    } else {
        echo "new_user";
        $conn->query("INSERT IGNORE INTO `cadastros-quente` (email, nome) VALUES ('$email' , '$nome')");
    }
    
    $conn->close();
}


?>