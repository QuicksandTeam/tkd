	var shijian=120;
	// var shijian=2;
	var time=null;
	function start(){
		 time=setInterval("count()",1000);//倒计时
	}
	
	function count(){
		const audio = new Audio('src/tkd.mp3');
		if(shijian<0){
			audio.play();
			shijian=120;
			// alert("时间到！");
			pause();//一般情况下这个 if 条件是用来提交数据用的
		}else{
			$("#time p.timedown").html(Math.floor(shijian/60)+":"+shijian%60);
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
// ----------------------------------
	// var shijian2=120;
	var shijian2=3;
	var time2=null;
	function start2(){
		time2=setInterval("count2()",1000);//倒计时
	}

	function count2(){
		const audio2 = new Audio('src/tkd.mp3');
		if(shijian2<0){
			audio2.play();
			shijian2=10;
			// alert("时间到！");
			pause2();//一般情况下这个 if 条件是用来提交数据用的
		}else{
			$("#time2 p.timedown2").html(Math.floor(shijian2/60)+":"+shijian2%60);
			shijian2--;
			console.info(time2);
		}
	}
	function pause2(){
		clearInterval(time2);
	}
	function goOn2(){
		time2 = setInterval("count2()",1000);
	}