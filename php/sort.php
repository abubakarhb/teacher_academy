<?php
error_reporting(E_ALL);
ini_set("display_errors", 0);

// function clean_data(){

// }

/*
------------------------------------
------------------------------------
Register Function
------------------------------------
------------------------------------
*/
function checkDB()
{
}
function regA($all)
{
    // echo"<pre>";
    // echo json_encode($_GET);
    // print_r($_GET);
    //echo $admin_name;
    $fname = $_GET['fname'];
    $email = $_GET['email'];
    $password = $_GET['pwd'];
    $phone = $_GET['phone'];
    $loc = $_GET['loc'];
    $city = $_GET['city'];
    $org_id = $_GET['orgId'];
    $jobTitle = $_GET['jobTitle'];
    $jobPosition = $_GET['jobPosition'];
    $photo = $_GET['photo'];

    if (empty($fname) || empty($email) || empty($password) || empty($phone) || empty($loc) || empty($city) || empty($photo) || empty($jobPosition) || empty($jobTitle) || empty($org_id)) { #checking if params are empty
        $released_data = array("status"=>-1,"message"=>"Blank field");
        exit(json_encode($released_data));
    } else {
        include("includes/db.inc.php");
        // $dbs = ['admin','students'];
        $query_User_re_check_DB = sprintf("SELECT * FROM `students` WHERE  `email`='{$email}'");
        $User_re_check_DB = mysqli_query($tap, $query_User_re_check_DB) or die(mysqli_error($tap));
        $totalRows_User_re_check_BD = mysqli_num_rows($User_re_check_DB);
        if ($totalRows_User_re_check_BD >0) {
            $released_data = array("status"=>333,"message"=>"Your email is already available, please try forgot password or login with a valid credentials.");
                exit(json_encode($released_data));
        } else {
            $query_User_re1 = sprintf("INSERT INTO `students`(`fullname`, `email`, `password`, `phone`, `location`, `city`, `org`, `job_title`, `position`, `photo`) VALUES ('{$fname}','{$email}','{$password}','{$phone}','{$loc}','{$city}','{$org_id}','{$jobTitle}','{$jobPosition}','{$photo}')");
            // echo $query_User_re1;
            $User_re1 = mysqli_query($tap, $query_User_re1) or die(mysqli_error($tap));
            if ($User_re1) { #checking if row is available
                $released_data = array("status"=>1,"message"=>"Your credentials have been registered successfully!");
                exit(json_encode($released_data));
            } else { #No Data Available
                $released_data = array("status"=>0,"message"=>"Ran into some erroneous activities, please try again");
                exit(json_encode($released_data));
            }
        }
    }
}

/*
------------------------------------
------------------------------------
Login Script
------------------------------------
------------------------------------
*/
function login($admin_name, $admin_pass)
{
    // print_r($_GET);
    //echo $admin_name;

    if (empty($admin_name) || empty($admin_pass)) { #checking if params are empty
        $released_data = array("status"=>-1,"message"=>"Blank field");
        exit(json_encode($released_data));
    } else {
        //     echo "ch";
        include("includes/db.inc.php");
        // $dbs = ['admin','students'];
        $query_User_re = sprintf("SELECT * FROM `students` WHERE  `email`='{$admin_name}'");
        $User_re = mysqli_query($tap, $query_User_re) or die(mysqli_error($tap));
        if ($User_re) { #checking if connection is true
            $row_User_re = mysqli_fetch_assoc($User_re);
            $totalRows_User_re = mysqli_num_rows($User_re);
            if ($totalRows_User_re > 0) { #checking if row is available
                if (($row_User_re['email']== $admin_name) && ($row_User_re['password']== $admin_pass)) {
                    $released_data = array("status"=>1,"message"=>"Logged In","username"=>$row_User_re['email'],"fullname"=>$row_User_re['fullname'],"adminID"=>"TAP/ADMIN/".$row_User_re['id']);
                    exit(json_encode($released_data));
                } else { #Check password correctness
                    $released_data = array("status"=>2,"message"=>"Your credentials does not matches!");
                    exit(json_encode($released_data));
                }
            }
            } else { #No Data Available
                $released_data = array("status"=>0,"message"=>"Not a user, Please try to registered to help us authenticate you","username"=>$admin_name);
                exit(json_encode($released_data));
            }
        }
    }
}
/*
------------------------------------
------------------------------------
Login Script
------------------------------------
------------------------------------
*/
function packageSubscribe()
{
    include("includes/db.inc.php");
    $query_User_re = sprintf("SELECT * FROM `packages`");
    $User_re = mysqli_query($tap, $query_User_re) or die(mysqli_error($tap));
    $packageAll = [];
    if ($User_re) { #checking if connection is true
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        if ($totalRows_User_re > 0) { #checking if row is available
            $package_unit = [];
                
            do {
                $pk_id = $row_User_re['id'];
                $pk_title = $row_User_re['title'];
                    
                $query_User_re1 = sprintf("SELECT * FROM `courses` WHERE pk_id='{$pk_id}'");
                $User_re1 = mysqli_query($tap, $query_User_re1) or die(mysqli_error($tap));
                $row_User_re1 = mysqli_fetch_assoc($User_re1);
                $totalRows_User_re1 = mysqli_num_rows($User_re1);
                if ($totalRows_User_re1 > 0) { #checking if row is available
                    $courses = [];
                        
                    do {
                        // $row_User_re1['curriculum'] ="dd";
                        $course_unit = $row_User_re1['id'];
                            
                            
                        $query_User_re2 = sprintf("SELECT * FROM `curriculums` WHERE pk_id={$pk_id} AND course_id={$course_unit}");
                        $User_re2 = mysqli_query($tap, $query_User_re2) or die(mysqli_error($tap));
                        $row_User_re2 = mysqli_fetch_assoc($User_re2);
                        $totalRows_User_re2 = mysqli_num_rows($User_re2);
                        if ($totalRows_User_re2 > 0) { #checking if row is available
                            // print_r($row_User_re2);
                            $curriculum = [];
                            do {
                                unset($row_User_re2['id']);
                                unset($row_User_re2['course_id']);
                                unset($row_User_re2['pk_id']);
                                $curriculum []= $row_User_re2['title'];
                            } while ($row_User_re2 = mysqli_fetch_assoc($User_re2));
                            $row_User_re1['curriculum'] = $curriculum;
                        }
                        $courses[] = $row_User_re1;
                        // $row_User_re1['curriculum'] = $curriculum;
                            // print_r($curriculum);
                    } while ($row_User_re1 = mysqli_fetch_assoc($User_re1));
                }
                // $package_unit['price'] = 50000;
                // $package_unit[$pk_title] = $courses;
                $packageAll[] = array("description"=>$row_User_re['descr'],"billing"=>$row_User_re['billing'],"{$pk_title}"=>$courses);
            } while ($row_User_re = mysqli_fetch_assoc($User_re));

            // $packageAll[] = $package_unit;
            exit(json_encode($packageAll));
        } else { #No Data Available
            $released_data = array("status"=>0,"message"=>"No Packages available");
            exit(json_encode($released_data));
        }
    }
}

function packageLesson($fetch_pk, $course_fetch)
{
    include("includes/db.inc.php");
    $query_User_re = sprintf("SELECT * FROM `curriculums` WHERE course_id= {$course_fetch} AND pk_id={$fetch_pk}");
    $User_re = mysqli_query($tap, $query_User_re) or die(mysqli_error($tap));
    $query_User_re_courses = sprintf("SELECT * FROM `courses` WHERE id= {$course_fetch} AND pk_id={$fetch_pk}");
    $User_re_courses = mysqli_query($tap, $query_User_re_courses) or die(mysqli_error($tap));
    $row_User_re_courses = mysqli_fetch_assoc($User_re_courses);
    $select_pk = ["None","Explorer","Builder","Innovator"];
    $packageAll = [];
    $descr_course = ["package_id"=>$row_User_re_courses['pk_id'],"course_id"=>$row_User_re_courses['id'],"title"=>$row_User_re_courses['title'],"description"=>$row_User_re_courses['descr'],"package"=>"{$select_pk[$row_User_re_courses['pk_id']]}"];
    if ($User_re) { #checking if connection is true
        $row_User_re = mysqli_fetch_assoc($User_re);
        $totalRows_User_re = mysqli_num_rows($User_re);
        if ($totalRows_User_re > 0) { #checking if row is available
            $package_unit = [];
                 
            do {
                // echo $row_User_re['title'];
                $package_unit[] = $row_User_re;
                // $packageAll[] = array("Curriculum"=>$row_User_re['title'],"lessons"=>array());
            } while ($row_User_re = mysqli_fetch_assoc($User_re));
            $curriculum_count = count($package_unit);
            if ($curriculum_count>0) {
                $getTitle = [];
                $collected_curr = [];
                for ($i=0; $i < $curriculum_count; $i++) {
                    foreach ($package_unit[$i] as $key_curr => $value_curr) {
                        if ($key_curr == "title") {
                            $getTitle[] = $value_curr;
                        }
                        if ($key_curr == "id") {
                            $collected_curr_step1 = [];
                            $query_User_re2 = sprintf("SELECT * FROM `lessons` WHERE curriculm_id={$value_curr}");
                            $User_re2 = mysqli_query($tap, $query_User_re2) or die(mysqli_error($tap));
                            $row_User_re2 = mysqli_fetch_assoc($User_re2);
                            $totalRows_User_re2 = mysqli_num_rows($User_re2);
                            do {
                                unset($row_User_re2['val_content']);
                                // unset($row_User_re2['lesson_type']);

                                $collected_curr_step1[] = $row_User_re2;
                            } while ($row_User_re2 = mysqli_fetch_assoc($User_re2));
                            $ll =$key_curr.$i;
                            $collected_curr[] =$collected_curr_step1;
                        }
                    }
                }
                $count_curr = count($getTitle);
                $letAll = [];
                for ($s=0; $s < $count_curr; $s++) {
                    $letAll[] = [$getTitle[$s]=>$collected_curr[$s]];
                }
            }
            $packageAll['course']=$descr_course;
            $packageAll['curriculum'] = $letAll;
            exit(json_encode($packageAll));
        } else { #No Data Available
            $released_data = array("status"=>0,"message"=>"No Lesson(s) available");
            exit(json_encode($released_data));
        }
    }
}

 function packageLessonLink($row)
 {
     include("includes/db.inc.php");
     $query_User_re = sprintf("SELECT * FROM `lessons` WHERE id={$row}");
     $User_re = mysqli_query($tap, $query_User_re) or die(mysqli_error($tap));
     $query_User_re_courses = sprintf("SELECT * FROM `courses` WHERE id= {$course_fetch} AND pk_id={$fetch_pk}");
     if ($User_re) { #checking if connection is true
         $row_User_re = mysqli_fetch_assoc($User_re);
         $totalRows_User_re = mysqli_num_rows($User_re);
         if ($totalRows_User_re > 0) { #checking if row is available
             $package_unit = [];
             if ($row_User_re['lesson_type'] == 0) {
                 $package_unit['title'] = $row_User_re['title'];
                 $package_unit['lesson_type'] = $row_User_re['lesson_type'];
                 $package_unit['content'] = $row_User_re['val_content'];
             } elseif ($row_User_re['lesson_type'] == 1) {
                 $row1 = $row_User_re['val_content'];
                 $query_User_re_quiz = sprintf("SELECT * FROM `quiz` WHERE lesson_pin='{$row1}'");
                 $User_re_quiz = mysqli_query($tap, $query_User_re_quiz) or die(mysqli_error($tap));
                 // $x = 0;
                 $totalRows_User_re2 = mysqli_num_rows($User_re_quiz);
                 if ($totalRows_User_re2 > 0) {
                     $get_All_quiz = [];
                     do {
                         if ($row_User_re_quiz['qType']=="2") {
                             unset($row_User_re_quiz['options']);
                             unset($row_User_re_quiz['descriptions']);
                             $get_All_quiz[] = $row_User_re_quiz;
                         } else {
                             $optionss = explode("~", $row_User_re_quiz['options']);
                             foreach ($optionss as $key_opt => $value_opt) {
                                 if (!empty($value_opt)) {
                                     $row_User_re_quiz['options_all'][] = trim($value_opt);
                                 }
                             }
                             $descc = explode("~", $row_User_re_quiz['descriptions']);
                             foreach ($descc as $key_desc => $value_desc) {
                                 if (!empty($value_desc)) {
                                     $row_User_re_quiz['description_all'][] = trim($value_desc);
                                 }
                             }
                             unset($row_User_re_quiz['options']);
                             unset($row_User_re_quiz['descriptions']);
                             $get_All_quiz[] = $row_User_re_quiz;
                         }
                     } while ($row_User_re_quiz = mysqli_fetch_assoc($User_re_quiz));
                     $package_unit[] = $get_All_quiz;
                 }
             }
                
             exit(json_encode($package_unit));
         } else { #No Data Available
             $released_data = array("status"=>0,"message"=>"No Lesson(s) available");
             exit(json_encode($released_data));
         }
     }
 }

 function getQA($getQA)
 {
     $getQA = $_GET['answeredQs'];
     if ($getQA) {
         // echo json_encode($getQA);
         $questionId = $_GET['answeredQs']['Question'];
         $lessonsId = $_GET['answeredQs']['lessonId'];
         $answeStatus = $_GET['answeredQs']['status'];
         $arrReaponse = ["status"=>0,"message"=>"Error while submitting"];
         $arrReaponse1 = ["status"=>1,"message"=>"Submitted successfully"];

         include("includes/db.inc.php");
         if (!empty($questionId) && !empty($lessonsId) && !empty($answeStatus)) { #checking if defined
             $query_User_re = sprintf("INSERT INTO `scored_quiz`(`student_id`, `lesson_id`, `question_id`, `status`) VALUE('','{$lessonsId}','{$questionId}','{$answeStatus}')");
             $User_re = mysqli_query($tap, $query_User_re) or die(mysqli_error($tap));
             if ($User_re) {
                 exit(json_encode($arrReaponse1));
             } else {
                 exit(json_encode($arrReaponse));
             }
             // (mysqli_affected_rows($tap) != 1 ? json_encode($arrReaponse) : json_encode($arrReaponse1));
         } else {
             $released_data = array("status"=>0,"message"=>"No Lesson(s) available");
             exit(json_encode($released_data));
         }
     }
 }
