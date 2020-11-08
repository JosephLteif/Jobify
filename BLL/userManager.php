<?php
include ('../../DAL/userRepo.php');

function SignUp ($password, $email, $firstname, $lastname) {
    $result=CheckUserExist($firstname);
    $row=mysqli_fetch_assoc($result);
    if ($row < 1) {
        InsertUser($password, $email, $firstname, $lastname);
        return true;
    }
    else return false;
}