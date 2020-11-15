<?php 

session_start();

include('../../BLL/userManager.php');

if(isset($_POST['SubmitButton'])){
    $email = $_POST['email'];
}

// make sure form is filled properly
function Validateform($email)
{
    if ($email == null || $email == '') {
        return false;
    } else return true;
}

if(Validateform($email)){
    if(passresetvalidate($email)){
        echo "<script language='JavaScript'>
                window.locate.replace('new_password.html')
            </script>";
    } else {
        echo "<script language='JavaScript'>
        alert('invalid email!')
    </script>";
    }
}