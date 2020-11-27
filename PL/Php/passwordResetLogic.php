<?php

session_start();

include('../../BLL/userManager.php');

    $email = $_POST['email'];


// make sure form is filled properly
function Validateform($email)
{
    if ($email == null || $email == '') {
        return false;
    } else return true;
}

if (Validateform($email)) {
    if (passresetvalidate($email)) {
        return true;
    } else {
        return false;
    }
}
