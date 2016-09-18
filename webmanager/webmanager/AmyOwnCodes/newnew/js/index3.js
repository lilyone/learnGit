$(function(){
	function getIndex3_Data(){
		$.ajax({
			type:"get",
			url:"dataJson/index3/duihuan.txt",
			async:true,
			success:function(data){
				for(var i=0;i<33;i++){
	                loadProducts(data[i]);
	          	}
				for(var i=33;i<data.length;i++){
	                loadProducts2(data[i]);
	            }
			},
			dataType:"json"
		});
	}
	
	
	var index3_pro = document.getElementById("index3_pro");
	function loadProducts(dataObj){
		//把商品信息显示在页面中	
		var html = "<li><div class=\"index3_t_pic\"><a href=\"#\"><img src=\"img/"+dataObj.imgSrc+"\"/></a>";
		html+="</div><p class=\"index3_t_about\">"+dataObj.proAbout+"</p>";	
		html+="<p class=\"index3_t_price\">"+dataObj.proPrice+"</p><div class=\"index3_t_btn\">";
		html+="<button><img src=\"img/"+dataObj.btnImg+"\"/></button></div></li>";
		index3_pro.innerHTML+=html;				
	}
	getIndex3_Data();
	
	
//	function getIndex3_t_Data(){
//		$.ajax({
//			type:"get",
//			url:"dataJson/index3/duihuan.json",
//			async:true,
//			success:function(data){
//				for(var i=33;i<data.length;i++){
//	                loadProducts(data[i]);
//	           }
//			},
//			dataType:"json"
//		});
//	}
	var index3_pro2 = document.getElementById("index3_pro2");
	function loadProducts2(dataObj){
		//把商品信息显示在页面中	
		var html = "<li><div class=\"index3_t_pic\"><a href=\"#\"><img src=\"img/"+dataObj.imgSrc+"\"/></a>";
		html+="</div><p class=\"index3_t_about\">"+dataObj.proAbout+"</p>";	
		html+="<p class=\"index3_t_price\">"+dataObj.proPrice+"<del>"+dataObj.priceDel+"</del></p><div class=\"index3_t_btn\">";
		html+="<button><img src=\"img/"+dataObj.btnImg+"\"/></button></div></li>";
		index3_pro2.innerHTML+=html;				
	}
//	getIndex3_t_Data();
})



//function getData(pageindex){
//  $.ajax({
//      url:"/product/GetProductsByPage_get",
//      data:{
//          "pagesize":30,
//          "pageindex":pageindex
//      },
//      success:function(data){
//          clearContent();
//          for(var i=0;i<data.length;i++){
//              var dataObj=JSON.parse(data[i].Data);
//              loadImg(dataObj);
//          }
//          judge(pageindex);
//          changeStyle(pageindex);
//      },
//      dataType:"json"
//  });
//}
