<?php

function OpenCon () {
    $dbhost="sql7.freemysqlhosting.net:3306";
    $dbuser="sql7375263";
    $dbpass="Tsg9h7CIPh";
    $db="sql7375263";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connection failed: %s\n".$conn->error);

    return $conn;
}

function CloseConn ($conn) {
    $conn->close();
}
?>