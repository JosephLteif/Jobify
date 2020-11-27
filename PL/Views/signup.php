<?php
include('../../BLL/userManager.php');
include('../../DAL/Encryption.php');

if (isset($_POST['SubmitButton'])) {
    $lastname = $_POST['lname'];
    $firstname = $_POST['fname'];
    $email = $_POST['email'];
    $password = $_POST['pass'];
}

function ValidateSignup($password, $email, $firstname, $lastname)
{
    if (
        $lastname == null || $lastname == '' || $firstname == null || $firstname == ''
        || $email == null || $email == '' || $password == null || $password == '' || strlen($password) <= 4
        || (!preg_match("#[0-9]+#", $password)) || (!preg_match("#[A-Z]+#", $password))
        || (!preg_match("#[a-z]+#", $password))
    ) {
        return false;
    } else return true;
}

if (!ValidateSignup($password, $email, $firstname, $lastname)) {
    echo "<script type='text/javascript'>
                alert('Please check entered values')
          </script>";
} else {
    $result = SignUp($password, $email, $firstname, $lastname);
    if ($result) {
        echo "<script type='text/javascript'>
                window.location.replace('login.html')
          </script>";
    } else {
        echo "<script language='JavaScript'>
                alert('User already in use. Please choose another one')
                window.location.replace('signup-form.php')
          </script>";
    }
}
