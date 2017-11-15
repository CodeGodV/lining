var zhdl = $(".p1 span");
zhdl.eq(0).click(function(){
	$(".zh").css("display","block");
	$(".sj").css("display","none");
	$(this).css("border-bottom","5px solid #ee2737").siblings().css("border-bottom","5px solid #e2e2e2");
	
})
zhdl.eq(1).click(function(){
	$(".zh").css("display","none");
	$(".sj").css("display","block");
	$(this).css("border-bottom","5px solid  #ee2737").siblings().css("border-bottom","5px solid #e2e2e2");
})

function yzm(){
		var arr = [];
		for(var i=0;i<6;i++){
			var code = getRand(48,122);
			if(code>=58&&code<=64||code>=91&&code<=96){
				i--;
			}else{
				arr.push(String.fromCharCode(code));
			}
		}
		return arr.join("");
	}
var sp = $(".zh").find("span");
var spp = $(".sj").find("span");
sp.html(yzm());
spp.html(yzm());
sp.click(function(){
	$(this).html(yzm());
})
spp.click(function(){
	$(this).html(yzm());
})

 