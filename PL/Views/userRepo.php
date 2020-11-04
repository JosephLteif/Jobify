<?php
include ('connection.php');

function CheckUserExist ($username) {
    $conn=OpenCon();
    $sql="SELECT * FROM users WHERE uUsername='.$username';";
    $result=mysqli_query($conn, $sql);
    CloseConn($conn);
    return $result;
}

function InsertUser ($username, $password, $email, $firstname, $lastname, $gender, $country) {
    $conn=OpenCon();
    $sql="INSERT INTO users (uUsername, uFname, uLname, uemail, uPassword, uGender, countryId)
          VALUES ('.$username', '.$firstname', '.$lastname', '.$email', '.$password', '.$gender', '.$country')";
    if (mysqli_query($conn, $sql)) {
        http_response_code(200);
    }
    else {
        http_response_code(405);
    }
    CloseConn($conn);
}