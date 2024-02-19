<!--数据库连接方案-->
<?php
$servername = "localhost";//数据库地址
$username = "www_qilingwl_com";//用户名
$password = "4njf7y3zicaxTBa7";//密码
$dbname = "www_qilingwl_com";//数据库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);//连接数据库
$conn->query("set names utf8");//统一编码