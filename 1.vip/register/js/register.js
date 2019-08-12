
function hover1(a){//鼠标移到a，字变红，出现下划线
   	     $(a).hover(
			function(){
				$(this).css({color:"red",textDecoration:"underline"})
			},function(){
				$(this).css({color:"black",textDecoration:"none"})
				
			});
        }
function jd(a,b){//点击input框，变红
    	$(a).focus(function(){
               $(b).css({border:"1px solid red"});
         })
    	$(a).blur(function(){
               $(b).css({border:"1px solid #EDEDED"});              
         })
}





 function register(){
 	var usn = document.getElementById('username').value;
    var pwd = document.getElementById('password').value; 
    if(!usn){
					alert("用户名不能为空");
					return;
				}
    var mailinp=document.getElementById("username");
	var mail=mailinp.value;
	var res1=/\w+@\w+\.com$/;
	var res=res1.test(mail);
	if(res==false){
		           alert("格式不正确，请输入邮件格式！");
				   return;
	}
	var pswinp=document.getElementById("password");
	var psw=pswinp.value;
	var res1=/^\d{6,20}$/;
	var res=res1.test(psw);
	if(res==false){
		  alert("密码长度需介于 6 和 20 之间");
	      return;
	}
   // 先将用户名密码取出来  
		var users = getCookie('registerUser');
		users = convertStrToObj(users);
		 console.log(users);
		if(usn in users){
			alert("该用户名已经被注册。");
			return;
		} else {
			users[usn] = pwd;
		}
		var usersStr = convertObjToStr(users);
		setCookie("registerUser", usersStr, 7,"/");
		alert("注册成功");
	}

	function convertObjToStr(obj){
		var result = "";
		for(var key in obj){
			if(result){
				result += ":";
			}
			result += key + "," + obj[key];
		}
		return result;
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
			hover1(".login_l a");
			hover1(".inpBox4 a");
			jd("#username",".inpBox");
			jd("#password",".inpBox1");
		    $(".inpBox3").click(function(){
		    	 register();
		    });
	  })	
      
      






