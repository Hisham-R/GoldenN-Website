<?php
  if(isset($_POST["submit"]))
  {
    $Name = $_POST["name"];
    $Email = $_POST["email"];
    $Phone = $_POST["phone"];
    $Message = $_POST["message"];

    //Database Connection
    $conn = new mysqli('localhost', 'root', '', 'goldenn');
    if($conn -> connect_error)
    {
        die('Connection Faild : '.$conn->connect_error); //die law awy mashkel 7aslt fel server
        header("Location: http://localhost/Project/Failed.html");
        exit();
    }
    else
    {
        $stmt = $conn->prepare("insert into contactus(FullName, Email, Phone, Message) values(?,?,?,?)");
        $stmt ->bind_param("ssis", $Name, $Email, $Phone, $Message);
        $stmt ->execute();
        include( 'Confirmation.html' );
        header("Location: http://localhost/Project/Confirmation.html");
        exit();
        $stmt ->close();
        $conn-> close();
    }
  }
?>