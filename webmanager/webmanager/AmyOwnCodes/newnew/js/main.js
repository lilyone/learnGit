$(window).scroll( function() { 
	//回到顶部
	if($("body").scrollTop()>500){
		$(".to_top").css({"visibility":"visible"});
	}else{
		$(".to_top").css({"visibility":"hidden"});
	}

} );


$(function(){
	//用户状态
	var registUser = window.localStorage.getItem("clientName");
	if(registUser!=null){
		$(".h_left").html("欢迎您，<a href=\"#\">"+registUser+"</a><div id=\"exit\"><a href=\"javascript:;\">[退出]</a></div>");	
		$("#exit").children("a").on("click",function(){
			window.localStorage.removeItem("clientName");
			$(".h_left").html("<span>您好，</span>请<span id=\"user_of_me\"><a href=\"login.html\">[登录]</a><a href=\"regist.html\">[注册]</a><a href=\"#\">[机构会员]</a></span>");
		})
	}

	
	/*-----H_banner--------------*/
	var timer;
	timer = setInterval(function(){
		$("#h_banner li").first().appendTo($("#h_banner"));
	},1000)
	/*---mainBanner----------------*/
	var $picList =  $(".bannerBox");
	var $picLi = $(".bannerBox li");
	var $pointList = $("#banner_nav");
	var $pointlis = $("#banner_nav li");
	var picLen = $pointlis.length;
	var timerBanner;
	var activeIndex = 0;
	for (var b = 0; b < picLen; b++) {
		$picLi.eq(b).css("z-index",picLen - b);
	}
	$pointlis.click(function(){
		var $index = $(this).index();
		activeIndex = $index;
		fadeFn($index);
	})

	function fadeFn(num){
		$picLi.eq(num).fadeIn(1000).siblings().fadeOut(1000);
		$pointlis.eq(num).addClass("active").siblings().removeClass("active");
	}
	autoplay();
	//自动播放
	function autoplay(){
		timer = setInterval(function(){
			activeIndex++;
			if(activeIndex == picLen){
				activeIndex = 0;
			}
			fadeFn(activeIndex);
		},4000)
	}
	//头部banner 下的AD——show
	getTopAd("AD_show");
	var pro_firstShow = document.getElementById("pro_firstShow");
	function getTopAd(proId){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/product/GetProductById_get?id="+proId,
			async:true,
			success:function(data){
				var dataStr = JSON.parse(data).Data;
				var len = dataStr.length;
				var m = dataStr.substring(1,len-1)
				var dataArr =m.split(":");
				var picsLen = dataArr[1].length;
				var n = dataArr[1].substring(1,picsLen-1)
				var picArr = n.split("&");
				for(var i = 0;i<picArr.length;i++){
					var html = "<div><a href=\"#\"><img src=\"img/"+picArr[i]+"\"/></a></div>";
					if(pro_firstShow){
						pro_firstShow.innerHTML+=html;
					}
					
				}				
			}
		});
	}
		
	
/*------首页商品主题加载-------------------------------------------------------------------------------------------*/
	getIndexPro("indexPro爆款");
	getIndexPro("indexPro水果");
	getIndexPro("indexPro菌蔬");
	getIndexPro("indexPro水产");
	getIndexPro("indexPro肉禽蛋品");
	getIndexPro("indexPro居家优选");
	getIndexPro("indexPro休闲零食");
	getIndexPro("indexPro酒水茶饮");
	var productsLoade = document.getElementById("products");
	function getIndexPro(proId){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/product/GetProductById_get?id="+proId,
			async:true,
			success:function(data){
				var dataStr = JSON.parse(data).Data;
				
				var len = dataStr.length;
				var m = dataStr.substring(1,len-1)
				var dataArr =m.split(":");
				var picsLen = dataArr[1].length;
				var n = dataArr[1].substring(1,picsLen-1)
				var picArr = n.split("&");
				
				var html ="<div class=\"products_index container\"><div class=\"products_top\">";
				html+="<a href=\"#\"><img src=\"img/"+picArr[0]+"\"/></a></div>";
				html+="<div class=\"products_top_about\"><div class=\"top_nav\"><div class=\"tital_ad\">";
				html+="<a href=\"#\"><span class=\"icon_top\"></span>"+picArr[1]+"</a></div><ul><li class=\"on\">";
				html+="<a href=\"#\" class=\"title_s\">"+picArr[2]+"</a><div class=\"hot_buy_list\"><dl><dt>";
				html+="<a href=\"#\"><img src=\"img/"+picArr[3]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[4]+"</span><span class=\"pro_tedian\">"+picArr[5]+"</span></a></p>";
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[6]+"</span><del class=\"before_price\">"+picArr[7]+"</del></em><div class=\"car_icon\"></div>";	
				
				html+="</dd></dl><dl><dt><a href=\"#\"><img src=\"img/"+picArr[8]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[9]+"</span><span class=\"pro_tedian\">"+picArr[10]+"</span></a></p>";	
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[11]+"</span><del class=\"before_price\">"+picArr[12]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[13]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[14]+"</span><span class=\"pro_tedian\">"+picArr[15]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[16]+"</span><del class=\"before_price\">"+picArr[17]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[18]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[19]+"</span><span class=\"pro_tedian\">"+picArr[20]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[21]+"</span><del class=\"before_price\">"+picArr[22]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
											
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[23]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[24]+"</span><span class=\"pro_tedian\">"+picArr[25]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[26]+"</span><del class=\"before_price\">"+picArr[27]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[28]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[29]+"</span><span class=\"pro_tedian\">"+picArr[30]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[31]+"</span><del class=\"before_price\">"+picArr[32]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[33]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[34]+"</span><span class=\"pro_tedian\">"+picArr[35]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[36]+"</span><del class=\"before_price\">"+picArr[37]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[38]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[39]+"</span><span class=\"pro_tedian\">"+picArr[40]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[41]+"</span><del class=\"before_price\">"+picArr[42]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[43]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[44]+"</span><span class=\"pro_tedian\">"+picArr[45]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[46]+"</span><del class=\"before_price\">"+picArr[47]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				
				html+="<dl><dt><a href=\"#\"><img src=\"img/"+picArr[48]+"\"/></a></dt><dd><p class=\"pro_about\"><a href=\"#\">";
				html+="<span class=\"pro_name\">"+picArr[49]+"</span><span class=\"pro_tedian\">"+picArr[50]+"</span></a></p>";							
				html+="<em class=\"pro_price\"><span class=\"now_price\">"+picArr[51]+"</span><del class=\"before_price\">"+picArr[52]+"</del></em><div class=\"car_icon\"></div></dd></dl>";
				html+="</div></li></ul></div>";
				
				html+="<div class=\"pro_left\"><dl><dt><a href=\"#\"><img src=\"img/"+picArr[53]+"\"/></a></dt><dd>";
				html+="<a href=\"#\">时令鲜蔬</a><a class=\"mm\" href=\"#\">佳沛香果</a><a href=\"#\">高档食材</a><a href=\"#\" class=\"no_margin\">爽口瓜果</a>";
				html+="<a href=\"#\">软糯芒果</a><a href=\"#\">大红苹果</a><a href=\"#\">多汁桃子</a><a href=\"#\" class=\"no_margin\">泰国椰青</a>";
				html+="</dd></dl></div><div class=\"pro_right\"></div></div></div>";	
				if(productsLoade){
					productsLoade.innerHTML+=html;
				}
				
			}
		});

	}
	addst();
	function addst(){
		$(document).on("click",".car_icon",function(event){
					var event = event || window.event;
					event.stopPropagation();
					console.log(event.target)
					//1.侧边栏购物车发生计数 和背景变化
					var nowNum =Number($("#to_buy #pro_count").text())+1;
					$("#to_buy #pro_count").text(nowNum);
					$("#to_buy").css({"background":"url(img/carNow.gif) no-repeat -13px -1px","border":"1px solid #91be16","border-left":"0px"});
					$("#goodsIncar").css({"display":"block"}).animate({
						left:"-301px"
					},1000).animate({
						left:"-300px"
					},2000).animate({
						left:"50px"
						
					},500)
					
					
					var productInfo = new Object();
					productInfo.count = 1;
					productInfo.img = $(this).parent().siblings().children().children().attr("src");
					productInfo.proName = $(this).siblings(".pro_about").children().children(".pro_name").text();
					productInfo.about = $(this).siblings(".pro_about").children().children(".pro_tedian").text();
					productInfo.price = $(this).siblings(".pro_price").children(".now_price").text().substring(1);
					productInfo.totalPrice = productInfo.price;
					$("#goodsIncar img").attr("src",productInfo.img);
					$("#goodsIncar dd p").text(productInfo.proName+productInfo.about);
					$("#goodsIncar #nowPrice").text(productInfo.price)
					
					
							var flag=0;
							for(var j=0;j<arrProducts.length;j++){
								if(arrProducts[j].proName==productInfo.proName){
									arrProducts[j].count+=1;
									arrProducts[j].totalPrice=(arrProducts[j].count*parseFloat(arrProducts[j].price)).toFixed(2);
									flag=1;//购物车已有此商品
								}
							}
							if(flag==0){//购物车无此商品
								arrProducts.push(productInfo);
							}
							var strProducts = JSON.stringify(arrProducts);
							setCookie("cartCookie",strProducts,30);		
				})

	}
	
/*---------首页商品加载结束-------------------------------------------------------------------------*/	
/*---------购物车开始-------------------------------------------------------------*/
		//页面
		var products = getCookie("cartCookie");
		var arrProducts = [];//存放所有商品；
		var totalProNUM =0;
		if(products.length>0){
			arrProducts=JSON.parse(products);
			
			$("#to_buy").css({"background":"url(img/carNow.gif) no-repeat -13px -1px","border":"1px solid #91be16","border-left":"0px"});
			for(var j=0;j<arrProducts.length;j++){
				totalProNUM+=arrProducts[j].count;
			}
			if(totalProNUM == 0){
				$("#to_buy").css({"background":"url(img/shoppingcar.gif) no-repeat -12px -1px","border":"1px solid #eee","border-left":"0px"});
				$(".totalChange").css({"display":"none"});
				$("#haveNoPro").css("display","block");
			}else{
				$(".totalChange").css({"display":"block"});
				$("#haveNoPro").css("display","none");
			}
			$("#to_buy #pro_count").text(totalProNUM);
		}
		
/*---------购物车结束-------------------------------------------------------------*/
	

	//list鼠标滑过事件
	var lists = document.getElementById("pro_list");
	var liList = lists.getElementsByTagName("li");
	var divList = lists.getElementsByTagName("div");
	for(var i=0;i<liList.length;i++){
		liList[i].index = i;
		liList[i].onmouseover =function(){
			for(var j=0;j<divList.length;j++){
				divList[j].className = "hide";
			}
			divList[this.index].className = "show";
		}
		
		liList[i].onmouseleave =function(){
			divList[this.index].className = "hide";
		}
	
		
	}
	

	var timer2;
	//bannerNavList
	$("#main_banner").on("mouseover",function(){
		$(".banner_nav li a").css({"height":"30px"});
		$(".banner_nav li a.no_active").css({"background":"#fff"});
		$("#banner_nav").css({"top":"370px","height":"30px"})
		
	})
	$("#main_banner").on("mouseleave",function(){
		$("#banner_nav").css({"top":"392px","height":"8px"})
	})
	

	//好评商品
	$(".hot_buy li").on("mouseover",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	
		var timer3 = setInterval(function(){
			$(".place_1").animate({
				'opacity':"0",
				'width':"30px",
				"height":"30px",
				left:"226px",
				top:"66px"
			},500).animate({
				'opacity':"1",
				'width':"10px",
				"height":"10px",
				left:"236px",
				top:"80px"
			},500)
		},1000)
	//买手力荐
	$(".place_1").on("click",function(){
		$(".biao").animate({
			"left":"229px",
			"top":"30px"
		},500)
		
	})
	$(".place_2").on("click",function(){
		$(".biao").animate({
			"left":"424px",
			"top":"18px"
		},500)
	})
	$(".place_3").on("click",function(){
		$(".biao").animate({
			"left":"614px",
			"top":"46px"
		},500)
	})
	$(".place_4").on("click",function(){
		$(".biao").animate({
			"left":"804px",
			"top":"22px"
		},500)
	})
	$(".place_5").on("click",function(){
		$(".biao").animate({
			"left":"1016px",
			"top":"36px"
		},500)
	})
	
	
	//products
	//好评商品
	$(".hot_buy li").on("mouseover",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	/*---------page2--------------------------------------------------------------------------------*/
	$(".pro_show").hover(
		function(){
			$(this).css({
				"top":"-3px"
			})
		},
		function(){
			$(this).css({
				"top":"3px"
			})
		}
	)
	
})
