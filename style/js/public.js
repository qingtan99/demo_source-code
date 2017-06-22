$(function(){
	var wint = $(window).scrollTop();
	$(window).on('scroll',function(){
		wint = $(window).scrollTop();
		if(wint > 80){
			$(".head").addClass("hide");
			$("body").css({paddingTop:'80px'});
		}else{
			$(".head").removeClass("hide");
			$("body").css({paddingTop:'80px'});
		};
		
		
		if(wint > 300 ){
			$('.scroll-top').fadeIn();	
		}else{
			$('.scroll-top').fadeOut();
		};
		
	});
	
	
	$('.scroll-top').click(function(){
		$('body,html').animate({ scrollTop: 0 }, 400);
	});
	
	var wt = $(window).scrollTop(),
		lamp = $(".idxfooter .idx-footerleft .lamp"),
		scroll_state = false;
	if (wt >= ($(document).height() - $(window).height()) - 100) {
		lamp.addClass("active");	
	}
	setTimeout(function(){scroll_state = !scroll_state;},600)
	$(window).on('scroll', function() {
		if (scroll_state != false) {
			wt = $(window).scrollTop();
			if (wt >= ($(document).height() - $(window).height()) - 50) {
				lamp.addClass("active");
			} else {
				lamp.removeClass("active");
			}
		}
	})
})
