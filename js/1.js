	// var shijian=120;
	var shijian=10;
	var time=null;
	function start(){
		 time=setInterval("count()",1000);//倒计时
	}
	
	function count(){
		const audio = new Audio('src/tkd.mp3');
		if(shijian<0){
			audio.play();
			shijian=10;
			// alert("时间到！");
			pause();//一般情况下这个 if 条件是用来提交数据用的
		}else{
			$("#time p").html(Math.floor(shijian/60)+":"+shijian%60);
			shijian--;
			console.info(time);
		}
	}
	function pause(){
		clearInterval(time);
	}
	function goOn(){
		time = setInterval("count()",1000);
	}