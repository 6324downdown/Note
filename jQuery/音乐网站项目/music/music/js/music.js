$(function() {
	var isplay = false;
	$("#mp3play").click(function() {
		if(!isplay) {
			isplay = true;
			$('#album_icon').css({
				"animationPlayState": "running"
			});
			$(this).find('a').text('暂停');
			document.getElementById('theplayer').play();
		} else {
			isplay = false;
			$('#album_icon').css({
				"animationPlayState": "paused"
			});
			$(this).find('a').text('播放');
			document.getElementById('theplayer').pause();
		}
	});
})