$(function() {
	var idx_bmask = $(".idx_bannerbox .idx_bannermask");
	//banner遮罩
	wheelhandler(); //鼠标监听滚动		  
	//鼠标监听滚动
	function wheelhandler() {
		document.addEventListener('mousewheel', mwheel, false); //IE9, Chrome, Safari, Oper
		document.addEventListener("wheel", mwheel, false); //Firefox

		function mwheel(e) {
			e = window.event || e;
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.deltaY || -e.detail)));
			//往下滚
			if (delta < 0) {
				if (idx_bmask.css("opacity") < 0.6) {
					idx_bmask.css({
						"opacity": "+=0.1"
					});
				}
			}
			//往上滚
			else {
				if (idx_bmask.css("opacity") != 0) {
					idx_bmask.css({
						"opacity": "-=0.1"
					});
				}
			}
		}
	}
	
});