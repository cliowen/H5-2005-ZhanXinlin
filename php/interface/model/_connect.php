<?php
//处理中文乱码
header('content-type:text/html;charset=utf-8');

// 记录数据库地址
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "shop";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>