$(function(){
	//取
	$("button").on("click",function(){
		//ad——show
//		$.ajax({
//			type:"get",
//			url:"http://localhost:8080/product/GetProductById_get?id=AD_show",
//			async:true,
//			success:function(data){
//				var dataStr = JSON.parse(data).Data;
//				var len = dataStr.length;
//				var m = dataStr.substring(1,len-1)
//				var dataArr =m.split(":");
//				var picsLen = dataArr[1].length;
//				var n = dataArr[1].substring(1,picsLen-1)
//				var picArr = n.split("&");
//				
//				for(var i=0;i<4;i++){
//					alert(picArr[i])
//				}
//				
//			}
//		});
//	})
/*---获取首页商品--------------------------------------------------------------*/
	
	$.ajax({
			type:"get",
			url:"http://localhost:8080/product/GetProductById_get?id=index_Pro爆款",
			async:true,
			success:function(data){
				var dataStr = JSON.parse(data).Data;
				
				var len = dataStr.length;
				var m = dataStr.substring(1,len-1)
				var dataArr =m.split(":");
				var picsLen = dataArr[1].length;
				var n = dataArr[1].substring(1,picsLen-1)
				var picArr = n.split("&");
				
				for(var i=0;i<picArr.length;i++){
					console.log(picArr[i]);
				}
				
			}
		});


			//存
			$("button").on("click",function(pro_Id,mes){
				//Data里面的内容
//				var mm = {"Message":"1.jpg&2.jpg&3.jpg&4.jpg"};
				var message={"Message":"牛排.jpg&进店必败&爆款推荐&p001.jpg&大象牙芒果1粒装约&果肉坚实细腻浓香清&￥19.8&￥32.0&p002.jpg&本来生活翡翠生虾&&￥189.0&￥232.0&p003.jpg&冰鲜三文鱼段200g/袋&冰鲜爽口 鲜嫩美味&￥39.90&￥42.0&p004.jpg&高德莱柬埔寨香米&&￥52&&p005.jpg&舟山带鱼段&果肉坚实细腻浓香清&￥19.8&￥32.0&p006.jpg&伊利金典纯牛奶&果肉坚实细腻浓香清&￥19.8&￥32.0&p001.jpg&呼伦贝尔牛肉呼盟肉块&果肉坚实细腻浓香清&￥19.8&￥32.0&p007.jpg&西班牙进口猪肋排2KG&果肉坚实细腻浓香清&￥19.8&￥32.0&p008.jpg&本来散养土鸡卵&果肉坚实细腻浓香清&￥19.8&￥32.0&p009.jpg&深海银鳕鱼片（犬牙）&高级白鱼肉嫩刺少&￥188.6&￥232.0&xian1.jpg&时令鲜蔬&佳沛&鳕鱼&三文鱼&进口牛奶&荷美尔&进口啤酒&坚果"};
				var nn =JSON.stringify(message)
				$.ajax({
					type:"get",
					url:"http://localhost:8080/product/CreateUpdateProduct_get",
					data:{
						"id":"index_Pro",
						"datajson":nn
					},
					success:function(data){
						alert(1);
					},
					dataType:"json"
				});
			})	
			
			
	
})	
	
	
	
})
