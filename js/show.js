var imgs=new Array();
var index = 0;
var describe = ["铃","衣","耳","山","寺","舞","柳","棋","发","酒","衣领",
"姨姨","婴儿","雨伞","钥匙","鹦鹉","窑炉","仪器","腰包","药酒","恶灵","鳄鱼",
"鹅鹅","耳塞","饿死","二胡","二流","耳机","恶霸","爱酒","三菱","山药","扇儿",
"闪闪","绅士","山屋","山路","山鸡","伞把","散酒","司令","司仪","柿儿","石山",
"石狮","饰物","死路","司机","丝帕","死狗","武林","五一","捂耳","午餐","武士",
"呜呜","物流","武器","五霸","午觉","榴莲","六一","牛耳","流沙","流石","锣鼓",
"溜溜","刘琦","喇叭","鹿角","麒麟","七一","企鹅","青山","骑士","骑虎","气流",
"漆器","奇葩","气球","巴黎","八一","靶儿","巴萨","巴士","白虎","八路","白旗",
"爸爸","芭蕉","精灵","球衣","球儿","旧伞","教师","旧屋","酒楼","酒器","酒吧",
"舅舅","铃铃","灵药","灵儿","灵山","零食","领舞","领路","令旗","篱笆","菱角"];

window.onload= function(){
	var touchL = document.getElementById('touchLeft');
	var touchR = document.getElementById('touchRight');
	var toL = document.getElementById('toleft');
	var toR = document.getElementById('toright');
	var imgShow = document.getElementById("img");
	var divText = document.getElementById("imgText");
	var aText = divText.getElementsByTagName("p");
	var searchText = document.getElementById("searchText");
	var searchBtn = document.getElementById("searchBtn");
	
	var indexString = indexToString(index , indexString);
	aText[0].innerHTML = indexString;
	
	aText[1].innerHTML = describe[index];
	
	toL.onmouseover = touchL.onmouseover = function(){
		toL.style.display = "block";
	}
	
	touchL.onmouseout = function(){
		toL.style.display = "none";
	}
	
	toR.onmouseover = touchR.onmouseover = function(){
		toR.style.display = "block";
	}
	
	touchR.onmouseout = function(){
		toR.style.display = "none";
	}
	
	addImgs(imgs);
	
	toR.onclick = function(){
		index++;
		if(index == 110){
			index = 0;
		}
		imgShow.src = 'img/' + imgs[index];
		var indexString = indexToString(index , indexString);
		aText[0].innerHTML = indexString;
		aText[1].innerHTML = describe[index];
	}
	
	toL.onclick = function(){
		index--;
		if(index == -1){
			index = 109;
		}
		imgShow.src = 'img/' + imgs[index];
		var indexString = indexToString(index , indexString);
		aText[0].innerHTML = indexString;
		aText[1].innerHTML = describe[index];
	}

	searchText.onfocus = function(){
		searchText.value = "";
	}
	
	searchText.onblur = function(){
		if(searchText.value.length<1){
			searchText.value = "请输入数字";
		}	
	}
	
	searchBtn.onclick = function(){
		var numt = searchText.value;
		var num = numToZeroBefore(numt, num);
		var numString = indexToString(num , numString);
		if(parseInt(numt) < 0 || parseInt(numt) > 109){
			alert("请输入正确数字");
		}
		else{
			imgShow.src = 'img/' + imgs[num];
			aText[0].innerHTML = numString;
			aText[1].innerHTML = describe[num];
			index = num;
		}
	}
}

function addImgs(aImg){
	for(var i = 0; i<=109; i++){
		aImg[i] = "images" + i + '.jpg';
	}
}

//图片序号转换为图片编号字符串
function indexToString(index , indexString){
	switch(index){
		case 100:
			indexString = '00';
			break;
		case 101:
			indexString = '01';
			break;	
		case 102:
			indexString = '02';
			break;	
		case 103:
			indexString = '03';
			break;	
		case 104:
			indexString = '04';
			break;	
		case 105:
			indexString = '05';
			break;	
		case 106:
			indexString = '06';
			break;	
		case 107:
			indexString = '07';
			break;	
		case 108:
			indexString = '08';
			break;	
		case 109:
			indexString = '09';
			break;	
	}
	if(index < 100){
		indexString = index.toString();
	}
	return indexString;
}

//搜索框输入的字符串转换为图片编号数字
function numToZeroBefore(indexText , num){
	num = 0;
	switch(indexText){
		case "00":
			num = 100;
			break;
		case "01":
			num = 101;
			break;	
		case "02":
			num = 102;
			break;	
		case "03":
			num = 103;
			break;	
		case "04":
			num = 104;
			break;	
		case "05":
			num = 105;
			break;	
		case "06":
			num = 106;
			break;	
		case "07":
			num = 107;
			break;	
		case "08":
			num = 108;
			break;	
		case "09":
			num = 109;
			break;	
	}
	if(num < 100){
		num = parseInt(indexText);
	}
	return num;
}









