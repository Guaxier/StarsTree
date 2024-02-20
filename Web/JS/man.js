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























//创建日历插件构造函数
function CalendarPlugin(elem,opt={}){
    
}
//创建日历插件构造函数
function CalendarPlugin(elem,opt={}){
    //执行初始化
    this.init();
}

//初始化
CalendarPlugin.prototype.init = function(){

}
//创建日历插件构造函数
function CalendarPlugin(elem,opt={}){
  //把文本框设置为日历对象的属性
  this.eInput = elem;

  /*...*/
}

//初始化
CalendarPlugin.prototype.init = function(){
  //获取原有intpu元素的父元素
  var eInputParent = this.eInput.parentNode;
  //创建日历包裹元素并添加class名称
  var eWrap = document.createElement('div');
  eWrap.className = 'calendar_wrap';
  //创建文本框容器元素
  var eInputContainer = document.createElement('div');
  eInputContainer.className = 'calendar_container';
  //创建清除按钮
  var eClear = document.createElement('div');
  eClear.className = 'calendar_clean';
  //创建日历图标元素
  var eIcon = document.createElement('div');    
  eIcon.className = 'calendar_icon';
  //把日历包裹放到原有父元素中
  eInputParent.appendChild(eWrap);
  //文本框容器放到包裹中
  eWrap.appendChild(eInputContainer);
  //把相关元素放到文本框容器中
  eInputContainer.appendChild(this.eInput);
  eInputContainer.appendChild(eClear);
  eInputContainer.appendChild(eIcon);

  //设置文本框为只读
  this.eInput.setAttribute('readonly',true);
  
}
CalendarPlugin.prototype.init = function(){
  
  /*...*/

  //创建主要日历容器元素
    this.eMain = document.createElement('div');
    this.eMain.className = 'calendar_main';
    //把日历容器放到包裹元素中
    eWrap.appendChild(this.eMain);
}
CalendarPlugin.prototype.init = function(){
  /*...*/

  //创建日历头部
    this.eHead = document.createElement('div');
    this.eHead.className = 'calendar_head';
    //把日历头部放到日历容器中
    this.eMain.appendChild(this.eHead);
    //设置当前年份
    this.nYear = null;
    //设置当前月份
    this.nMonth = null;
    //设置日历模式，默认显示日历
    this.sModel = 'date';
        
    //创建日历主体
    this.eBody = document.createElement('div');
    this.eBody.className = 'calendar_body';
    //把日历主体放到日历容器中
    this.eMain.appendChild(this.eBody);
    //当前选定日期
    this.selDate = null;

    //创建底部元素
    this.eFoot = document.createElement('div');
    this.eFoot.className = 'calendar_foot';
    this.eDefine = document.createElement('button');
    this.eDefine.className = 'define_btn';
    //把底部元素放到日历容器中
    this.eMain.appendChild(this.eFoot);
    this.eFoot.appendChild(this.eDefine);
    this.eDefine.innerHTML = '今 天';
}
//初始化
CalendarPlugin.prototype.init = function(){
  /*...*/

  //生成日历元素
  this.generateDate();
}

//创建头部元素
CalendarPlugin.prototype.generateHead = function(){
    //根据日历模式不同，组成日历头部html代码
    var sHeadHtml = '<a class="left_year_btn chang_btn" data-run="lessYear"></a>';
    
    if(this.sModel == 'date'){    //日历模式
        sHeadHtml += `<a class="left_month_btn chang_btn" data-run="lessMonth"></a>
                                    <a class="year_btn" data-run="showYear" data-model="year">${this.nYear}年</a>
                                    <a class="month_btn" data-run="showMonth" data-model="month">${+this.nMonth+1}月</a>
                                    <a class="right_month_btn chang_btn" data-run="addMonth"></a>`;
    }else if(this.sModel == 'month'){    //月历模式
        sHeadHtml += `<a class="year_month_btn" data-run="showYear" data-model="year">${this.nYear}年</a>`;
    }else if (this.sModel == 'year'){    //年历模式
        sHeadHtml += `<a class="year_month_btn">${+(Math.floor(this.nYear/10)+'0')}-
                                    ${+(Math.floor(this.nYear/10)+'0')+10}</a>`;
    }

    sHeadHtml += '<a class="right_year_btn chang_btn" data-run="addYear"></a>';
    //填充日历头部
    this.eHead.innerHTML = sHeadHtml;
}
//生成日历
CalendarPlugin.prototype.generateDate = function(date=null){
    //组成日历的html代码
    var sBodyHtml = '<table>';
    //组合周日 - 周六的列表头
    sBodyHtml += `<thead>
                                    <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>
                             </thead>`

    /*日历中需要记录当前日期、选定日期、面板日期共三个时间*/
    //当前日期：当前日期在日历面板中有一个背景和加粗字体，需要添加class为cur_day
    var dCurDate = new Date();
    //选定日期：在面板上选择的日期，并且显示在文本框中，有一个背景和白色字体，需要添加class为sel_day
    //选定日期需要记录在日历实例的selDate属性上，如果暂无选定日期则为当前日期
    var dSelDate = this.selDate || dCurDate;
    //初始化当前年/月
    this.nYear = this.nYear || dSelDate.getFullYear();
    this.nMonth = this.nMonth || dSelDate.getMonth();
    //面板上显示的日历
    var dShowDate = new Date(this.nYear,this.nMonth,dSelDate.getDate());

    /*
    日历面板规则：
    显示42天，6行7列；
    面板上的第一天是当月1号往前推到星期日。比如当月1号是星期一则上月显示1天、星期三上月显示3天、星期日上月显示7天；
    */
    //计算上月要显示的天数
    var nFrontNum = new Date(this.nYear,this.nMonth,1).getDay() || 7;
    //日历面板上的日期每增加一个循环周期是一天，获取一天的毫秒数
    var cycle = 1000*60*60*24;
    sBodyHtml += '<thbody>'
    //循环42次
    for(let i=1;i<43;i++){
        //以下公式获取日历中每天递增日期的时间戳
        let dTimes = +dShowDate + cycle * (i-nFrontNum-dShowDate.getDate());
        //通过时间戳创建Date实例对象
        let dNewDate = new Date(dTimes);
        //获取日期添加到html中
        if((i-1)%7==0){ //判断是否需要换行
            sBodyHtml += '<tr>';
        }
        //判断是否是选定日期，当前日期，面板当月日期，分别加上对应的class
        sBodyHtml += `<td><a data-time="${dTimes}" class="${
                                    this.quiteDate(dNewDate,dSelDate)?'sel_day':
                                    this.quiteDate(dNewDate,dCurDate)?'cur_day':
                                    dNewDate.getMonth()==this.nMonth?'cur_month':''
                                 }">${dNewDate.getDate()}</a></td>`;
        if(i%7==0){ //判断是否需要结束表格行
            sBodyHtml += '</tr>';
        }
    }
    sBodyHtml += '</thbody></table>';

    //填充日历面板
    this.eBody.innerHTML = sBodyHtml;
    //生成面板头部
    this.generateHead();
}
//比较两个日期是否为同一天
CalendarPlugin.prototype.quiteDate = function(d1,d2){
    var format = 'yyyy-MM-dd';
    return this.format(d1,format) == this.format(d2,format);
}
//格式化日期
CalendarPlugin.prototype.format = function(date,format){
    //用于正则表达式的匹配
    var o =  {
    "M+" : date.getMonth()+1, //月
    "d+" : date.getDate(), //日
    "h+" : date.getHours(), //小时
    "m+" : date.getMinutes(), //分钟
    "s+" : date.getSeconds(), //秒
    };
    //使用正则将yyyy替换为当前年份
    if(/(y+)/.test(format)){
        format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    //枚举o对象中匹配的正则，比如MM替换当前月份，dd替换为当前日期
    for(var k in o)  {
        if(new RegExp("("+ k +")").test(format)){
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    //把格式替换为正确日期后返回
    return format;
}
  //获取文本框
  /*...*/

  //配置选项
  var oConfig = {
    placeholder:'请输入日期',//文本框提示
  }
  
  //调用日历构造函数生成实例对象
  /*...*/
//创建日历插件构造函数
function CalendarPlugin(elem,opt={}){
    //把文本框设置为日历对象的属性
    /*...*/

    //默认配置选项
    this.oConfig = {
        format:'yyyy-MM-dd',            //日期格式
        value:null,                                //默认日期
        placeholder:'请输入日期'     //文本框提示
    }
    //修改为传入的配置选项
    for(let k in this.oConfig){
        opt[k] && (this.oConfig[k] = opt[k]);
    }

    //执行初始化
    /*...*/
}
//初始化
CalendarPlugin.prototype.init = function(){
  /*...*/

  //默认赋值
    this.oConfig.value && (this.eInput.value = this.oConfig.value) && (this.selDate = new Date(this.oConfig.value));
    //设置文本框提示
    this.eInput.placeholder = this.oConfig.placeholder;
}
CalendarPlugin.prototype.init = function(){
  /*...*/

  //默认隐藏日历面板
    this.eMain.style.display = 'none';
}
//初始化
CalendarPlugin.prototype.init = function(){
  /*...*/

  //文本框点击显示日历面板
    this.eInput.addEventListener('click',()=>{
        if(this.eMain.style.display=='none'){
            //显示日历面板
            this.eMain.style.display = 'block';
            //在页面上绑定点击事件，除日历面板以外任何位置点击鼠标时，隐藏日历面板
            document.addEventListener('click',hideMain,false);
            //默认显示日历
            this.sModel = 'date';
            //初始化年/月
            this.nYear = null;
            this.nMonth = null;
            //生成日历
            this.generateDate();
        }else{
            //隐藏日历面板
            hideMain();
        }
    });

    //因为addEventListener监听事件必须是命名函数才能取消，所以在这里创建一个隐藏日历面板函数
    var eMain = this.eMain;
    function hideMain(){
        eMain.style.display = 'none';
        document.removeEventListener('click',hideMain,false);
    }

    //阻止冒泡
    eWrap.addEventListener('click',function(event){
        event.stopPropagation();
    });
}
//初始化
CalendarPlugin.prototype.init = function(){
  /*...*/

  //日期面板点击事件
    this.eBody.addEventListener('click',(event)=>{
        //获取点击的元素
        let eTarget = event.target;
        //获取日期时间戳
        let sTime = eTarget.dataset.time;
        //获取月
        let sMonth = eTarget.dataset.month;
        //获取年
        let sYear = eTarget.dataset.year;
        //获取当前元素className
        let sClass = eTarget.className;
        if(this.sModel=='date'){    //当前模式是日期，在输入框显示日期，并隐藏日历面板
            if(sTime && sClass != 'sel_day'){
                this.selDate = new Date(+sTime);
                this.eInput.value = this.format(this.selDate,this.oConfig.format);
                hideMain();
				diarybut(2);
            }
        }else{    
            if(sMonth||sYear){    //年历或月历面板，创建选择的年或月的日期
                this.nYear = sYear || this.nYear;
                this.nMonth = sMonth || this.nMonth; 
                this.sModel = 'date';
                this.generateDate();
            }
        }
    });
    //点击今天按钮选择今天的日期
    this.eDefine.addEventListener('click',(event)=>{
        this.selDate = new Date();
        this.eInput.value = this.format(this.selDate,this.oConfig.format);
        hideMain();
    });
}
//初始化
CalendarPlugin.prototype.init = function(){
  /*...*/

  //日历面板头部点击事件
    this.eHead.addEventListener('click',(event)=>{
        //获取点击的元素
        let eTarget = event.target;
        //获取修改方式
        let sRun = eTarget.dataset.run;
        //获取面板模式
        let sModel = eTarget.dataset.model;
        this.sModel = sModel || this.sModel;
        
        if(sRun=='addYear'){    //切换后一年
            if(this.sModel=='year'){
                this.nYear+=10;
            }else{
                this.nYear++;
            }
        }else if(sRun=='lessYear'){    //切换前一年
            if(this.sModel=='year'){
                this.nYear-=10;
            }else{
                this.nYear--;
            }
        }else if(sRun=='addMonth'){    //切换下一个月
            this.nMonth++;
        }else if(sRun=='lessMonth'){    //切换前一个月
            this.nMonth--;
        }

        if(this.sModel=='year'){
            this.generateYear();
        }else if(this.sModel=='month'){
            this.generateMonth();
        }else{
            this.generateDate(new Date(this.nYear,this.nMonth,1));    //因为切换只年月没选择日期，日期可以任意一天，所以设置为1号
        }
        
    });
}

/*...*/

//生成月历
CalendarPlugin.prototype.generateMonth = function(){
    //生成月份的html元素
    let sBodyHtml = '<ul>';
    for(let i=0;i<12;i++){
        sBodyHtml += `<li><a data-month="${i+1}" class="${i==this.nMonth?'sel_day':''}">${i+1}月</a></li>`
    }
    sBodyHtml += '</ul>';
    this.eBody.innerHTML = sBodyHtml;    
    //生成面板头部
    this.generateHead();
}
//生成年历
CalendarPlugin.prototype.generateYear = function(){
    //共显示12年，可以通过把当前年最后一个数字改为0获取10年中的第一年
    let nStart = +(Math.floor(this.nYear/10)+'0');
    //再从-1开始循环到11，就可以循环出12年
    //生成年份的html元素
    let sBodyHtml = '<ul>';
    for(let i=-1;i<11;i++){
        sBodyHtml += `<li><a data-year="${i+nStart}" class="${
                                i==-1||i==10?'no_cur':
                                i+nStart==this.nYear?'sel_day':''
                            }">${i+nStart}</a></li>`
    }
    sBodyHtml += '</ul>';
    //修改面板
    this.eBody.innerHTML = sBodyHtml;    
    //生成面板头部
    this.generateHead();
}






















//未来的文案（日期大于今日）
let soulA = [
    '往事不再过问 未来共赴前程',
    '被人规划在未来里是顶级浪漫',
    '未来不就是现在积累而成的吗',
    '过去无可挽回，未来可以改变',
    '你应该学会迎接未来和接受离开',
    '别丧啊 宝贝 未来可期 人间值得',
    '在不為人知的未來 我們平平安安就好',
    '吃够当下的苦，未来的甜才会顺理成章',
    '人间即使不值得，但前程未来依旧可期',
    '对未来最好的馈赠，是把一切都献给现在',
    '其实我也在憧憬未来 即使眼下黑暗无光',
    '希望奔向你未来的是数不尽的浪漫与温柔',
    '阳光洒在我身上，不偏不倚，我看见了未来',
    '花会沿路盛开 你以后的路也是 所以要有未来',
    '未来要过什么样的人生 是由现在的自己决定的',
    '把理想和热爱都写进风里 未来的每一天都浪漫至死',
    '你曾经填满我的过去，却在我们约定好的未来中缺席',
    '会等到花开满春天，你和我有漫长的未来<br>——艾维斯',
    '今天下午就是今天上午的未来<br>——《云雀叫了一整天》',
    '未来总是引人恐惧的，可因为未知，也是他的迷人之处',
    '切莫垂头丧气，即使失去了一切，你还握有未来<br>——王尔德',
    '谁也无法那么精准的预料未来，所以我们才要好好的过好当下',
    '最不聪明的人，是用曾经的爱情，惩罚未来的自己<br>——苏芩',
    '时间永远分岔，通向无数的未来<br>——博尔赫斯《小径分岔的花园》',
    '当下每一次想要努力的念头，都有可能是未来的你在向现在的你求救',
    '期待是一种半清醒半疯狂的燃烧，使焦灼的灵魂幻觉自己生活在未来',
    '与其未来在互相埋怨中将爱意慢慢消磨掉 不如放开彼此 才是最好的选择',
    '未来一定很好，即使现在有诸多不幸，总有不期而遇的温柔和生生不息的希望',
    '我们笑着说再见 却深知再见遥遥无期 愿我们在没有彼此参与的世界里熠熠生辉',
    '我现在身处的远方，是彼方的希冀，承载梦想与未来，与青涩告别，以荆棘磨砺成长',
    '遇见都是天意，拥有的都是幸运，世界上有一千种等待，最好的那种叫未来可期',
    '以前我总说把要处理的事情交给未来的我，现在身为未来的我要处理以前说过的事情',
    '情人眼里出的不都是西施，还有英雄，和风雨未来<br>——高台树色《穿堂惊掠琵琶声》',
    '你所浪费的今天是昨天死去的人奢望的明天；你所厌恶的现在是未来的你回不到的曾经',
    '讲过去像是在卖惨 讲未来像是在做白日梦 讲现在又是当局者迷 迟迟无语 字字苦酸',
    '所有随风而逝的都属于昨天，所有历经风雨留下来的才是面向未来的<br>——玛格丽特・米切尔《飘》',
    '有时，我感到过去和未来在两边施加了太大的压力，以至于没有任何空间留给当下<br>——伊夫林·沃',
    '放弃未来对我们来说这还太早了点， 幸福的未来一定是在永不放弃的前方！<br>——《爱丽丝学园》',
    '班里很乱，你在嘈杂下看着窗外想着未来，桌子上的书放的很高，以至于你看不到黑板也看不到未来',
    '一想起那些将要见到的人、将要做完的事、将要成为的自己，就觉得未来可期，来日方长，人生真漂亮',
    '忍受日复一日的重复，因为抱有希望，未来会有个小小的缺口，是没重复过的<br>——周云蓬《月光蒲扇》',
    '永远不要只看见前方路途遥远，而忘了自己坚持多久才走到这里。今天尽力做的，虽然辛苦，但未来发生的，都是礼物',
    '不必太纠结于当下，也不必太忧虑未来，当你经历过一些事情的时候，眼前的风景已经和从前不一样了<br>——村上春树',
    '欣逢盛世，当不负盛世，新时代的青年沐浴在新时代的春风里，我们要向着红旗指引的方向，以实干笃定前行，以奋斗开启未来',
    '当回忆过于厚重，不如让往事随风。向所有发生过的美好的事认真告别，并永远相信那些美好将源源不绝。阔别过往，未来可期',
    '顺利的话，我们会结婚，会有一个可爱的宝宝，会一起去看海，会一起去看黄昏，嗯还会有一个让所有人羡慕的未来。如果不顺利的话，那就晚点',
    '一个没有实现的愿望所带来的痛苦，远远小于因后悔遗憾而带来的痛苦。因为前者面对的是无限广阔的开放未来，后者却是无法挽回的过去<br>——叔本华',
    '得到答案的那些瞬间实在是太美好了，能坦然的嘲笑过去，也能充分的意识到自己的珍贵和可爱，继而又对未来充满各样的憧憬，由衷的感叹这时光可真好',
    '未来也许并不完全是我们所期望的那个样子，但是如果没有我们投入其中的那些期望和努力，这未来就会是另一个样子，是我们更加无法接受的样子<br>——罗新《批判、怀疑与想象力》',
    '世事从来就是如此，当我们被悲痛压垮、觉得未来一片漆黑的时候，指引我们命运的天命会在意外之处为我们再度撒播光明，让我们重回生活的正轨<br>——扬·波托茨基《萨拉戈萨手稿》',
    '年幼的你坐在门前石阶上等太阳西沉 看着邻家小孩在跳皮筋 等母亲从窗口探出头来说回家吃饭 卡通片总是如约而至 那时你觉得时间可以是很慢的东西 那时你觉得还会有无限可能的未来',
    '我曾经以为日子是过不完的，未来是完全不一样的。现在，我就呆在我自己的未来，我没有发现自己有什么真正的变化，我的梦想还像小时候一样遥远，唯一不同的是我已经不打算实现它了<br>——王朔《我的几个国庆节》',
    ];
    //日记文案（日期等于今日）
    let soulB = [
        '等待你的十八岁，完成我们的约定<br>仅以此站纪念我的童年，那是一段小有遗憾的幸福时光',
        '频繁记录着，因为生活值得<br>今天又遇到了什么无法理解的心事呢？',
        '走过的都是经历，写下的都是故事<br>把开心的和难过的都记下来吧，让它们都存在今后~',
    ];
    //过去的文案（日期小于今日）
    let soulC = [
        '过去的时光，便让它过去吧~',
        '总有一句诗词，不经意读来，还是触动了心灵,总有一些记忆，不经意间回想，让人难以释怀'
    ];