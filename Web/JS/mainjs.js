/**
 * 音乐播放器隐藏
 */

//定义标签计数
var Tabalenamecount = 0;
//执行播放器隐藏/展开方法
function Tabalenameoff() {
//按钮次数+1
    Tabalenamecount = Tabalenamecount + 1;
//取余并判断
	if (Tabalenamecount%2 == 1) {
//更换显示文字
        document.getElementById("glass-div-table-body").innerHTML = "展 开";
//选择播放器
        var player = document.getElementById("glass-div-out");
//调整坐标隐藏播放器
        player.style.cssText = "transform: translate(-90%,0);"
	}
	else{
        document.getElementById("glass-div-table-body").innerHTML = "隐 藏";
//选择播放器
        var player2 = document.getElementById("glass-div-out");
//调整坐标显示播放器
        player2.style.cssText = "transform: translate(0,0);"
	}
}



/**
 * 第二个函数
*/

//子菜单调用
	function but(a) {
		switch(a){
				case 0:
					a = "but";
					break;
				case 1:
					a = "but1";
					break;
				case 2:
					a = "but2";
					break;
				case 3:
					a = "but3";
					break;
				case 4:
					a = "but4";
					break;
				case 5:
					a = "but5";
					break;
				default:
					a = "mainpage";
			}
		$.ajax({
			//请求地址
			url: "console.php",
			//请求方式
			type: "POST",
			//采用同步
			Async: "true" ,
			//需要上传的数据
			data: {
				//请求类型
				"type" : "page",
				//请求参数
				"parameter" : a,
				//请求用户
//				"spenduser" : "",
				//目标群
//				"spendname" : <?php echo($spendname) ?>,
			}, 
			//数据的格式
			dataType: "text",
			//请求成功
			success: function (data) {
				//输出数据
				$("#main-div").html(data);
			},
			//请求响应错误
			error: function () {
				alert("数据请求错误..");
			},
		});
	}


//日记命令调用
	function diarybut(a) {
		//取得当前日期
		var b;
		b = document.getElementById("diary-button-dateB").value;
		switch(a){
				//前一天
				case 0:
					a = "before";
					break;
				//后一天
				case 1:
					a = "after";
					break;
				//指定日期
				default:
				//"specified"
					a = "specified";
			}
		$.ajax({
			//请求地址
			url: "console.php",
			//请求方式
			type: "POST",
			//采用同步
			Async: "true" ,
			//需要上传的数据
			data: {
				//请求类型
				"type" : "diary",
				//请求参数
				"parameter" : a,
				//请求的日期
				"spenddate" : b,
				//请求用户
//				"spenduser" : "",
				//目标群
//				"spendname" : <?php echo($spendname) ?>,
			}, 
			//数据的格式
			dataType: "text",
			//请求成功
			success: function (data) {
				//输出数据
				$("#main-div").html(data);
			},
			//请求响应错误
			error: function () {
				alert("数据请求错误..");
			},
		});
	}




/**
 * 日记按钮属性
 */
	function Diarybutton(b){
		//按钮判断
		var button;
		switch(b){
			case 0://关锁
					button = document.getElementById("DiarylockC");
					button.removeAttribute("hidden");
					button = document.getElementById("DiarylockO");
					button.setAttribute("hidden",true);
				break;
			case 1://开锁
					button = document.getElementById("DiarylockO");
					button.removeAttribute("hidden");
					button = document.getElementById("DiarylockC");
					button.setAttribute("hidden",true);
				break;
			case 2://保存
				break;
			case 3://删除
				break;
			case 4://设置
				break;
			default:
				break;
		}
	}























