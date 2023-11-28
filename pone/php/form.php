<?php
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$gender=$_POST['gender'];
$birthday=$_POST['birthday'];
$comment=$_POST['comment'];
?>
<div id="bigmain">
    <span class="subtitle">Message Sent!</span>
    <?php
$to = "imunsung@gmail.com";
$subject = "Message from Prototype One Website";

$message = "Name: $fname $lname <br>Gender: $gender<br>Birthday: $birthday<br>E-mail : $email <br>Comment : $comment";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: <webmaster@prototypeone.com>' . "\r\n";
$success= mail($to,$subject,$message,$headers);
if (!$success) {
    $errorMessage = error_get_last()['message'];
}
    echo"<br><br>The following content was sent:<br> <strong>Name :</strong> $fname $lname <br><strong>Gender :</strong> $gender<br><strong>E-mail :</strong> $email <br><strong>Birthday :</strong> $birthday <br><strong>Comment :</strong> $comment";
