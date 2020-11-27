<?php
include('../../BLL/userManager.php');

$password = $_POST['pass'];
$tokentaken = $_POST['token'];



function Validationform($password)
{
    if ($password == null || $password == '') {
        return false;
    } else return true;
}

if (Validationform($password)) {
    if (newpassword($tokentaken, $password)) {
        echo "INNNNNNN";
        return true;
    } else {
        echo "<script language='JavaScript'>
        alert('An error occured')</script>";
        return false;
    }
} else {
    echo "<script language='JavaScript'>
    alert('An error occured')</script>";
    return false;
}
