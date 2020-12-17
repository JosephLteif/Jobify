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

function GetOfferChartData()
{
    try {
        $itemsarr = array();
        $link = new\ PDO( 'mysql:host=localhost;dbname= jobify;charset=utf8mb4',
          'root',
          '',
          array( \PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, \PDO::ATTR_PERSISTENT => false )
        );
      
        $handle = $link->prepare( 'select count(user_userID) as applications, job_offer.jobOffer_ID as ID from job_offer inner join job_offer_has_user on jobOffer_ID = job_offer_has_user.job_offer_jobOffer_ID group by job_offer_has_user.job_offer_jobOffer_ID ;' );
        $handle->execute();
        $result = $handle->fetchAll( \PDO::FETCH_OBJ );
      
        foreach ( $result as $row ) {
          array_push( $itemsarr, array( "x" => $row->ID, "y" => $row->applications ) );
        }
        $link = null;
      } catch ( \PDOException $ex ) {
        print( $ex->getMessage() );
      }
      
      echo json_encode( $itemsarr, JSON_NUMERIC_CHECK );
}
