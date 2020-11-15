<?php
include('../../BLL/userManager.php');
include('../../DAL/Encryption.php');

if (isset($_POST['SubmitButton'])) {
    $password = $_POST['pass'];
    $hash = encrypt($password);
    $tokentaken = $_POST['token'];
}


function Validationform($password)
{
    if ($password == null || $password == '') {
        return false;
    } else return true;
}

if (Validationform($password)) {
    if (newpassword($tokentaken, $hash)) {
        echo "<script type='text/javascript'>
        window.location.replace('login.html')
  </script>";
    } else {
        echo "<script language='JavaScript'>
        alert('An error occured')
        window.location.replace('password_reset.html')</script>";
    }
} else {
    echo "<script language='JavaScript'>
    alert('An error occured')
    window.location.replace('password_reset.html')</script>";
}
