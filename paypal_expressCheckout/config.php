<?php
//start session in all pages
if (session_status() == PHP_SESSION_NONE) { session_start(); } //PHP >= 5.4.0
//if(session_id() == '') { session_start(); } //uncomment this line if PHP < 5.4.0 and comment out line above

$PayPalMode 			= 'sandbox'; // sandbox or live
$PayPalApiUsername 		= 'paypal_merchant_api1.matloughnane.com'; //PayPal API Username
$PayPalApiPassword 		= 'NFDERDGE746GR7QQ'; //Paypal API password
$PayPalApiSignature 	= 'A-Ut1k3kGIzm.jW6k8ecgsNOOClRAgcsOSPn0oJtxrgN.dyVNtsDbe12'; //Paypal API Signature
$PayPalCurrencyCode 	= 'EUR'; //Paypal Currency Code
$PayPalReturnURL 		= 'http://178.62.3.21/paypal/process.php'; //Point to process.php page
$PayPalCancelURL 		= 'http://178.62.3.21/paypal/cancel_url.php'; //Cancel URL if user clicks cancel
?>