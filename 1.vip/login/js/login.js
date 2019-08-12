function login(){
	var usn = document.getElementById('username').value;
	var psw = document.getElementById('password').value;

	var users = getCookie("registerUser"); // 取出所有已经注册的用户
	users = convertStrToObj(users); // 将从cookie中取出的users字符串转化成对象
	if(users[usn] == psw){
		setCookie("loginedUser", usn, 7,"/");
		window.location.href = "../index/index.html";
	} else {
		alert("您输入的用户名或密码有误");
	}
}
function convertStrToObj(str){
				if(str === ""){
					return {};
				}
				var arr = str.split(':');
				var result = {};
				for(var i = 0; i < arr.length; i++){
					var data = arr[i].split(',');
					result[data[0]] = data[1];
				}
				return result;
			}


$(function(){
			$(".login_l a").hover(
			function(){
				$(this).css({color:"red",textDecoration:"underline"})
				
			},function(){
				$(this).css({color:"black",textDecoration:"none"})
				
			});
			$(".inpBox3").click(function(){
				login();
				
			});
			
			
		})
	