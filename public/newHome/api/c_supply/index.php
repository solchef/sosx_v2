<?php
header('Content-Type: application/json');
function http_request($url){
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch); 
    curl_close($ch);      
    return $output;
}  

  $contract_address = '0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF';

  $address = [
    '0xa208f7c6cafe9ae6b1af11588c72bedcfe786f46',
    // '0x65c5315a6381e91c3e00bb256df0c2b0ef98946d',
    // '0x198ac4c2fbce9629b955354a124cb3ae17ac2588'
  ];

   $res = 0;


  foreach ($address as $key => $value) {

      $url = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress='.$contract_address.'&apikey=ES851E1QZIN1ERWHIGINIEJXP3PZ8Q2ZDM&tag=latest&address='.$value;
      $ur1_exec = json_decode(http_request($url), true);

      // array_push($res, $ur1_exec['result']);
      // var_dump(round(($ur1_exec['result']/1000000000), 6));
      $res += round(($ur1_exec['result']/1000000000000000000), 6);

  }

$cal = 10000000000 - $res;

print $cal;

// print number_format($cal, 6, '.', '');

?>