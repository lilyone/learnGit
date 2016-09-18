(function(){
	
	var pro_firstShow = document.getElementById("pro_firstShow");
		$.ajax({
			type:"get",
			url:"http://localhost:8080/product/GetProductById_get?id=AD_show",
			async:true,
			success:function(data){
				var dataStr = JSON.parse(data).Data;
				var len = dataStr.length;
				var m = dataStr.substring(1,len-1)
				var dataArr =m.split(":");
				var picsLen = dataArr[1].length;
				var n = dataArr[1].substring(1,picsLen-1)
				var picArr = n.split("&");
				alert(picArr)
				for(var i = 0;i<4;i++){
					var html = "<div><a href=\"#\"><img src=\"img/"+picArr[i]+"\"/></a></div>";
					pro_firstShow.innerHTML+=html;
				}				
			}
		});
})
