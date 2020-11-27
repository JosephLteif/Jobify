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
    $sql = "SELECT * FROM user WHERE email=LOWER('$email');";
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
          VALUES ('$firstname', '$lastname', LOWER('$email'), SHA('$password'))";


    if (mysqli_query($conn, $sql)) {
        SendEmail($firstname, $email, 1, null);
        CloseConn($conn);
        http_response_code(200);
    } else {
        CloseConn($conn);
        http_response_code(405);
    }
   
}

function LoginUser($password, $email)
{
    $conn = OpenCon();

    $query = "SELECT * FROM user WHERE email= LOWER('$email') AND password=SHA('$password')";
    $results = mysqli_query($conn, $query);

    if (mysqli_num_rows($results) == 1) { // user found
        $logged_in_user = mysqli_fetch_assoc($results);
        $_SESSION['ID'] = $logged_in_user['userID'];
        $_SESSION['success']  = "You are now logged in";
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

    $sql = "UPDATE password_reset set token = '$token' where email = LOWER('$email')";

    if (mysqli_query($conn, $sql)) {
        CloseConn($conn);
        http_response_code(200);
    } else {
        CloseConn($conn);
        http_response_code(405);
    }
}

function resetpass($token, $password)
{
    $conn = OpenCon();

    $test1 = false;
    $test2 = false;

    $query = "UPDATE user set password = SHA('$password') where email = (select email from password_reset where token = '$token')";
    if(mysqli_query($conn, $query)){
        $test1 = true;
    }

    $query = "UPDATE password_reset set token = null where token = '$token'";
    if(mysqli_query($conn, $query)){
        $test2 = true;
    }

    if ($test1 && $test2) {
        CloseConn($conn);
        return true;
    } else {
        CloseConn($conn);
        return false;
    }
}

function getFirstName($email)
{
    $conn = OpenCon();

    $query = "SELECT firstName FROM user WHERE email=LOWER('$email')";
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
