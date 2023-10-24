<?php
$PIXELID = "3647038675391377";
$TOKEN = "EAAPjcfI2k3MBO3LcPwJCKQowqDuniC3jB2kIoYkbJHHBFG60D02uUUPoMaeFpAhiPZCTZBDwnZB2bLkyPwOM0EhLgZBXix4ZCzQbaBWZBZA6hibisVisXLHYZBxW9F1JhI0ubjnBC5xTuSg1ipAX97quoJkIwGaS2NiFnWNt2a3unyweNgw4xePEA0rsnuj3wSUDWAZDZD"; 
$url = "https://graph.facebook.com/{API_VERSION}/$PIXELID/events?access_token=$TOKEN";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$data = <<<DATA
{
  "Id": 78912,
  "Customer": "Jason Sweet"
}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

$resp = curl_exec($curl);
echo $resp;
curl_close($curl);
?>