$(function(){
	$("#hSerach").on("click",function(){
		var proID = $("#proID").val();
		getIndexPro(proID);		
	})
	$("#PushProBtn").on("click",function(){
		var proID = $("#proID").val();
		var mesOfPro ={"Message": $("#imgFile").val()+"&"+$("#leftTitle").val()+"&"+$("#navTitle").val()+"&"+$("#pros1 #pImg").val()+"&"+$("#pros1 #pName").val()+"&"+$("#pros1 #pAbout").val()+"&"+$("#pros1 #pPrePrice").val()+"&"+$("#pros1 #pNowPrice").val()+"&"+$("#pros2 #pImg").val()+"&"+$("#pros2 #pName").val()+"&"+$("#pros2 #pAbout").val()+"&"+$("#pros2 #pPrePrice").val()+"&"+$("#pros2 #pNowPrice").val()+"&"+$("#pros3 #pImg").val()+"&"+$("#pros3 #pName").val()+"&"+$("#pros3 #pAbout").val()+"&"+$("#pros3 #pPrePrice").val()+"&"+$("#pros3 #pNowPrice").val()+"&"+$("#pros4 #pImg").val()+"&"+$("#pros4 #pName").val()+"&"+$("#pros4 #pAbout").val()+"&"+$("#pros4 #pPrePrice").val()+"&"+$("#pros4 #pNowPrice").val()+"&"+$("#pros5 #pImg").val()+"&"+$("#pros5 #pName").val()+"&"+$("#pros5 #pAbout").val()+"&"+$("#pros5 #pPrePrice").val()+"&"+$("#pros5 #pNowPrice").val()+"&"+$("#pros6 #pImg").val()+"&"+$("#pros6 #pName").val()+"&"+$("#pros6 #pAbout").val()+"&"+$("#pros6 #pPrePrice").val()+"&"+$("#pros6 #pNowPrice").val()+"&"+$("#pros7 #pImg").val()+"&"+$("#pros7 #pName").val()+"&"+$("#pros7 #pAbout").val()+"&"+$("#pros7 #pPrePrice").val()+"&"+$("#pros7 #pNowPrice").val()+"&"+$("#pros8 #pImg").val()+"&"+$("#pros8 #pName").val()+"&"+$("#pros8 #pAbout").val()+"&"+$("#pros8 #pPrePrice").val()+"&"+$("#pros8 #pNowPrice").val()+"&"+$("#pros9 #pImg").val()+"&"+$("#pros9 #pName").val()+"&"+$("#pros9 #pAbout").val()+"&"+$("#pros9 #pPrePrice").val()+"&"+$("#pros9 #pNowPrice").val()+"&"+$("#pros10 #pImg").val()+"&"+$("#pros10 #pName").val()+"&"+$("#pros10 #pAbout").val()+"&"+$("#pros10 #pPrePrice").val()+"&"+$("#pros10 #pNowPrice").val()+"&"+$("#LeftAdImage").val()};
		pushPro(proID,mesOfPro);
	})
	
	
	function pushPro(proId,proInfo){
		var JsonMes = JSON.stringify(proInfo);
		$.ajax({
			type:"get",
			url:"http://localhost:8080/product/CreateUpdateProduct_get",
			data:{
				"id":proId,
				"datajson":JsonMes
			},
			success:function(data){
				alert("添加/修改成功！！！");
				$("#searchBody").css({"display":"none"});
			},
			dataType:"json"
		})
	}
	
	
	
	function getIndexPro(proId){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/product/GetProductById_get?id="+proId,
			async:true,
			success:function(data){
				if(data == "null"){
					$("#searchBody").css({"display":"none"});
					alert("无查询结果");
					
				}else{
					$("#searchBody").css({"display":"block"});
					var dataStr = JSON.parse(data).Data;
					var len = dataStr.length;
					var m = dataStr.substring(1,len-1)
					var dataArr =m.split(":");
					var picsLen = dataArr[1].length;
					var n = dataArr[1].substring(1,picsLen-1)
					var picArr = n.split("&");
					
					$("#imgFile").val(picArr[0]);
					$("#leftTitle").val(picArr[1]);
					$("#navTitle").val(picArr[2]);
					
					$("#pros1 #pImg").val(picArr[3]);
					$("#pros1 #pName").val(picArr[4]);
					$("#pros1 #pAbout").val(picArr[5]);
					$("#pros1 #pPrePrice").val(picArr[6]);
					$("#pros1 #pNowPrice").val(picArr[7]);
					
					$("#pros2 #pImg").val(picArr[8]);
					$("#pros2 #pName").val(picArr[9]);
					$("#pros2 #pAbout").val(picArr[10]);
					$("#pros2 #pPrePrice").val(picArr[11]);
					$("#pros2 #pNowPrice").val(picArr[12]);
					
					$("#pros3 #pImg").val(picArr[13]);
					$("#pros3 #pName").val(picArr[14]);
					$("#pros3 #pAbout").val(picArr[15]);
					$("#pros3 #pPrePrice").val(picArr[16]);
					$("#pros3 #pNowPrice").val(picArr[17]);
					
					$("#pros4 #pImg").val(picArr[18]);
					$("#pros4 #pName").val(picArr[19]);
					$("#pros4 #pAbout").val(picArr[20]);
					$("#pros4 #pPrePrice").val(picArr[21]);
					$("#pros4 #pNowPrice").val(picArr[22]);
					
					$("#pros5 #pImg").val(picArr[23]);
					$("#pros5 #pName").val(picArr[24]);
					$("#pros5 #pAbout").val(picArr[25]);
					$("#pros5 #pPrePrice").val(picArr[26]);
					$("#pros5 #pNowPrice").val(picArr[27]);
					
					$("#pros6 #pImg").val(picArr[28]);
					$("#pros6 #pName").val(picArr[29]);
					$("#pros6 #pAbout").val(picArr[30]);
					$("#pros6 #pPrePrice").val(picArr[31]);
					$("#pros6 #pNowPrice").val(picArr[32]);
					
					$("#pros7 #pImg").val(picArr[33]);
					$("#pros7 #pName").val(picArr[34]);
					$("#pros7 #pAbout").val(picArr[35]);
					$("#pros7 #pPrePrice").val(picArr[36]);
					$("#pros7 #pNowPrice").val(picArr[37]);
					
					$("#pros8 #pImg").val(picArr[38]);
					$("#pros8 #pName").val(picArr[39]);
					$("#pros8 #pAbout").val(picArr[40]);
					$("#pros8 #pPrePrice").val(picArr[41]);
					$("#pros8 #pNowPrice").val(picArr[42]);
					
					$("#pros9 #pImg").val(picArr[43]);
					$("#pros9 #pName").val(picArr[44]);
					$("#pros9 #pAbout").val(picArr[45]);
					$("#pros9 #pPrePrice").val(picArr[46]);
					$("#pros9 #pNowPrice").val(picArr[47]);
					
					$("#pros10 #pImg").val(picArr[48]);
					$("#pros10 #pName").val(picArr[49]);
					$("#pros10 #pAbout").val(picArr[50]);
					$("#pros10 #pPrePrice").val(picArr[51]);
					$("#pros10 #pNowPrice").val(picArr[52]);
					
					$("#LeftAdImage").val(picArr[53]);
					
				}		
			},
			error:function(){
				alert("ajax获取失败")
			}
		})
	}
	
	
	
	
})
