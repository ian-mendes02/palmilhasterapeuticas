<?php
$index = random_int(1, 6);
$newURL = "index_" . $index . ".html";
header("Location: ".$newURL)
?>