<?php
if (session_id() == '' || !isset($_SESSION)) {
    session_start();
}

//Check whether the session variable email is present or not
if (!isset($_SESSION['username'])) {
    echo false;
}else {
    echo true;
}


