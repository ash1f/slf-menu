<?php

    $servername = "182.50.133.80:3306";
    $username = "coporate_user";
    $password = "quar7e7N";
    $dbname = "coporate_website";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO contact (name, email, phone, company, message)
    VALUES ('".$_POST['name']."', '".$_POST['email']."', '".$_POST['phone']."', '".$_POST['company']."', '".addslashes($_POST['message'])."')";
    if ($conn->query($sql) === TRUE) {
    } else {
    }
    $conn->close();

    $To = 'pasindu@digibrush.net, fazaal@digibrush.net, connectwithus@softfreightlogic.com';
    $From = 'no-reply@softfreightlogic.com';
    $Subject = 'You Have Recieved A Website Query';
    $from_name ="SFL";


    $message = file_get_contents("email.html");  
    $message = str_replace("{{ name }}",$_POST['name'],$message);
    $message = str_replace("{{ email }}",$_POST['email'],$message);
    $message = str_replace("{{ phone }}",$_POST['phone'],$message);
    $message = str_replace("{{ company }}",$_POST['company'],$message);
    $message = str_replace("{{ message }}",$_POST['message'],$message);


    $Headers = "MIME-Version: 1.0" . "\r\n";  
    $Headers .= "Organization: SFL\r\n";
    $Headers .= "X-Mailer: PHP/" .phpversion(). "\r\n";
    $Headers .= "Content-type:text/html; charset=iso-8859-1" . "\r\n";
    $Headers .= "Content-Transfer-Encoding: 7bit" . "\r\n";
    $Headers .= "X-Priority: 3\r\n";
    $Headers .= "Reply-To: {$from_name}<no-reply@softfreightlogic.com>";
    $Headers .= "Return-Path: {$from_name}<no-reply@softfreightlogic.com>";
    $Headers .= "From: {$from_name}<no-reply@softfreightlogic.com>";

    $mailResp = mail($To, $Subject, $message, $Headers); 

    $array = array(
        'status' => true,
    );
    echo json_encode($array);

?>
