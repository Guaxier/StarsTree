<?php
$rj1 = $_POST["rj1"];//获取日期
$rj2 = $_POST["rj2"];//获取心晴
$rj3 = $_POST["rj3"];//获取天气
$rj4 = $_POST["rj4"];//获取内容
$rj5 = $_POST["rj5"];//获取附件（图片、声音、文档等）

include("min.php");//连接数据库
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);// 检查连接
} 
 //创建查询
$sqli = "SELECT * FROM Diary";//查询获取ID
$result = $conn->query($sqli);//取得数据组
$sqlid = $result->num_rows;//取得数据结果总数
$sql = "insert into Diary(ID,rj1,rj2,rj3,rj4) values('$sqlid','$rj1','$rj2','$rj3','$rj4')"; //插入数据
mysqli_query("set names utf8");//统一编码格式
$result = $conn->query($sql);//执行插入
if($result)
{
	echo "<script language=javascript>alert('你的第 $sqlid 篇日记添加成功！');history.back();</script>";//弹窗并返回编辑页
}
else
{
	echo "<script language=javascript>alert('$rj1 日记添加失败！\u000a每天只能添加1篇日记哦！');history.back();</script>";/* "\u000a"为回车符，换行操作 */
/*	echo "第 $sqlid 条记录<br>";//输出ID
	echo $rj1;//输出ID
    echo "<br>添加失败！";
*/ }
$conn->close();//关闭数据库连接
?>