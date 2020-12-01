<?php
include('../../BLL/userManager.php');

$email = $_POST['email'];
$password = $_POST['pass'];

// make sure form is filled properly
function Validateform($password, $email)
{
    if ($email == null || $email == '' || $password == null || $password == '') {
        return false;
    } else return true;
}

// attempt login if no errors on form
if (Validateform($password, $email)) {
    if (Login($email, $password)) {
        session_start();
        $_SESSION['email'] = $email;
        echo true;
    } else {
        echo false;
    }
} else {
    echo false;
}
