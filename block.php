<?php
// by BlackDog 20130129
$location = 'http://www.google.com'; // where to send bad people

$range_low = ip2long("5.12.214.198");
$range_high = ip2long("200.200.200.200");
// AAA.BBB.CCC.DDD

$ip = ip2long($_SERVER['REMOTE_ADDR']);
if ($ip >= $range_low && $ip <= $range_high) {
// what to do if in bad IP range
header ('HTTP/1.1 301 Moved Permanently');
header ('Location: '.$location);
}
else {
// do something else or nothing at all
}
?>