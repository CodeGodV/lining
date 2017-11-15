var nav = $("#nav ul");
var navxl = $("#navxl");
var nanzi = $(".nanzi");
var list = nav.find("li");
//nav鼠标划入事件
for(let i=0;i<list.length;i++){
	list.eq(i).mouseover(function(){
		$(this).css("background","#f7f7f7");
		$(this).find("a").css("color","#f05133");
		if(!$(this).find("img").hasClass("img3")){			
			$(this).find("img").prop("src","img/hongsan.png");
		}	
	})
	list.eq(i).mouseout(function(){
		$(this).css("background","black");
		$(this).find("a").css("color","white");
		if(!$(this).find("img").hasClass("img3")){			
			$(this).find("img").prop("src","img/whitesan.png");
		}
	})
	list.eq(2).mouseenter(function(){
		navxl.css("display","block");
		nanzi.css("display","block");
	})
	/*list.eq(2).mouseleave(function(){		
		setTimeout(function(){
			if(navxl.mouseenter()){
				navxl.mouseenter(function(){
					alert(1)
					navxl.css("display","block");
					nanzi.css("display","block");
				})
			}else if(!navxl.mouseenter()){
				alert();
				navxl.css("display","none");
				nanzi.css("display","none");
			}
		},1000)		
	})*/
	
	list.eq(2).mouseleave(function(){
		navxl.css("display","none");
		nanzi.css("display","none");
	})
}


//banner轮播效果
var banner = $("#banner");
//var timer = setInterval(AutoPlay,2000);
var index = 0;
var slist = $(".dian span");
var ulist = $("#banner ul");
function AutoPlay(){
	
	slist.eq(index).addClass("red").siblings().removeClass("red");
	console.log(index);
	ulist.animate({marginLeft:-index*1280},1000)
	index++;
	if( index == slist.size() ){
    		index = 0;
    	}
}

banner.mouseenter(function(){
	$(".left").css("display","block");
	$(".right").css("display","block");
})

	$(".right").click(function(){
		$("#banner ul").animate({marginLeft:-1280},1000,function(){
			$("#banner ul").css("margin-left",0)
				   .find("li:first")
				   .appendTo("#banner ul");
		})
	})
	$(".left").click(function(){
		$("#banner ul").css("margin-left",-1280)
			   .find("li:last")
			   .prependTo("#banner ul");
		$("#banner ul").animate({marginLeft:0},1000)
	})


banner.mouseleave(function(){
	$(".left").css("display","none");
	$(".right").css("display","none");
})


//关注李宁
var dlist = $("#GZ div");
var mgr=[];
for(let i=0;i<dlist.length;i++){
	dlist.eq(i).mouseenter(function(){
		mgr = [];
		var str = $(this).find("img").attr("src");
		arr = str.split("-");
		console.log(arr[1]);
		$(this).find("img").prop("src","img/list-"+arr[1]+"-active.png");
	})
	dlist.eq(i).mouseleave(function(){
		if(arr[1]!="lining"){
			$(this).find("img").prop("src","img/list-"+arr[1]+"-normal.png");
		}		
	})
}
var lt = $(".lt");
var rt = $(".rt");
var flag = true;
lt.click(function(){
	if(flag){
		flag = false;
		$(".d1").hide(1000);
		$(".d2").show(1000);
	}else{
		flag = true;
		$(".d1").show(1000);
		$(".d2").hide(1000);
	}
	
})
rt.click(function(){
	if(flag){
		flag = false;
		$(".d1").hide(1000);
		$(".d2").show(1000);
	}else{
		flag = true;
		$(".d1").show(1000);
		$(".d2").hide(1000);
	}
	
})

//吸顶
//var top = $("#top")
$(window).scroll(function(){
	console.log(typeof $(document).scrollTop())
	if(parseInt($(document).scrollTop())>0){	
		$("#top").css({"position":"fixed","top":0,"zIndex":1200});
		$("#nav").css({"position":"fixed","top":30,"zIndex":1200});	
	}else if(parseInt($(document).scrollTop())==0){
		$("#top").css({"position":""});
		$("#nav").css({"position":""});	
		
	}
	
	
})



