	var shijian=120;
	// var shijian=2;
	var time=null;
	function start(){
		 time=setInterval("count()",1000);//����ʱ
	}
	
	function count(){
		const audio = new Audio('src/tkd.mp3');
		if(shijian<0){
			audio.play();
			shijian=120;
			// alert("ʱ�䵽��");
			pause();//һ���������� if �����������ύ�����õ�
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
		time2=setInterval("count2()",1000);//����ʱ
	}

	function count2(){
		const audio2 = new Audio('src/tkd.mp3');
		if(shijian2<0){
			audio2.play();
			shijian2=10;
			// alert("ʱ�䵽��");
			pause2();//һ���������� if �����������ύ�����õ�
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