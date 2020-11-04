<?php
include ('/PL/Views/userManager.php');
if (isset($_POST['SubmitButton'])) {
    $lastname=$_POST['lname'];
    $firstname=$_POST['fname'];
    $email=$_POST['email'];
    $gender=$_POST['gender'];
    $password=$_POST['password'];
    $country=$_POST['country'];

    $username=$_POST['username'];
    $username=stripslashes($username);
    $username=mysqli_real_escape_string($username);
}

function ValidateSignup ($username, $password, $email, $firstname, $lastname) {
    if ($username == null || $username == '' || $lastname == null || $lastname == '' || $firstname == null || $firstname == ''
        || $email == null || $email == '' || $password == null || $password == '' || strlen($password) <= 4
        || (!preg_match("#[0-9]+#", $password)) || (!preg_match("#[A-Z]+#", $password))
        || (!preg_match("#[a-z]+#", $password))) {
        return false;
    }
    else return true;
}

if (!ValidateSignup($username, $password, $email, $firstname, $lastname)) {
    echo "<script type='text/javascript'>
                alert('Please check entered values')
          </script>";
}
else {
    $result=SignUp($username, $password, $email, $firstname, $lastname, $gender, $country);
    if ($result) {
        echo "<script type='text/javascript'>
                alert('User added successfully')
                window.location.replace('dashboard.php')
          </script>";
    }
    else {
        echo "<script language='JavaScript'>
                alert('User already in use. Please choose another one')
                window.location.replace('signup-form.php')
          </script>";
    }
}