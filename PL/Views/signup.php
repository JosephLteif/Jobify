<?php
include ('../../BLL/userManager.php');
if (isset($_POST['SubmitButton'])) {
    $lastname=$_POST['lname'];
    $firstname=$_POST['fname'];
    $email=$_POST['email'];
    $password=$_POST['pass'];
    $hash = password_hash($password,PASSWORD_DEFAULT);

    // $username=$_POST['username'];
    // $username=stripslashes($username);
    // $username=mysqli_real_escape_string($username);
}

function ValidateSignup ($password, $email, $firstname, $lastname) {
    if ($lastname == null || $lastname == '' || $firstname == null || $firstname == ''
        || $email == null || $email == '' || $password == null || $password == '' || strlen($password) <= 4
        || (!preg_match("#[0-9]+#", $password)) || (!preg_match("#[A-Z]+#", $password))
        || (!preg_match("#[a-z]+#", $password))) {
        return false;
    }
    else return true;
}

if (!ValidateSignup($hash, $email, $firstname, $lastname)) {
    echo "<script type='text/javascript'>
                alert('Please check entered values')
          </script>";
}
else {
    $result=SignUp($hash, $email, $firstname, $lastname);
    if ($result) {
        echo "<script type='text/javascript'>
                alert('User added successfully')
                window.location.replace('login.php')
          </script>";
    }
    else {
        echo "<script language='JavaScript'>
                alert('User already in use. Please choose another one')
                window.location.replace('signup-form.php')
          </script>";
    }
}