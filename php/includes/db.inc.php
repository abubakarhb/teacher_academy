
<?php
    $hostname_eva = "localhost";
    $database_eva = "teacher-academy";
    $username_eva = "root";
    $password_eva = "";
    $tap = mysqli_connect($hostname_eva, $username_eva, $password_eva, $database_eva) or trigger_error(mysqli_error($tap),E_USER_ERROR);
?>