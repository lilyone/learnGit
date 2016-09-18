$(function(){
		
		//注册获取验证码
		var timer;
		var s=10;
		$(".yanzhengma").on("click",function(){
			$(this).attr("disabled","disabled");
			clearInterval(timer)
			
			timer = setInterval(function(){
				
				$("input.yanzhengma").val(s+"秒后重新获取");
				s--;
				if(s<0){
					s=10;
					$("input.yanzhengma").removeAttr("disabled");
					clearInterval(timer)
					$("input.yanzhengma").val("获取验证码");
				}
			},800)
			
		})
/*--------注册验证开始--------------------------------------------------------*/	
		//验证用户名
		var userName;
		$("#name_txt").on("blur",function(){
		    userName = $("#name_txt").val();
			CheckUserName(userName);	
		})
		//验证手机号格式
		function CheckUserName(name_user) {
		 	var filter2 = /^[1][358][0-9]{9}$/;//手机号
		 	if (filter2.test(name_user)){
		 		//验证用户名是否存在
		 		$.ajax({
					type:"get",
					url:"http://localhost:8080/user/CheckUserNameGet?username="+name_user,
					async:true,
					success:function(data){
						if(data == 1){//存在返回1
							$(".l_box em.login_ok.name_user").css({"background":"url(img/no.png) no-repeat"});
							$(".user_mes.phone").text("用户已存在，请直接登陆！")
						}
					},
					dataType:"json"
				});
		 	}else {
		 		$(".l_box em.login_ok.name_user").css({"background":"url(img/no.png) no-repeat"});
				$(".user_mes.phone").text("手机号格式不正确，请重新输入！");
			}
		} 	
	

/*----------滑块开始-----------------------------------------*/
		var huabox = document.getElementById("huaBox");
		var green = document.getElementById("green");
		$("#hua").on("mousedown","div.huaBox",function(event){	
			console.log(green.offsetWidth)
			if(green.offsetWidth>=220){
				return;
			}
			var w = event.pageX - $("#huaBox").offset().left;
			$("#hua").on("mousemove","div.huaBox",function(event){
				
				//event.stopPropagation();
				var boxLeft = $("#hua").offset().left
				huabox.style.left = event.pageX-w-boxLeft+"px";
				green.style.width= event.pageX-w-boxLeft+"px";	
				if(green.offsetWidth>=244){
					green.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验证成功";
					huabox.style.left = "240px";
					green.style.width= 240+"px";
					$("#hua").off("mouseup");
					$("#hua").off("mousemove");
				}
			})
		})
		
		
		$("#hua").on("mouseup","div.huaBox",function(event){
			//event.stopPropagation();
			$("#hua").off("mousemove");	
			huabox.style.left = 0;
			green.style.width= 0+"px";
		})
		
/*----------滑块结束----------------------------------------*/
/*----------验证密码开始--------------------------------------*/
		$("#RegistPass_txt").on("blur",function(){
			var  userPass = $("#RegistPass_txt").val();
			CheckUserPass(userPass);	
		})
		
		function CheckUserPass(name_pass) {
		 	var filter = /^[0-9_a-zA-Z]{6,20}$/;//限制输入数字、字母、下划线，6-20长度，不能为空
		 	if (!filter.test(name_pass)){
		 		$(".user_mes.pas_regist").text("限制输入数字、字母、下划线，长度为6-20，不能为空")
		 		$(".l_box em.login_ok.pas_regist").css({"background":"url(img/no.png) no-repeat"});

		 	}else {
		 		$(".l_box em.login_ok.pas_regist").css({"background":"url(img/ok.png) no-repeat"});
		 		$(".user_mes.pas_regist").text("")
			}
		} 	
		
		$("#againPass_txt").on("blur",function(){
			var  userPass = $("#RegistPass_txt").val();
			var  reUserPass = $("#againPass_txt").val();
			if(userPass !== reUserPass){
				$(".user_mes.repas_regist").text("两次输入的密码不一致！");
				$(" em.login_ok.mmm_regist").css({"background":"url(img/no.png) no-repeat"});
			}else{
				$(".user_mes.repas_regist").text("");
				$(" em.login_ok.mmm_regist").css({"background":"url(img/ok.png) no-repeat"});
			}
		})
/*-----------验证密码结束------------------------------------*/
/*-----------注册开始---------------------------------------*/
		$("#regist_btn").on("click",function(){
			var  userName = $("#name_txt").val();
			var  userPass = $("#RegistPass_txt").val();
			$.ajax({
				type:"post",
				url:"http://localhost:8080/user/register",
				async:true,
				data:{
					"name":userName,
					"password":userPass
				},
				 headers: {
			        Accept: "Content-type; application/x-www-form-urlencoded"
			        
			    },
				dataType:"json",
				success:function(data){
					if(data == 1){//正确返回1
						alert("注册成功！");
						window.localStorage.setItem("clientName",userName);
						window.location.href="index.html";
					}
				},
			});
		})
/*-----------注册结束-----------------------------------*/

	
})