<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
ini_set('display_errors', 1);
$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
$mail->Encoding = 'base64';
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->Username = 'contato@palmilhasterapeuticas.com.br';
$mail->Password = '@Podal2023';
$mail->setFrom('contato@palmilhasterapeuticas.com.br', 'Contato Palmilhas Terapêuticas');
$mail->addReplyTo('contato@palmilhasterapeuticas.com.br', 'Contato Palmilhas Terapêuticas');
$mail->Subject = '🚨 Falta muito pouco para garantir sua participação!';
$mail->msgHTML(file_get_contents('mail/confirmacao.html'), __DIR__);

if (isset($_POST['user_info']['email'])) {    
    $nome = $_POST['user_info']['nome'];
    $email = $_POST['user_info']['email'];
    $mail->addAddress($email, $nome);
    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'The email message was sent.';
    }
} else {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>