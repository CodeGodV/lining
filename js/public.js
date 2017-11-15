//获取任意区间值函数
function getRand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}
//随即获取颜色

function getColor(){
	var str="0123456789abcdef";
	var sty="#";
	for(var i=0;i<6;i++){
		sty+=str[getRand(0,15)];
	}
	return sty;
}
//根据id获取页面元素
//获取日期时间格式函数  封装  
function dateToString(now,sign){
	sign = sign || "-";
	var y = now.getFullYear();
	var m =toTow( now.getMonth()+1 );
	var d =toTow( now.getDate() );
	var h =toTow( now.getHours() );
	var mint =toTow( now.getMinutes() );
	var s =toTow( now.getSeconds() );
	return  y + sign + m + sign + d + " " + h + ":" + mint + ":" +s;
}
function toTow(num){
	return num < 10 ? "0"+num : num;
}

//字符串转日期时间格式
function stringToDate(str){
     return new Date(str);
}

//时间差
function diff(start,end){ 
	return Math.abs( start.getTime() - end.getTime() )/1000;
}
