<?php

function OpenCon () {
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="mysql";
    $db="pwdb";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connection failed: %s\n".$conn->error);

    return $conn;
}

function CloseConn ($conn) {
    $conn->close;
}