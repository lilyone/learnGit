function getXmlHttpRequest(){
				//兼容
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

//注册   api/Users?name={name}&password={password}
function doAjaxRegistPost(url){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("post",url,true);    //json  //接口为api/Users
				
	xhr.send();
				
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){	
			if(xhr.status==200){
				var result =xhr.responseText;
				alert(result);	//返回1说明成功  -1说明失败
			}else{
				alert("未获取！");
			}
		}
	}
}
//Get
	function doAjaxGet(url,callBack,faliFn){
		//获取XMLHttpRequest对象（兼容）
		var xhr;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}	
		
		
		xhr.open("get",url,true);
		
		xhr.send();
					
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){	
				if(xhr.status==200){
					var result = xhr.responseText;  //成功的话处理得到的结果
					callBack(result);							
				}else{
					if(faliFn){
                    	faliFn();
                	}
				}
			}
		}
	}
