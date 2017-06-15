<?php
$curl = curl_init();
curl_setopt($curl,CURLOPT_URL,'http://123.207.172.12/myMajongHtml/pig.js');
curl_setopt($curl, CURLOPT_HEADER, 0); 
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 0); 
$data = curl_exec($curl); 
curl_close($curl);
echo($data);
?>
