<?php
include('../../DAL/userRepo.php');
include('../../DAL/jobRepo.php');

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

function GetUserByID($ID){
    return GetUserByIDRepo($ID);
}

function DeleteUserByID($ID){
    return DeleteUserByIDRepo($ID);
}

function GetJobs(){
    return GetAllJobs();
}

function GetJobByID($ID){
    return GetJobByIDRepo($ID);
}

function DeleteJobByID($ID){
    return DeleteJobByIDRepo($ID);
}

function VerifyEmail($email)
{
    return CheckAccountExist($email);
}

function GetUserChartData()
{
    return GetSeekerChartData();
}

function GetJobChartData()
{
    return GetOfferChartData();
}
