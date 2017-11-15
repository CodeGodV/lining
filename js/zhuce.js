$(function(){
	$(".in8").focus(function(){
		$(".tishi").css("display","block");
		$(".tishi").html("4-40位字符，支持汉字、字母、非纯数字及“－”、“_”、“.”、“@”组合");
	})
	var flagNam = null;
	$(".in8").blur(function(){
		var reg = /^[-\.@\w\u4e00-\u9fa5]{4,40}$/;
		var str = $(this).val();
		if(reg.test(str)){
			flagNam = true;
			$(".tishi").html("用户名正确");
		}else{
			flagNam = false;
			$(".tishi").html("用户名不符合规范");
		}
	})
	
	$(".in3").focus(function(){
		$(".tishi").css("display","block");
		$(".tishi").html("密码是由6－20位字符组成，建议由字母，数字和符合两种以上组合");
	})
	
	$(".in3").blur(function(){
		var str = $(this).val();
		if( str.length < 6|| str.length>18 ){
			$("i").html("no");
			$("i").css("color","red");
			return;
		}
		var regNum = /\d+/;//包含数字
  		var regLetter = /[a-z]+/i;//包含字母
  		var regChar = /[\W_]+/; //包含特殊字符  		
  		var _regNum = /^\d+$/;//只包含数字
  		var _regLetter = /^[a-z]+$/i;//只包含字母
  		var _regChar = /^[\W_]+$/; //只包含特殊字符
  		if( regNum.test(str) && regLetter.test(str) && regChar.test(str) ){ //强
  			$("i").html("强");
  			$("em").eq(2).addClass("hong").siblings().removeClass("hong");
  		}else if( _regChar.test(str) || _regLetter.test(str) || _regNum.test(str) ){ //弱
  			$("i").html("弱");
  			$("em").eq(0).addClass("hong").siblings().removeClass("hong");
  		}else{
  			$("i").html("中");
  			$("em").eq(1).addClass("hong").siblings().removeClass("hong");
  		}	
	})
	$(".in9").blur(function(){
		var arr = $(this).val();
		var str = $(".in3").val();
		if(arr!=str){
			$(".tishi").html("密码不一致");
		}else{
			$(".tishi").html("确认成功");
		}
	})
	
	$(".in10").focus(function(){
		$(".tishi").css("display","block");
		$(".tishi").html("完成验证后，你可以用该手机号登录或找回密码");
	})
	
	
	var flagTel = null;
	$(".in10").blur(function(){
		var reg = /^1[358]\d{9}$/;
		var str = $(this).val();
		if(reg.test(str)){
			flagTel = true;
			$(".tishi").html("电话号码正确");
		}else{
			flagTel = false;
			$(".tishi").html("电话号码错误");
		}
	})
	
	
	function getRand(min,max){
		return Math.round( Math.random()*(max-min) + min );
	}
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
	$(".yan").html(yzm());
	$(".yan").click(function(){
		$(".yan").html(yzm());
	})
	$(".in4").blur(function(){
		var str = $(this).val();
		if($(".yan").html()==str){
			$(".tishi").css("display","block");
			$(".tishi").html("验证码正确");
		}else{
			$(".tishi").css("display","block");
			$(".tishi").html("验证码错误");
		}
	})
	
	var flagMail = null;
	$(".in11").blur(function(){
		var reg = /^\w+@\w+(\.\w+)+$/;
		var str = $(this).val();
		if(reg.test(str)){
			$(".tishi").css("display","block");
			$(".tishi").html("邮箱正确");
		}else{
			$(".tishi").css("display","block");
			$(".tishi").html("验证码错误");
		}
	})
		
})


$(".in6").click(function(){
	if($(".in6").prop("checked")){
		$(".in7").css("background","#ee2737")
	}else{
		$(".in7").css("background","#9fa0a0")
	}
})
