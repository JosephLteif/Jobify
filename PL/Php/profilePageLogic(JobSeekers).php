<?php
include('../../BLL/userManager.php');

if ($_POST['test'] == 'Seeker') {
    echo GetUsers();
} else if ($_POST['test'] == 'Job') {
    echo GetJobs();
}
