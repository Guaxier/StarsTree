<!--数据库连接方案-->
<?php
$servername = "47.76.82.65";//数据库地址
$username = "wwwsql";//用户名
$password = "wwwsql";//密码
$dbname = "wwwsql";//数据库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);//连接数据库
$conn->query("set names utf8");//统一编码