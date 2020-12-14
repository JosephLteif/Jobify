<?php
include('../../BLL/userManager.php');

if (isset($_POST['value'])) {
    $value = $_POST['value'];
    if ($_POST['test'] == 'View') { 
        echo GetUserByID($value);
    } else if ($_POST['test'] == 'Delete') {
        echo DeleteUserByID($value);
    }
}

if (isset($_POST['test'])) {
    if ($_POST['test'] == 'Seeker') {
        echo GetUsers();
    } else if ($_POST['test'] == 'Job') {
        echo GetJobs();
    }
}
