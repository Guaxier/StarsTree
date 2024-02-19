<!--数据库连接方案-->
<?php
$servername = "localhost";//数据库地址
$username = "s9107344";//用户名
$password = "irSZ06bfXL";//密码
$dbname = "s9107344";//数据库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);//连接数据库
$conn->query("set names utf8");//中文乱码解决方法