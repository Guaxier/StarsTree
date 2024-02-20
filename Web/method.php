<?php
// 获取客户端IP及属地
function ipAddress() {
    // 获取客户端IP地址
    $ipAddress = "";
    // 定义属地变量
    $ipSite = "";

    // 取得IP
    if (isset($_SERVER['HTTP_CLIENT_IP']) && $_SERVER['HTTP_CLIENT_IP']) {
        $ipAddress = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR']) {
        $ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } elseif (isset($_SERVER['REMOTE_ADDR'])) {
        $ipAddress = $_SERVER['REMOTE_ADDR'];
    } else {
        $ipAddress = $_SERVER['REMOTE_ADDR'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'];
    }

    // 获取客户端属地，更换为腾讯云IP查询API（稳定、免费）
    $ch = curl_init();
    $url = 'https://ip.tencent.com/service/getlocation.php?ip=' . $ipAddress;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    $response = curl_exec($ch);
    curl_close($ch);

    // 解析JSON数据
    $ip_location = json_decode($response, true);
    
    // 取得IP属地信息
    if(isset($ip_location['country']) && isset($ip_location['province']) && isset($ip_location['city'])) {
        $ipSite = $ip_location['country'].$ip_location['province'].$ip_location['city'];
    } else {
        $ipSite = "未知地址";
    }

    // 通过全局变量存储IP
    $GLOBALS['ipAddress'] = $ipAddress;
    // 通过全局变量存储属地
    $GLOBALS['ipSite'] = $ipSite;
};












//日记不存在，被删除或隐藏
function Diarydete($Mdete){
	//获取得到的日期
	$Mtime = strtotime($Mdete);
	//获取今天的日期
	$Todaydate = strtotime(date('Y-m-d'));
	if ($Mtime > $Todaydate) {
		//当日期大于今天
		$Mtime = $Mdete;
		$Mdiary = "
		<font id='Future'></font>
		<script>
			function randomSentence() {
				document.getElementById('Future').innerHTML = soulA[Math.floor(Math.random() * soulA.length)];
			}
			randomSentence();
		</script>";
		$Diary = "null";
		$Mweather = "null";
		$Mmood = "null";
		diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary);
	}elseif ($Mtime == $Todaydate) {
		//当日期等于今天
		$Mtime = $Mdete;
		$Mdiary = "
		<center>
		<img src='IMG/Today.svg' id='Todayimg'>
		<br>
		<font id='Todays'>今天还没有记录哦</font>
		<br>
		<font id='Today'></font>
		<br>
		<img src='IMG/Todayadd.svg' id='Todayadd'>
		</center>
		<script>
			function randomSentence() {
				document.getElementById('Today').innerHTML = soulB[Math.floor(Math.random() * soulB.length)];
			}
			randomSentence();
		</script>";
		$Diary = "null";
		$Mweather = "null";
		$Mmood = "null";
		diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary);
	}elseif ($Mtime < $Todaydate) {
		//当日期小于今天
		$Mtime = $Mdete;
		$Mdiary = "
		<font id='Past'></font>
		<img src='IMG/logo5.jpeg' width='100%'>
		<script>
			function randomSentence() {
				document.getElementById('Past').innerHTML = soulC[Math.floor(Math.random() * soulC.length)];
			}
			randomSentence();
		</script>";
		$Diary = "null";
		$Mweather = "null";
		$Mmood = "null";
		diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary);
	}else{
		echo "<script>alert('数据异常');</script>";
	}
}





















//获取日记信息
function DiaryMain($Mdete){
		//获取连接信息
		include 'db.php';
		// 创建连接
		$conn = new mysqli($servername, $username, $password, $dbname);//连接数据库
		$conn->query("set names utf8");//统一编码
		//开始连接
		if ($conn->connect_error) {
			//连接状态
			error_log("连接失败: " . $conn->connect_error);
			exit;
		} 
		//查询日记状态
		$sql = "SELECT MTF FROM Diary where Mdete = '$Mdete'";
		//执行查询
		$result = $conn->query($sql);
		if ($result->num_rows > 0) { //判断数据
		// 有数据 输出数据
		$row = $result->fetch_assoc() ;
		//获取状态
		$state = $row["MTF"];
		//判断状态
		switch ($state){
			//为"1"表示正常 - 为"2"表示修改一次 - 为"3"表示修改两次 - 为"0"表示删除 - 为"4"表示隐藏
			case "1":
				//查询日记内容
				$sql = "SELECT MID,Mtime,Mweather,Mmood,Mdiary FROM Diary where Mdete = '$Mdete'";
				//执行查询
				$result = $conn->query($sql);
				//输出日记
				while($row = $result->fetch_assoc()) {
					//标识
					$Diary = $row["MID"];
					//日期
					$Mtime = $row["Mtime"];
					//天气
					$Mweather = $row["Mweather"];
					//心晴
					$Mmood = $row["Mmood"];
					//内容
					$Mdiary = $row["Mdiary"];
				}
					//调用函数打印内容
					diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary);
				break;

			case "2":
				//查询日记内容
				$sql = "SELECT MID,MtimeA,Mweather,Mmood,MdiaryA FROM Diary where Mdete = '$Mdete'";
				//执行查询
				$result = $conn->query($sql);
				// 检查查询是否成功
				if ($result) {
					// 取得数组
					$row = $result->fetch_array(MYSQLI_ASSOC);
				} else {
					// 记录错误信息或处理查询失败的情况
					error_log("SQL 查询执行失败: " . $conn->error);
				}
				//输出日记
				while($row = $result->fetch_assoc()) {
					//标识
					$Diary = $row["MID"];
					//日期
					$Mtime = $row["MtimeA"];
					//天气
					$Mweather = $row["Mweather"];
					//心晴
					$Mmood = $row["Mmood"];
					//内容
					$Mdiary = $row["MdiaryA"];
				}
					//调用函数打印内容
					diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary);
				break;

			case "3":
				//查询日记内容
				$sql = "SELECT MID,MtimB,Mweather,Mmood,MdiaryB FROM Diary where Mdete = '$Mdete'";
				//执行查询
				$result = $conn->query($sql);
				// 检查查询是否成功
				if ($result) {
					// 取得数组
					$row = $result->fetch_array(MYSQLI_ASSOC);
				} else {
					// 记录错误信息或处理查询失败的情况
					error_log("SQL 查询执行失败: " . $conn->error);
				}
				//输出日记
				while($row = $result->fetch_assoc()) {
					//标识
					$Diary = $row["MID"];
					//日期
					$Mtime = $row["MtimeB"];
					//天气
					$Mweather = $row["Mweather"];
					//心晴
					$Mmood = $row["Mmood"];
					//内容
					$Mdiary = $row["MdiaryB"];
				}
					//调用函数打印内容
					diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary);
				break;
			default:
				//日记不存在，被删除或隐藏
				Diarydete($Mtime);
				break;
			}
		} else {
			Diarydete($Mdete);
		}
	//关闭连接
	$conn->close();
};

//加载日记
function diary($Mtime,$Diary,$Mweather,$Mmood,$Mdiary){
	//定义周数组判断星期
	$weekarray=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	//返回星期
	$MtimeC = $weekarray[date('w',strtotime($Mtime))];
	//返回今年的第几天
	$MtimeD = date('z',strtotime($Mtime)) + 1;
	//输出年月日
	$MtimeE = date('Y',strtotime($Mtime)).'年'.date('m',strtotime($Mtime)).'月'.date('d',strtotime($Mtime)).'日';
	//输出年
	$MtimeF = date('Y',strtotime($Mtime));
	//年月日
	$Mdete = date('Y-m-d',strtotime($Mtime));
	 echo "
		<!--应用样式 总容器-->
		<div id='diary-main'>
			<!--日期定位-->
			<div id='diary-button-dateA'>
				<input type='text' class='diary-maincss' id='diary-button-dateB' value='$Mdete'>
				  	<script>
					//获取文本框
					var eCalendarInput = document.getElementById('diary-button-dateB');
					//配置选项
					var oConfig = {
					  format:'yyyy-MM-dd',  //日期格式
					  // value:'2022-9-13', //默认值
					  // placeholder:'请选择日期',
					  // disabled:true,
					  model:'date'
					}
					//调用日历构造函数生成实例对象
					var oCalenderObj = new CalendarPlugin(eCalendarInput,oConfig);
				  </script>
			</div>
			<!--日记内容器-->
			<div id='diary-body'>
				<!--日记按钮-->
				<!--锁开-->
				<div class='DiaryButton' id='DiarylockO' onclick='Diarybutton(0)' hidden></div>
				<!--锁关-->
                <div class='DiaryButton' id='DiarylockC' onclick='Diarybutton(1)'></div>
				<!--保存-->
                <div class='DiaryButton' id='Diarysever' onclick='Diarybutton(2)' hidden></div>
				<!--删除-->
                <div class='DiaryButton' id='Diarydelete' onclick='Diarybutton(3)'></div>
				<!--设置-->
                <div class='DiaryButton' id='Diaryinstall' onclick='Diarybutton(4)' hidden></div>
				<!--标题和状态-->
				<center>
					<h3>
						$MtimeF 年的第 <b>$MtimeD</b> 天
					</h3>
					<h5>
						心情：$Mmood | 天气：$Mweather | $MtimeC 
					</h5>
				</center>
				<p id='diary-bodya'>
					$Mdiary
				</p>
			</div>
			<!--按钮定位-->
			<div id='diary-button-main'>
				<!--前一天的日记-->
				<button class='diary-maincss' id='diary-button-before' onclick='diarybut(0)'>往前一天</button>
				<!--后一天的日记-->
				<button class='diary-maincss' id='diary-button-after' onclick='diarybut(1)'>往后一天</button>
			</div>
			<!--返回-->
			<button class= 'diary-maincss' id='diary-button-choose' onclick='but(8)'>主页</button>
		</div>";
};

//重载主页
function mainpage(){
	//获取IP属地
	ipAddress();
	//通过全局变量取得IP
	$ipAddress = $GLOBALS['ipAddress'];
	//通过全局变量取得属地
	$ipSite = $GLOBALS['ipSite'];
	echo "
	<!--主页-->
		<div id='main-page-body-out'>
			  <p>
				 <img id='main-page-body-img' src='http://q2.qlogo.cn/headimg_dl?dst_uin=2537094196&spec=100' alt='头像获取失败'>
			  </p>
			  <h1 id='main-page-body-title'>
				 <strong>郭影</strong>
			  </h1>
			  <p id='main-page-body-sentence'>羡慕从前，相信未来<br>保留爱与期待，再见即是永远</p>
			  <p id='main-page-body-line'>
				 <a class='main-page-body-link'
					onclick='but(1)'>灵感</a>
				 <a class='main-page-body-link'
					onclick='but(2)'>日志</a>
				 <a class='main-page-body-link'
					onclick='but(3)'>日记</a>
				 <br>
				 <a class='main-page-body-link'
					onclick='but(4)'>项目</a>
				 <a class='main-page-body-link'
					onclick='but(5)'>关于</a>
			  </p>
			   <a id='main-page-body-link'
					onclick='but(0)'>iKun专享福利</a>
			  <p>
				 <span id='main-page-body-IP'>你的IP:
				 	<br>$ipAddress
				 </span>
			  </p>
			  <p id='main-page-body-IP'>你的地址:
			  		<br>$ipSite
				 </P>
				 <P id='main-page-body-address'>© <a id='main-page-body-at'
					href='http://www.qilingwl.com/'>七零网络</a>&nbsp;版权所有
			  </p>
		</div>";
};