<?php
//开启验证
session_start();
//载入方法
require "method.php";
//获取IP属地
ipAddress();
?>
<!--设置网页语言-->
<html lang="zh">
	<head>
<!--设置网站标题-->
		<title>零的空间</title>
<!--设置编码格式-->
		<meta charset="utf-8" />
<!--设置网站内容摘要-->
		<meta name="description" content="郭影">
<!--设置网站图标-->
		<link rel="shortcut icon" href="/Web/IMG/qilingwl.ico">
		<link rel="apple-touch-icon" href="/Web/IMG/qilingwl.ico">
<!--引用日记日历样式表-->
  		<link rel="stylesheet" href="/Web/Diary/css/calendar.css">
		<link rel="stylesheet" href="/Web/Diary/font/iconfont.css">
<!--引用主要css样式表-->
		<link rel="stylesheet" type="text/css" href="/Web/CSS/maincss.css">
<!--解决兼容性-IE8模拟渲染-->
    	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!--设置网站关键词-->
		<meta name="keywords" content="七零网络,个人空间,零,惜影,呱兮儿,芸间紫寂">
<!--基本自适应模式-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--文案馆-->
	<script src="/Web/JS/sentence.js"></script>
<!--日记-日历-日期选择函数-->
	<script src="/Web/Diary/js/calendar.js"></script>
<!--引用主要js函数表-->
  	 	<script src="/Web/JS/mainjs.js" type="text/javascript"></script>
<!--引用ajax-->
		<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.11.0.min.js"></script>
	</head>
<body id="main-page-body" onload="but(8)">
	<div >


	<!--主内容容器-->
		<div onclick="but(8)" style="text-decoration: line-through; text-decoration: underline; user-select: all;user-select: none;">返回主页</div>
	<!--调用主页-->
			<div id="main-div">

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
							<br><?php $ipAddress ?>
						 </span>
					  </p>
					  <p id='main-page-body-IP'>你的地址:
							<br><?php $ipSite ?>
						 </P>
						 <P id='main-page-body-address'>© <a id='main-page-body-at'
							href='http://www.qilingwl.com/'>七零网络</a>&nbsp;版权所有
					  </p>
				</div>

			</div>
	<!--背景的背景蒲公英-->
		<script type='text/javascript' color='255,255,255' opacity='0.7' zIndex='-2' count='100'src='JS/canvas-nest.min.js'></script>


	<!--全局音乐播放器-->


	<!--音乐播放器定位-->
		<div id="glass-div-out">
	<!--音乐播放器内容器-->
			<div id="glass-div-in">
	<!--音乐播放器定位修正-->
				<div style=" margin-top: -5px;">
	<!--调用网易云音乐播放外链播放器-->
					<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" src="//music.163.com/outchain/player?type=0&id=7619118645&auto=1&height=90"></iframe>
				</div>
			</div>
	<!--隐藏按钮定位-->
			<div id="glass-div-table" onclick="Tabalenameoff()">
	<!--隐藏/展示-->
				<div id="glass-div-table-body">隐 藏</div>
			</div>
		</div>
	
	<!--引用页脚样式-->
		<footer id="footer">
	<!--版权信息-->
			<p class="copyright">©郭影 版权所有<a id="abt" target="_black" href='https://www.qilingwl.com'>七零网络</a>&nbsp;<a id="abt" target="_black" href='https://beian.miit.gov.cn'>蜀ICP备2022021722号</a></p>
		</footer>
	</div>
	
</body>
</html>