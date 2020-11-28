<?php
include('../../BLL/userManager.php');
include('../../DAL/Encryption.php');

    $lastname = $_POST['lastname'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $password = $_POST['pass'];


function ValidateSignup($password, $email, $firstname, $lastname)
{
    if (
        $lastname == null || $lastname == '' || $firstname == null || $firstname == ''
        || $email == null || $email == '' || $password == null || $password == '' || strlen($password) <= 4
        || (!preg_match("#[0-9]+#", $password)) || (!preg_match("#[A-Z]+#", $password))
    ) {
        return false;
    } else return true;
}

if (!ValidateSignup($password, $email, $firstname, $lastname)) {
    echo "HELLOOOOO";
    echo false;
} else {
    $result = SignUp($password, $email, $firstname, $lastname);
    if ($result) {
        echo true;
    } else {
        echo false;
    }
}
