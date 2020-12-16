<?php
include('../../BLL/userManager.php');

$email = $_POST['email'];


function ValidateEmail($email)
{
    if ($email == null || $email == '') {
        return false;
    } else return true;
}

if (!ValidateEmail($email)) {
    echo false;
} else {
    $result = VerifyEmail($email);
    if ($result) {
        echo true;
    } else {
        echo false;
    }
}
