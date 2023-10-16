<?php

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

$from = "contato@palmilhasterapeuticas.com.br";
$to = $_POST['user_email'];
$subject = "🚨 Falta muito pouco para garantir sua participação!";
$message = file_get_contents('mail/confirmacao.html');
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers = "From:" . $from;
if(mail($to,$subject,$message, $headers)) {
   echo "Message was sent.";
} else {
   echo "Message was not sent.";
}

?>