<?php
include ('/PL/Views/userRepo.php');

function SignUp ($username, $password, $email, $firstname, $lastname, $gender, $country) {
    $result=CheckUserExist($username);
    $row=mysqli_fetch_assoc($result);
    if ($row < 1) {
        InsertUser($username, $password, $email, $firstname, $lastname, $gender, $country);
        return true;
    }
    else return false;
}