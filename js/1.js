	// var shijian=120;
	var shijian=10;
	var time=null;
	function start(){
		 time=setInterval("count()",1000);//����ʱ
	}
	
	function count(){
		const audio = new Audio('src/tkd.mp3');
		if(shijian<0){
			audio.play();
			shijian=10;
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