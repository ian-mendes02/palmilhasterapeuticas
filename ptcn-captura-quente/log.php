<?php
$conn = new mysqli('srv1078.hstgr.io', 'u232384656_admin', '@Podal2023', 'u232384656_ptnc');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
if(isset($_POST['time_spent'])) {
    $event_name = $_POST['event_type'];
    $time_spent = $_POST['time_spent'];
    $time_spent = round($time_spent/1000, 1) . "s";
    $source = $_POST['page_url'];
    $conn->query("INSERT INTO `eventos` (`evento`, `origem`,`permanencia`) VALUES ('$event_name','$source','$time_spent')");
    $conn->close();
}
?>