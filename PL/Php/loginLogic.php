<?php
include('../../BLL/userManager.php');

$username = $_POST['username'];
$password = $_POST['pass'];

// make sure form is filled properly
function Validateform($password, $username)
{
    if ($username == null || $username == '' || $password == null || $password == '') {
        return false;
    } else return true;
}

// attempt login if no errors on form
if (Validateform($password, $username)) {
    if (Login($username, $password)) {
        session_start();
        $_SESSION['username'] = $username;
        echo true;
    } else {
        echo false;
    }
} else {
    echo false;
}
