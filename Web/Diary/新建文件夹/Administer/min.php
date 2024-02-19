<? 
$servername = "localhost";//数据库地址
$username = "s9107344";//数据库账号
$password = "irSZ06bfXL";//数据库密码
$dbname = "s9107344";//数据库名
$conn = new mysqli($servername, $username, $password, $dbname);//创建连接
$conn->query("set names utf8");//中文乱码解决方法