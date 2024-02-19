	<body> 
			<div id="wrapper"><!--应用样式 总容器-->
					<header id="header"><!--引用页眉-->
							<div class="logo"><!--引用样式-->
							<span>
								<?php echo date("Y年m月d日")?><!--获取今天日期-->
							</span>
							</div>
							<h3 id="sentence"></h3>
								<div style=" 
											text-align:left;
											border-width:1px;
											border-style:solid;
											border-color:rgb(2, 204, 245);
											background-color:#79918e6b;
											padding-left:5%;
											padding-right:5%;
											height:300px;
											min-width:320px;
											word-break:break-all;
											overflow-x: hidden;
											overflow-y: scroll;
											::-webkit-scrollbar {display: none;}"
									 >
								<center><!--容器样式-->
									<h3>
										某年某月某日<br>正常&nbsp;&nbsp;&nbsp;晴
										<!--获取当前日期echo date("Y年m月d日")--获取数据库中的数据：日期 心晴 天气-->
									</h3>
								</center>
										<p>
											日记内容
										</p>
								</div>
				<div>
				  <button >往前一天</button><!--前一天的日记-->
					&nbsp;&nbsp;&nbsp;
				  <button >往后一天</button><!--后一天的日记-->
				</div>
						<div>选择日期</div><!--指定日期的日记-->
						<nav>
					</header>
						<footer id="footer"><!--引用页脚样式-->
							<p class="copyright">©郭影 版权所有<a target="_black" href='https://www.qilingwl.com'>七零网络</a></p><!--版权信息-->
						</footer>
			</div>
			<script src="static/js/index.js"></script><!--文案馆-->
	</body>