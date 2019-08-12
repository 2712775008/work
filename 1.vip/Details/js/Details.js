        $(function(){
        	$(".goods1 .min").eq(0).css({display:"block"});
	      $(".goods2  img").eq(0).css({border:"1px solid #f2f2f2"});
	      $(".goods1").mouseover(function(){
	      	 $(".goods1 .min").eq(0).css({display:"none"})
	      	 $(".goods1 .max").eq(0).css({display:"block"})
	      })
	      $(".goods1").mousemove(function(e){
	      	var evt=e||window.event;
	      	var l = evt.clientX;//鼠标的位置
		    var t = evt.clientY;
		    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		    var toTop=t+scrollTop-$(".goods1").offset().top;
		    var toLeft=l-$(".goods1").offset().left;
		    if(toTop>=420){
		    	toTop=420;
		    }
		    if(toLeft>=420){
		    	toLeft=420;
		    }
		    $(".goods1 .max").eq(0).css({left:-toLeft,top:-toTop})
	      })
	      $(".goods1").mouseout(function(){
	      	 $(".goods1 .min").eq(0).css({display:"block"});
	         $(".goods1 .max").eq(0).css({display:"none"});
	      })
	      $(".goods2 img").click(function(){
	      	var index=$(this).index();
	      	$(".goods1 .min").eq(index).css({display:"block"}).siblings().css({display:"none"});
	        $(".goods2  img").eq(index).css({border:"1px solid black"}).siblings().css({border:"1px solid #f2f2f2"});
	        $(".goods1").mouseover(function(){
	        	$(".goods1 .min").css({display:"none"});
	        	$(".goods1 .max").eq(index).css({display:"block"}).siblings().css({display:"none"});
	           })
	        $(".goods1").mousemove(function(e){
	        	var evt=e||window.event;
		      	var l = evt.clientX;//鼠标的位置
			    var t = evt.clientY;
			    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			    var toTop=t+scrollTop-$(".goods1").offset().top;
			    var toLeft=l-$(".goods1").offset().left;
			    if(toTop>=420){
			    	toTop=420;
			    }
			    if(toLeft>=420){
			    	toLeft=420;
			    }
			     $(".goods1 .max").eq(index).css({left:-toLeft,top:-toTop})
	          })
			   $(".goods1").mouseout(function(){
	         	$(".goods1 .min").eq(index).css({display:"block"});
	         	console.log("111");
	            $(".goods1 .max").eq(index).css({display:"none"});
	         })
	        
	      })
		  $(".style a").click(function(){
	      	var index=$(this).index();
			console.log(index);
			$(".style1").css({border:"1px solid #ededed"})
			$(".style1").eq(index).css({border:"1px solid red"});
	      	$(".goods1 .min").eq(index).css({display:"block"}).siblings().css({display:"none"});
	        $(".goods2  img").eq(index).css({border:"2px solid black"}).siblings().css({border:"2px solid #ededed"});
	        $(".goods1").mouseover(function(){
	        	$(".goods1 .min").css({display:"none"});
	        	$(".goods1 .max").eq(index).css({display:"block"}).siblings().css({display:"none"});
	           })
	        $(".goods1").mousemove(function(e){
	        	var evt=e||window.event;
		      	var l = evt.clientX;//鼠标的位置
			    var t = evt.clientY;
			    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			    var toTop=t+scrollTop-$(".goods1").offset().top;
			    var toLeft=l-$(".goods1").offset().left;
			    if(toTop>=420){
			    	toTop=420;
			    }
			    if(toLeft>=420){
			    	toLeft=420;
			    }
			     $(".goods1 .max").eq(index).css({left:-toLeft,top:-toTop})
	          })
			   $(".goods1").mouseout(function(){
	         	$(".goods1 .min").eq(index).css({display:"block"});
	         	console.log("111");
	            $(".goods1 .max").eq(index).css({display:"none"});
	         })
	        
	      })
        })
        
var chose = document.querySelector(".chose");
var span = document.querySelector(span)
chose.onclick = function(){
	span.style.color = "#fff"
}


