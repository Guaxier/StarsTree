<?php 
//开启验证
session_start();
//载入方法
require "method.php";
//判断请求
$spendtype =  $_POST["type"];
//获取参数
$parameter =  $_POST["parameter"];
//根据请求返回页面
switch ($spendtype){
		//主页面请求
		case "page":
			//调用函数
			page($parameter);
			break;
		//日记请求
		case "diary":
			//日记
			getdiary($parameter);
			break;
		//打开日记
		case "but3":
			//日记
			echo "项目-请求成功！";
			break;
		//打开项目
		case "but4":
			//项目
			echo "项目-请求成功！";
			break;
		//打开关于
		case "but5":
			//关于
			echo "关于-请求成功！";
			break;
		//返回主页
		case "mainpage":
			//主页
			echo "关于-请求成功！";
			break;
		//ikun专属福利	
		default:
			echo "非法请求！";
	}

//主页获取函数
function page($parameter){
	switch ($parameter){
		//打开灵感
		case "but1":
			//灵感
			echo "灵感-请求成功！";
			break;
		//打开日志
		case "but2":
			//日志
			echo "日志-请求成功！";
			break;
		//打开日记
		case "but3":
			//初始化请求日期
			$Mdete = date("Y-M-d");
			//请求日记
			DiaryMain($Mdete);
			break;
		//打开项目
		case "but4":
			//项目
			echo "项目-请求成功！";
			break;
		//打开关于
		case "but5":
			//关于
			echo "关于-请求成功！";
			break;
		//返回主页
		case "mainpage":
			//主页
			mainpage();
			break;
		//ikun专属福利	
		default:
			echo "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='100%' height='100%' src='https://xxtyme.github.io/EatCxk/'></iframe>";
	}
}













//日记交互函数
function getdiary($parameter){
	//获取请求日期
	$spenddate =  $_POST["spenddate"];
	//判断数据是否合法
	if (strtotime(date('Y-m-d',strtotime($spenddate))) === strtotime($spenddate)){
		switch ($parameter){
			//请求上一篇日记
			case "before":
				//计算请求日期
				$Mdete = date('Y-m-d',strtotime($spenddate) - 1);
				//上一篇
				DiaryMain($Mdete);
				break;
			//请求下一篇日记
			case "after":
				//计算请求日期
				$Mdete = date('Y-m-d',strtotime("+1 day",strtotime($spenddate)));
				//下一篇
				DiaryMain($Mdete);
				break;
			//根据日期查找	
			default:
				//计算请求日期
				$Mdete = $spenddate;
				//指定日期
				DiaryMain($Mdete);
				break;
		}
	}else{
		echo "<script>alert('数据异常');</script>";
		//初始化请求日期
		$Mdete = date("Y-M-d");
		//请求日记
		DiaryMain($Mdete);
	}

}
















