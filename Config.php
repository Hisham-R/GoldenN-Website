<?php
    //Database Connection/Config    
$con = mysqli_connect("localhost","root","") or die ("Error! Couldn't Connect to Server.");
$db = mysqli_select_db($con, "goldenn") or die ("Error! Couldn't Connect to Database.");
?>