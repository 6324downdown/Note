window.onload = function() {
	//点击播放视频
	var _dialog = document.getElementsByClassName("dialog");
	var _video = document.getElementsByTagName("video");
	//获取按钮，添加点击事件
	// alert(document.getElementById("play-video"));
	document.getElementById("play￾video").addEventListener('click', function() {
		_dialog[0].className = "dialog open"; //给该元素添加一
		个class值
		_video[0].play(); //执行播放
	})
	//关闭
	document.getElementsByClassName("close")[0].addEventListe
	ner('click', function() {
		_dialog[0].className = "dialog";
		//执行暂停
		_video[0].pause();
	})
}

