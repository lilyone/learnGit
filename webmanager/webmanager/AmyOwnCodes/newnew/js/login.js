$(function(){
		if(userFlag == 1){
			$("#user_of_me").text(name_user);
			$("#user_of_me").addClass("red");
		}
		
/*--------登录验证开始--------------------------------------------------------*/	
		var userFlag = 0;
		//验证用户名
		$("#name_txt").on("blur",function(){
			var  userName = $("#name_txt").val();
			CheckUserName(userName);	
		})
		//验证邮箱和手机号格式
		function CheckUserName(name_user) {
		 	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//邮箱
		 	var filter2 = /^[1][358][0-9]{9}$/;//手机号
		 	if (filter.test(name_user) || filter2.test(name_user)){
		 		//验证用户名是否存在
		 		$.ajax({
					type:"get",
					url:"http://localhost:8080/user/CheckUserNameGet?username="+name_user,
					async:true,
					success:function(data){
						//alert(data);
						
						if(data != 1){//存在返回1
							$(".l_box em.login_ok.name_user").css({"background":"url(img/no.png) no-repeat"});
							$(".user_mes").text("用户不存在，请注册后登陆！")
						}else{
							$("#user_of_me").text(name_user);
							$("#user_of_me").addClass("red");
							userFlag = 1;
						}
					},
					dataType:"json"
				});
		 	}else {
		 		$(".l_box em.login_ok.name_user").css({"background":"url(img/no.png) no-repeat"});
				$(".user_mes").text("账号格式不正确，请重新输入！");
				return;
			}
		} 	
	
		//验证登录
		$("#submit_btn").on("click",function(){
			var  userName = $("#name_txt").val();
			var  userPass = $("#pass_txt").val();
			$.ajax({
				type:"post",
				url:"http://localhost:8080/user/login",
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
					if(data != 1){//正确返回1
						$(".l_box em.login_ok.name_user").css({"background":"url(img/no.png) no-repeat"});
						$(".l_box em.login_ok.pas_user").css({"background":"url(img/no.png) no-repeat"});
						$(".pas_mes").text("用户名或者密码错误！")
					}else{
						window.localStorage.setItem("clientName",userName);
						window.location.href="index.html";
					}
				},
			});
		})
/*----------登录验证结束--------------------------------------------*/	
/*----------注册验证开始-----------------------------------------*/

/*----------注册验证结束----------------------------------------*/
	
	
})