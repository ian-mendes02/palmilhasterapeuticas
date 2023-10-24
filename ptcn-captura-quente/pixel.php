<?php
function hash_str($str) {
    $hash = hash("SHA256", "$str", false);
    return $hash;
};
$fbver = "v18.0";
$fbid = "3647038675391377";
$fbtoken = "EAAPjcfI2k3MBO3LcPwJCKQowqDuniC3jB2kIoYkbJHHBFG60D02uUUPoMaeFpAhiPZCTZBDwnZB2bLkyPwOM0EhLgZBXix4ZCzQbaBWZBZA6hibisVisXLHYZBxW9F1JhI0ubjnBC5xTuSg1ipAX97quoJkIwGaS2NiFnWNt2a3unyweNgw4xePEA0rsnuj3wSUDWAZDZD";
$url = "https://graph.facebook.com/$fbver/$fbid/events?access_token=$fbtoken";
$curl = curl_init();
$data = json_encode(array(
    $_POST['event_name'],
    $_POST['event_time'],
    $_POST['action_source'],
    $_POST['event_source_url'],
    $_POST['user_data']['lead_id'],
    hash_str($_POST['user_data']['fn']),
    hash_str($_POST['user_data']['ln']),    
    hash_str($_POST['user_data']['em']),    
));
echo $data;
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Content-Type: application/json'));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($curl);
curl_close($curl);
echo $resp;
?>