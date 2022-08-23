<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ci";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$question_id=$_GET['question_id'];
$question_description=$_GET['question_description'];
$question_choice_1=$_GET['question_choice_1'];
$question_choice_2=$_GET['question_choice_2'];
$question_choice_3=$_GET['question_choice_3'];
$question_choice_4=$_GET['question_choice_4'];
$user_response=$_GET['user_response'];



$sql="insert into into abc values('$question_id','$question_description','$question_choice_1','$question_choice_2','$question_choice_3','$question_choice_4','$user_response')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  
    $conn->close();
?>