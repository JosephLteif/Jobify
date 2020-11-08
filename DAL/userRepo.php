<?php
include ('connection.php');

function CheckUserExist ($username) {
    $conn=OpenCon();
    $sql="SELECT * FROM user WHERE firstname='.$firstname';";
    $result=mysqli_query($conn, $sql);
    CloseConn($conn);
    return $result;
}

function InsertUser ($password, $email, $firstname, $lastname) {
    $conn=OpenCon();
    $sql="INSERT INTO user (firstName, lastName, email, password)
          VALUES ('$firstname', '$lastname', '$email', '$password')";
    if (mysqli_query($conn, $sql)) {
        http_response_code(200);
    }
    else {
        http_response_code(405);
    }
    CloseConn($conn);
}