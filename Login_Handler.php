<?php

    $Email = $_POST["Email"];
    $Password = $_POST["Password"];

    include "Config.php";

    $login = "SELECT Email, Password FROM registration WHERE Email = '$Email' and Password = '$Password'";

    $result = mysqli_query($con,$login); 
    $count = mysqli_num_rows($result);

        if($count == 1)
        {
            session_start();
            $_SESSION["loggedUser"] = $Email;  //fe mail 3amel logged in saved in loggedUser
            header("Location: http://localhost/Project/index.html");
            echo "Welcome";
            exit();
        }
        else 
        {
            header("Location: http://localhost/Project/AccountFailed.html");
            exit();
        }

?>