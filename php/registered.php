<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = mysqli_connect('localhost','root','root','customer');

    $sql = "SELECT * FROM `info` WHERE `username`='$username'";

    $result = mysqli_query($conn,$sql);

    $data = mysqli_fetch_assoc($result);

    if($data){
        // 如果查询到，说明该用户已经存在于数据库，无法注册
        $arr = array('code'=>0,'msg'=>'用户名已被注册');
    }else{
        // 如果查询到，可以注册
        // 书写sql语句
        $sql = "INSERT INTO `info` (`username`,`password`) VALUES ('$username','$password')";
        // 执行插入语句
        $result = mysqli_query($conn,$sql);
        // 不需要解析，结果返回的是布尔值
        if($result){
            $arr = array('code'=>1,'data'=>array('username'=>$username));
        }else{
            $arr = array('code'=>0,'msg'=>'后端出错了');
        }
    }

    //给后端返回json数据
    echo json_encode($arr);
?>