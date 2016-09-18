$(function(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/user/getAllUsers?callback=fn",
		async:true
	});
})
