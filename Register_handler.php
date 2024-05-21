<?php

    $Name = $_POST["FullName"];
    $Email = $_POST["Email"];
    $Password = $_POST["Password"];
    $PhoneNum = $_POST["PhoneNum"];

    include "Config.php";

    $insertUser = "INSERT INTO registration(FullName, Email, Password, Phone)
    values('$Name', '$Email', '$Password', '$PhoneNum')";

    $result = mysqli_query($con,$insertUser); 
    if($result) //if connection succ
    {
        header("Location: http://localhost/Project/AccountConfirmed.html");
        exit();
    }
    else 
    {
        header("Location: http://localhost/Project/AccountFailed.html");
        exit();
    }

?>