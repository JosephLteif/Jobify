<?php
include('connection.php');
include('Email.php');

function CheckUserExist($firstname)
{
    $conn = OpenCon();
    $sql = "SELECT * FROM user WHERE firstName='.$firstname';";
    $result = mysqli_query($conn, $sql);
    CloseConn($conn);
    return $result;
}

function CheckAccountExist($email)
{
    $conn = OpenCon();
    $sql = "SELECT * FROM user WHERE email='.$email';";
    $result = mysqli_query($conn, $sql);
    CloseConn($conn);
    return $result;
}

function InsertUser($password, $email, $firstname, $lastname)
{
    $conn = OpenCon();

    $sql = "INSERT INTO password_reset (email)
    VALUES ('$email')";

    mysqli_query($conn, $sql);

    $sql = "INSERT INTO user (firstName, lastName, email, password)
          VALUES ('$firstname', '$lastname', '$email', '$password')";


    if (mysqli_query($conn, $sql)) {
        SendEmail($firstname, $email, 1, null);
        http_response_code(200);
    } else {
        http_response_code(405);
    }
    CloseConn($conn);
}

function LoginUser($password, $email)
{
    $conn = OpenCon();

    $query = "SELECT * FROM user WHERE email='$email' AND password='$password' LIMIT 1";
    $results = mysqli_query($conn, $query);

    if (mysqli_num_rows($results) == 1) { // user found
        // check if user is admin or user
        $logged_in_user = mysqli_fetch_assoc($results);
        // if ($logged_in_user['user_type'] == 'admin') {

        //     $_SESSION['user'] = $logged_in_user;
        //     $_SESSION['success']  = "You are now logged in";
        //     header('location: admin/home.php');		  
        // }else{
        $_SESSION['user'] = $logged_in_user;
        $_SESSION['success']  = "You are now logged in";
        // }
        CloseConn($conn);
        return true;
    } else {
        CloseConn($conn);
        return false;
    }
}

function addusertoken($email, $token)
{
    $conn = OpenCon();

    $sql = "UPDATE password_reset set token = '$token' where email = '$email'";

    if (mysqli_query($conn, $sql)) {
        http_response_code(200);
    } else {
        http_response_code(405);
    }
}

function resetpass($token, $password)
{
    $conn = OpenCon();

    // ensure that the user exists on our system
    $query = "UPDATE user set password = '$password' where email = (select email from password_reset where token = '$token')";

    if (mysqli_query($conn, $query)) {
        return true;
    } else {
        return false;
    }
}

function getFirstName($email)
{
    $conn = OpenCon();

    $query = "SELECT firstName FROM user WHERE email='$email'";
    $results = mysqli_query($conn, $query);

    if (mysqli_num_rows($results) == 1) { // user found
        // check if user is admin or user
        $logged_in_user = mysqli_fetch_assoc($results);

        CloseConn($conn);
        return $logged_in_user[1];
    } else {
        CloseConn($conn);
        return null;
    }
}
