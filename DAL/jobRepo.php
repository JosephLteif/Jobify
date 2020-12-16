<?php

function GetAllJobs()
{
    $conn = OpenCon();

    $query = "SELECT jobOffer_ID, Title, ID_COMPANY, JOBDESCRIPTION, CREATION_DATE, (select count(job_offer_jobOffer_ID) from job_offer_has_user where job_offer_jobOffer_ID = jobOffer_ID) FROM job_offer;";
    $results = mysqli_query($conn, $query);
    if (mysqli_num_rows($results) > 0) { // user found
        $All_Jobs_Data = mysqli_fetch_all($results);
        CloseConn($conn);
        return json_encode($All_Jobs_Data);
    } else {
        CloseConn($conn);
        return null;
    }
}

function GetJobByIDRepo($ID){
    $conn = OpenCon();

    $query = "SELECT jobOffer_ID, Title, ID_COMPANY, JOBDESCRIPTION, CREATION_DATE, (select count(job_offer_jobOffer_ID) from job_offer_has_user where job_offer_jobOffer_ID = $ID) FROM job_offer;";
    $results = mysqli_query($conn, $query);
    if (mysqli_num_rows($results) > 0) { // user found
        $All_Jobs_Data = mysqli_fetch_all($results);
        CloseConn($conn);
        return json_encode($All_Jobs_Data);
    } else {
        CloseConn($conn);
        return null;
    }
}

function DeleteJobByIDRepo($ID){
    $conn = OpenCon();

    $query = "delete from job_offer_has_user where job_offer_jobOffer_ID = '$ID';";
    if(mysqli_query($conn, $query)){
        echo "step 0"; 
    }

    $query = "delete from job_offer where jobOffer_ID = '$ID';";
    if (mysqli_query($conn, $query)) { // user found
        return true;
    } else {
        CloseConn($conn);
        return false;
    }
}
