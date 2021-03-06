<?php
include('connection.php');
include('Email.php');

function CheckUserExist($firstname)
{
    $conn = OpenCon();
    $sql = "SELECT * FROM user WHERE firstName='.$firstname';";
    $result = mysqli_query($conn, $sql);
    CloseConn($conn);
    if (mysqli_num_rows($result) > 0)
        return true;
    return false;
}

function CheckAccountExist($email)
{
    $conn = OpenCon();
    $sql = "SELECT * FROM user WHERE email=LOWER('$email');";
    $result = mysqli_query($conn, $sql);
    CloseConn($conn);
    if (mysqli_num_rows($result) > 0) {
        return true;
    }
    return false;
}

function CheckAdminExist($username)
{
    $conn = OpenCon();
    $sql = "SELECT * FROM admin WHERE Username=LOWER('$username');";
    $result = mysqli_query($conn, $sql);
    CloseConn($conn);
    if (mysqli_num_rows($result) > 0) {
        return true;
    }
    return false;
}

function InsertUser($password, $email, $firstname, $lastname)
{
    $conn = OpenCon();

    $sql = "INSERT INTO password_reset (email)
    VALUES (LOWER('$email'))";

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

function LoginAdmin($password, $username)
{
    $conn = OpenCon();

    $query = "SELECT * FROM admin WHERE Username= LOWER('$username') AND HashedPassword = (select SHA('$password')) Limit 1";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) { // user found
        $logged_in_user = mysqli_fetch_assoc($result);
        $_SESSION['Username'] = $logged_in_user['Username'];
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
    if (mysqli_query($conn, $query)) {
        $test1 = true;
    }

    $query = "UPDATE password_reset set token = null where token = '$token'";
    if (mysqli_query($conn, $query)) {
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

    $query = "SELECT firstName FROM user WHERE email=LOWER('$email') Limit 1";
    $results = $conn->query($query);

    if ($results) { // user found
        // check if user is admin or user
        $logged_in_user = mysqli_fetch_assoc($results);

        CloseConn($conn);
        return $logged_in_user['firstName'];
    } else {
        CloseConn($conn);
        return null;
    }
}

function GetAllUsers()
{
    $conn = OpenCon();

    $query = "SELECT userID, firstName, lastName, email, (select count(user_userID) from user_follow_user where user_userID = userID), (select count(user_userID1) from user_follow_user where user_userID1 = userID)  FROM user;";
    $results = mysqli_query($conn, $query);
    if (mysqli_num_rows($results) > 0) { // user found
        $All_Users_Data = mysqli_fetch_all($results);
        CloseConn($conn);
        return json_encode($All_Users_Data);
    } else {
        CloseConn($conn);
        return null;
    }
}

function GetUserByIDRepo($ID)
{
    $conn = OpenCon();

    $query = "SELECT userID, firstName, lastName, email, (select count(user_userID) from user_follow_user where user_userID = userID), (select count(user_userID1) from user_follow_user where user_userID1 = userID)  FROM user where userID = $ID;";
    $results = mysqli_query($conn, $query);
    if (mysqli_num_rows($results) > 0) { // user found
        $All_Users_Data = mysqli_fetch_all($results);
        CloseConn($conn);
        return json_encode($All_Users_Data);
    } else {
        CloseConn($conn);
        return null;
    }
}

function DeleteUserByIDRepo($ID)
{
    $conn = OpenCon();

    $query = "delete from password_reset where email = (select email from user where userID = '$ID');";
    mysqli_query($conn, $query);
    $query = "delete from user_follow_user where user_userID = '$ID' or user_userID1 = '$ID'";
    mysqli_query($conn, $query);
    $query = "delete from job_offer_has_user where user_userID = '$ID';";
    mysqli_query($conn, $query);
    $query = "Delete FROM user where userID = '$ID';";
    if (mysqli_query($conn, $query)) { // user found
        return true;
    } else {
        CloseConn($conn);
        return false;
    }
}

function GetSeekerChartData()
{
    try {
        $items = array();
        $link = new\ PDO( 'mysql:host=localhost;dbname= jobify;charset=utf8mb4',
          'root',
          '',
          array( \PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, \PDO::ATTR_PERSISTENT => false )
        );
      
        $handle = $link->prepare( 'select count(user_userID) as applications, user.userID as ID from user inner join job_offer_has_user on userID = job_offer_has_user.user_userID group by user_userID ;' );
        $handle->execute();
        $result = $handle->fetchAll( \PDO::FETCH_OBJ );
      
        foreach ( $result as $row ) {
          array_push( $items, array( "x" => $row->ID, "y" => $row->applications ) );
        }
        $link = null;
      } catch ( \PDOException $ex ) {
        print( $ex->getMessage() );
      }
      
      echo json_encode( $items, JSON_NUMERIC_CHECK );
}
