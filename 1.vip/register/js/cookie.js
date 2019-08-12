function getCookie(name){
	
	var myCookie = document.cookie;

	var cookieArr = myCookie.split('; ');
	
	for(var i = 0; i < cookieArr.length; i++){

		var data = cookieArr[i].split('=');

		if(data[0] == name){
			return decodeURIComponent(data[1]);
		}
	}
	
	return "";					
}

function removeCookie(name){
	setCookie(name, "", -1,"/");
}

function setCookie(name, value, expiredays,path){
	
	var exp = new Date();
	exp.setDate(exp.getDate() + expiredays);

	var gmtStr = exp.toGMTString(); 					

	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + gmtStr+";path="+path;
}