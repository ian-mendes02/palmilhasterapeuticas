<?php
require_once('vendor/autoload.php');
$client = new \GuzzleHttp\Client();
$response = $client->request('POST', 'https://api.rd.services/auth/token?token_by=code', [
  'body' => '{"client_id":"09e82c62-dab7-4e15-91fb-e2b94ef9a137","client_secret":"a3a940508f0a40d4b4ad8989dbe37fdb","code":"50cf0d83c68b0001e7ff2dff5ddaeec6"}',
  'headers' => [
    'accept' => 'application/json',
    'content-type' => 'application/json',
  ],
]);
?>