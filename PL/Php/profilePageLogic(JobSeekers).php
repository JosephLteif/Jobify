<?php
include('../../BLL/userManager.php');

if (isset($_POST['value'])) {
    $value = $_POST['value'];
    if ($_POST['test'] == 'View') {
        echo GetUserByID($value);
    } else if ($_POST['test'] == 'Delete') {
        echo DeleteUserByID($value);
    } else if($_POST['test'] == 'View2'){
        echo GetJobByID($value);
    }else if($_POST['test'] == 'Delete2'){
        echo DeleteJobByID($value);
    }
}

if (isset($_POST['test'])) {
    if ($_POST['test'] == 'Seeker') {
        echo GetUsers();
    } else if ($_POST['test'] == 'Job') {
        echo GetJobs();
    } else if($_POST['test'] == 'UserChart'){
        echo GetUserChartData();
    } else if($_POST['test'] == 'JobChart'){
        echo GetJobChartData();
    }
}
