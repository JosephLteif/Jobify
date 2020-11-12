<?php

function encrypt($text, $key = "tHeApAcHe6410111"){
     $block = mcrypt_get_block_size('rijndael_128', 'ecb');
     $pad = $block - (strlen($text) % $block);
     $text .= str_repeat(chr($pad), $pad);
     return base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $text, MCRYPT_MODE_ECB));
}

function decrypt($str, $key = "tHeApAcHe6410111"){ 
     $str = base64_decode($str);
     $str = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $str, MCRYPT_MODE_ECB);
     $block = mcrypt_get_block_size('rijndael_128', 'ecb');
     $pad = ord($str[($len = strlen($str)) - 1]);
     $len = strlen($str);
     $pad = ord($str[$len-1]);
     return substr($str, 0, strlen($str) - $pad);
}
?>