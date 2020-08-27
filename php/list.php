<?php
    header('content-type:text/html;charset=utf-8;');

    $conn = mysqli_connect('localhost','root','root','list');

    $res = mysqli_query($conn,'SELECT * FROM `info`');
    // print_r($res)

    $arr = mysqli_fetch_all($res,MYSQL_ASSOC);
    // print_r($arr);

    echo json_encode($arr);

    mysqli_close($conn)
?>