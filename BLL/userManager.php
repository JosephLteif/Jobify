<?php
include('../../DAL/userRepo.php');

function SignUp($password, $email, $firstname, $lastname)
{
    $result = CheckUserExist($firstname);
    $row = mysqli_fetch_assoc($result);
    if ($row < 1) {
        InsertUser($password, $email, $firstname, $lastname);
        return true;
    } else return false;
}

function Login($email, $password)
{
    $result = CheckAccountExist($email);
    $row = mysqli_fetch_assoc($result);
    if ($row < 1) {
        return LoginUser($password, $email);
    } else {
        return false;
    }
}

function passresetvalidate($email)
{
    $result = CheckAccountExist($email);
    $row = mysqli_fetch_assoc($result);
    if ($row < 1) {
        $token = bin2hex(random_bytes(50));
        $_SESSION['token'] = $token;
        SendEmail(getFirstName($email), $email, 2, $token);
        addusertoken($email, $token);
        return true;
    } else {
        return false;
    }
}

function newpassword($token, $password)
{
    return resetpass($token, $password);
}
