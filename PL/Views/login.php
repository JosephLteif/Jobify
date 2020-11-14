<?php
include('../../BLL/userManager.php');
include('../../DAL/Encryption.php');

if (isset($_POST['SubmitButton'])) {
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $hash = encrypt($password);
}

// make sure form is filled properly
function Validateform($password, $email)
{
    if ($email == null || $email == '' || $password == null || $password == '') {
        return false;
    } else return true;
}

// attempt login if no errors on form
if (Validateform($password, $email)) {
    if (Login($email, $hash)) {
        echo "<script type='text/javascript'>
                alert('Login Done!')
              </script>";
    } else {
        echo "<script language='JavaScript'>
                alert('User not found!')
              </script>";
    }
} else {
    echo "<script language='JavaScript'>
                alert('Please check entered values')
              </script>";
}
