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

function Login($username, $password)
{
    if (CheckAdminExist($username)) {
        return LoginAdmin($password, $username);
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

function GetUserByID($ID){
    return GetUserByIDRepo($ID);
}

function DeleteUserByID($ID){
    return DeleteUserByIDRepo($ID);
}
