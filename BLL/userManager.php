<?php
include('../../DAL/userRepo.php');

function SignUp($password, $email, $firstname, $lastname)
{
    if (!CheckAccountExist($email)) {
        InsertUser($password, $email, $firstname, $lastname);
        SendEmail(getFirstName($email), $email, 1, null);
        return true;
    } else return false;
}

function Login($email, $password)
{
    if (CheckAccountExist($email)) {
        return LoginUser($password, $email);
    } else {
        return false;
    }
}

function passresetvalidate($email)
{
    if (CheckAccountExist($email)) {
        $token = bin2hex(random_bytes(50));
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

function GetUsers(){
    return GetAllUsers();
}

function GetJobs(){
    return GetAllJobs();
}
