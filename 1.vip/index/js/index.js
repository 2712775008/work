
//  	window.onload=function(){
// 地区选择窗口   		
    		var place =document.getElementById('place');
	    	var city =document.getElementById('city');
	    	place.onclick=function(){
	    		city.style.display='block';
	    	}

	    	var close =document.getElementById('close');
	    	close.onclick=function(){
	    		city.style.display='none';
	    	}
//倒计时

	    	var time = document.getElementById('time');
	    	//获取小时
	    	var hours = document.getElementById('hours');
	    	var hoursV = hours.innerHTML;
	    	//获取分钟
	    	var second = document.getElementById('second');
	    	var secondV = second.innerHTML;
	    	//获取秒
	    	var miao = document.getElementById('miao');
	    	var miaoV = miao.innerHTML;
	    	//console.log(hours)
	    	console.log(hours+":"+second+":"+miao)
	    	//类型转化为数字类型
	    	hoursV = Number(hoursV)
	    	secondV = Number(secondV)
	    	miaoV = Number(miaoV)
	    	var timer = setInterval(function(){
	    		miaoV--;
	    		if(miaoV < 0){
	    			miaoV = 60;
	    			secondV -=1;
	    			if(secondV<0){
	    				secondV=60;
	    				hoursV-=1;
	    			}
	    		}
	    		miao.innerHTML = createZero(miaoV);
	    		second.innerHTML = createZero(secondV);
	    		hours.innerHTML = createZero(hoursV);
//	    		console.log(miaoV)
	    	},1000)
	    	
	    	window.onload=function(){
			var CarouselBox = document.getElementById('CarouselBox');
			var timer=setInterval(function(){
//				console.log('a');
				 var left = Number(CarouselBox.offsetLeft);
//				 console.log(left)
				 left -= 1002;
				 if(left<-2004){
				 	left = 0;
				 }
				 CarouselBox.style.left = left +'px';
			},1000)


			// louti
			var leftBox = document.getElementById('leftBox');
			var ps = leftBox.children;
//			console.log(ps)
			var body=document.getElementById('body');
			ps[0].onclick=function(){
                scrollTo(0,1600);
			}
			ps[1].onclick=function(){
				scrollTo(0,2400);

			}
			ps[2].onclick=function(){
				scrollTo(0,3200);
			}
			ps[3].onclick=function(){
				scrollTo(0,3950);
			}
			ps[4].onclick=function(){
				scrollTo(0,4720);
			}
		}
    	
 var te = document.querySelector(".te");
 var city = document.getElementById("city");
 var close = document.getElementById("close")
 
te.onclick = function(){
 	city.style.display = "block";
 }

close.onclick = function(){
	city.style.display = "none";
}
