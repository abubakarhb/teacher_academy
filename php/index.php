<?php 

// declare(strict_types = 1);
header('Content-type:application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    include 'sort.php';
    if (isset($_GET['login'])) {
        $user = $_GET['user'];
        $pass = $_GET['pass'];
        login($user,$pass);
    }elseif (isset($_GET['fetchPK'])) {
        packageSubscribe();
    }elseif (isset($_GET['fetchLessons'])) {
        $course = $_GET['course'];
        $pk = $_GET['pk'];
        packageLesson($pk, $course);
    }elseif (isset($_GET['fetchLessonsLink'])) {
        $row = $_GET['lesson_id'];
        packageLessonLink($row);
    }elseif (isset($_GET['triggerQA'])) {
        $row = $_GET['getQA'];
        getQA($row);
    }elseif (isset($_GET['triggerReg'])) {
        $row = $_GET;
        // print_r($row);
        regA($row);
    }elseif (isset($_GET['triggerIDE'])) {
        $row = $_GET;
        regA($row);
    }
  } 