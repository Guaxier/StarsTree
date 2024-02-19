<?php
include 'db.php';//获取连接信息
	if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} //判断连接状态
 
$sql = "SELECT * FROM Diary where id=1";//查询语句
$result = $conn->query($sql);//执行查询
 
if ($result->num_rows > 0) { //判断数据
    // 有数据 输出数据
    while($row = $result->fetch_assoc()) {
		$id0=$row["id"];//编号
		$rj1=strtotime($row["rj1"]);//日期
		$rj2=$row["rj2"];//天气
		$rj3=$row["rj3"];//心晴
		$rj4=$row["rj4"];//内容
		$rj5=$row["rj5"];//图片
    }
} else {
    echo "0 结果";//没有数据
}
$conn->close();//关闭连接
?>