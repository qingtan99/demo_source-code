$(function() {
	var wint = $(window).scrollTop(),
		screen_height = $(window).height(),
		f1num_state = false,
		$prodbox = $(".prodbox");

	if (screen_height > 820) {
		if (!f1num_state) {
			fs1_num();
			as2_bottomshow3();
			ss1_show() ;
			mapTop();
			ccl1();
		}
		f1num_state = true;
	}
	
	$(window).scroll(function() {
		wint = $(window).scrollTop();

		if (wint > 100) {
			
			as2_bottomshow3();
			ss1_show();
			$prodbox.addClass("active");

			if (!f1num_state) {
				fs1_num();
			}
			f1num_state = true;
			
			mapTop();
			ccl1();
		}

		if (wint > 300) {
			s2s1_show();
			cdm1center();
			ccl2()
			
		}

		if (wint > 450) {
			as2_topshow();
			fs2show();
			cdm1bottom();
		}

		if (wint > 500) {
			ss3_show();
			as1_show();
			
			cdw2();
			
			as2_bottomshow2();
		}
		if(wint > 700) {
			ccl3();
		}
		if (wint > 900) {
			as2_bottomshow();
			s2s2_show();			
			
			
			
			ccl4();
		}

		if (wint > 1100) {
			
			ss2_show();
		}


		if (wint > 1500) {
			ss4_show();
			s2s3_show();
			rerun4_show();
		}

		if (wint > 1900) {
			s2s4_show();
			rerun5_show();
			ss5_show();
		}

		if (wint > 2800) {
			s2s5_show();
		}

	});

	function as1_show() {
		var as1_left = $(".as1_left"),
			as1_right = $(".as1_right");

		as1_left.addClass("active");
		as1_right.addClass("active");
	}

	function as2_topshow() {
		var as2 = $(".as2_top");
		as2.find("h1").addClass("active");
		setTimeout(function() {
			as2.find("h2").addClass("active");
		}, 300)
		setTimeout(function() {
			as2.find("p").addClass("active");
			as2.find(".as2_teambox").addClass("active");
		}, 600)
	}


		function as2_bottomshow3() {
				var as4 = $(".about_ban");
				setTimeout(function() {
					as4.find("h2").addClass("active");
				}, 300)
				setTimeout(function() {
					as4.find("p").eq(0).addClass("active");
				}, 600)
				setTimeout(function() {
					as4.find("p").eq(1).addClass("active");
				}, 800)
				setTimeout(function() {
					as4.find("img").addClass("active");
				}, 1000)
				
			}










	function as2_bottomshow() {
		var as2 = $(".as2_bottom");
		setTimeout(function() {
			as2.find("h2").addClass("active");
		}, 300)
		setTimeout(function() {
			as2.find("h4").addClass("active");
		}, 600)
		setTimeout(function() {
			as2.find("span").addClass("active");
			as2.find("p").addClass("active");
		}, 1000)
	}
	
	function as2_bottomshow2() {
		var as3 = $(".about_section3");
		setTimeout(function() {
			as3.find("p").addClass("active");
		}, 300)
		setTimeout(function() {
			as3.find("h2").addClass("active");
		}, 800)
		setTimeout(function() {
			as3.find("hr").addClass("active");
		}, 1000)
		setTimeout(function() {
			as3.find(".as3_main").addClass("active");
			
		}, 1000)
		setTimeout(function() {
			as3.find(".as3-right").addClass("active");
			
		}, 1300)
		setTimeout(function() {
			as3.find(".as3-left").addClass("active");
			
		}, 1800)
	}



	function focus_introul() {
		var fintroli = $(".focus_introbox ul li"),
			fli_idx = 0,
			fli_max = fintroli.length
		fli_state = false;

		setInterval(function() {
			if (!fli_state) {
				fintroli.eq(fli_idx).addClass("active");
				fli_idx++;
				if (fli_idx == fli_max) {
					fli_state = true;
				}
			}

		}, 200);
	}

	function fs1_num() {
		var fs1li = $(".fs1_right ul li"),
			fs1num1 = $(".fs1_t1 span"),
			fs1num2 = $(".fs1_t2 span"),
			fs1num3 = $(".fs1_t3 span"),
			fs1n1 = 0,
			fs1n2 = 0,
			fs1n3 = 0;

		$(".fs1_left h1").addClass("active");
		setTimeout(function() {
			$(".fs1_left h2").addClass("active");
		}, 300);
		setTimeout(function() {
			$(".fs1_left h3").addClass("active");
		}, 600);
		setTimeout(function() {
			$(".fs1_left p").addClass("active");
		}, 900);
		fs1li.fadeIn(600);


		setInterval(function() {
			if (fs1n1 < 10) {
				fs1n1++;
				fs1num1.text(fs1n1);
			}
		}, 120);

		setInterval(function() {
			if (fs1n2 < 1000) {
				fs1n2++;
				fs1num2.text(fs1n2);
			}
		}, 1);

		setInterval(function() {
			if (fs1n3 < 80) {
				fs1n3++;
				fs1num3.text(fs1n3);
			}
		}, 30);

	}

	function fs2show() {
		var fs2c = $(".focus_section2"),
			fa = $(".focus_section2 a.greenmore"),
			faidx = 0,
			famax = fa.length;

		fs2c.find("h1").addClass("active");
		setTimeout(function() {
			fs2c.find("h2").addClass("active");
		}, 300)
		setTimeout(function() {
			fs2c.find("p").addClass("active");
			setInterval(function() {
				if (faidx <= famax) {
					fa.eq(faidx).addClass("active");
					faidx++;
				}
			}, 200)
		}, 600)
		setTimeout(function() {
			fs2c.find(".fs2bottom").addClass("active");
		}, 1700)
	}

	function news_selectshow() {
		var nsli = $(".news_selectlist li");
		nsli.addClass("active");
	}


	function prod_selectshow() {
		var psli = $(".prod_selectlist li"),
			psidx = 0,
			psmax = psli.length;

		psli.addClass("active");
	}

	function ss1_show() {
		var s2s1c = $(".service_section1 .w1200"),
			s2s1listli = $(".s_s1list  li"),
			s2s1list_idx = 0,
			s2s1list_state = false;
		s2s1c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s1c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s1c.children().eq(2).addClass("active");
			s2s1list_state = !s2s1list_state;
		}, 900)

		setInterval(function() {
			if (s2s1list_idx <= 3 && s2s1list_state != false) {
				s2s1listli.eq(s2s1list_idx).addClass("active");
				s2s1list_idx++;
			}
		}, 200)
	}


	function ss2_show() {
		var ss2c = $(".service_section2 .w1200");
		ss2c.children().eq(0).addClass("active");
		setTimeout(function() {
			ss2c.children().eq(1).addClass("active");
		}, 300)
		setTimeout(function() {
			ss2c.children().eq(2).addClass("active");
		}, 600)
		setTimeout(function() {
			ss2c.children().eq(3).addClass("active");
			ss2c.children().eq(4).addClass("active");
			ss2c.children().eq(5).addClass("active");
		}, 900)
	}

	function ss3_show() {
		var ss3c = $(".service_section3 .w1200");
		ss3c.find("h1").addClass("active");
		setTimeout(function() {
			ss3c.find("p").addClass("active");
		}, 300)
		setTimeout(function() {
			ss3c.find("a").addClass("active");
		}, 900)
		setTimeout(function() {
			ss3c.children().eq(3).addClass("active");
			ss3c.children().eq(4).addClass("active");
			ss3c.children().eq(5).addClass("active");
		}, 600)
	}

	function ss4_show() {
		var ss4c = $(".service_section4 .w1200");
		//ss4c.children().addClass("active");
		setTimeout(function() {
			ss4c.find("img").addClass("active");
		}, 300)
		setTimeout(function() {
			ss4c.find("h2").addClass("active");
		}, 500)
		setTimeout(function() {
			ss4c.find("h3").addClass("active");
		}, 700)
		setTimeout(function() {
			ss4c.find("p").addClass("active");
		}, 900)
		setTimeout(function() {
			ss4c.find("h4").addClass("active");
		}, 1100)
		
	}
	function ss5_show() {
		var ss5c = $(".service_section5 .w1200");
		//ss5c.children().addClass("active");
		
		setTimeout(function() {
			ss5c.find("h2").addClass("active");
		}, 300)
		setTimeout(function() {
			ss5c.find("h3").addClass("active");
		}, 500)
		setTimeout(function() {
			ss5c.find("ul").addClass("active");
		}, 700)
		
	}

	function s2s1_show() {
		var s2s1c = $(".s2_section1 .w1200"),
			s2s1listli = $(".s2_s1list li"),
			s2s1list_idx = 0,
			s2s1list_state = false;
		s2s1c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s1c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s1c.children().eq(2).addClass("active");
			s2s1list_state = !s2s1list_state;
		}, 900)

		setInterval(function() {
			if (s2s1list_idx <= 3 && s2s1list_state != false) {
				s2s1listli.eq(s2s1list_idx).addClass("active");
				s2s1list_idx++;
			}
		}, 200)
	}

	function s2s2_show() {
		var s2s2c = $(".s2_section2 .w1200");
		s2s2c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s2c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s2c.children().eq(2).addClass("active");
		}, 900)
		setTimeout(function() {
			s2s2c.children().eq(3).addClass("active");
		}, 1200)
		setTimeout(function() {
			$('.rerun2-box').addClass("active");
		}, 1600)
	}

	function s2s3_show() {
		var s2s3c = $(".s2_section3 .w1200");
		s2s3c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s3c.children().eq(1).addClass("active");
		}, 600)
	}

	function s2s4_show() {
		var s2s4c = $(".s2_section4 .w1200");
		s2s4c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s4c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s4c.children().eq(2).addClass("active");
		}, 900)
		setTimeout(function() {
			s2s4c.children().eq(3).addClass("active");
		}, 1200)
	}
	function rerun4_show() {
		var s2s4c = $(".rerun4 .w1200");
		s2s4c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s4c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s4c.children().eq(2).addClass("active");
		}, 900)
		setTimeout(function() {
			s2s4c.children().eq(3).addClass("active");
		}, 1200)
	}
	function rerun5_show() {
		var s2s4c = $(".rerun5 .w1200");
		s2s4c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s4c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s4c.children().eq(2).addClass("active");
		}, 900)
		setTimeout(function() {
			s2s4c.children().eq(3).addClass("active");
		}, 1200)
	}
	

	function s2s5_show() {
		var s2s5c = $(".s2_section5 .w1200");
		s2s5c.children().eq(0).addClass("active");
		setTimeout(function() {
			s2s5c.children().eq(1).addClass("active");
		}, 600)
		setTimeout(function() {
			s2s5c.children().eq(2).addClass("active");
		}, 900)
		setTimeout(function() {
			s2s5c.children().eq(3).addClass("active");
		}, 1200)
	}
	
	function cdindro() {
		var cdil = $(".cdi-left");
		var cdir = $(".cdi-right");
		cdil.children().eq(0).addClass("active");
		setTimeout(function() {
			cdil.children().eq(1).addClass("active");
			
		}, 300)
		setTimeout(function() {
			cdil.children().eq(2).addClass("active");
		}, 500)
		setTimeout(function() {
			cdil.children().eq(3).addClass("active");
			cdir.children().addClass("active");
		}, 700)
	}
	function cdm1center() {
		var cdm1center = $(".cdm1-center1");
		cdm1center.children().eq(0).addClass("active");
	}
	
	function cdm1center() {
		var cdm1center = $(".cdm1-center1");
		cdm1center.children().eq(0).addClass("active");
	}
	function cdm1bottom() {
		var cdm1btm = $(".cdm1-bottom1");
		cdm1btm.children().eq(0).addClass("active");
		setTimeout(function() {
			cdm1btm.children().eq(1).addClass("active");			
		}, 300)
		setTimeout(function() {
			cdm1btm.children().eq(2).addClass("active");
		}, 600)
		setTimeout(function() {
			cdm1btm.children().eq(3).addClass("active");
		}, 900)
		
	}
	
	function cdw2() {
		var cdw2 = $(".cd-main2");
		cdw2.children().eq(0).addClass("active");
		setTimeout(function() {
			cdw2.children().eq(1).addClass("active");			
		}, 300)
		setTimeout(function() {
			cdw2.children().eq(2).addClass("active");
		}, 600)
		setTimeout(function() {
			cdw2.children().eq(3).addClass("active");
		}, 900)	
	}
	
	function ccl1() {
		var cdw2 = $(".cml-list1");
		cdw2.children().eq(0).addClass("active");
		setTimeout(function() {
			cdw2.children().eq(1).addClass("active");			
		}, 400)
	}
	function ccl2() {
		var cdw2 = $(".cml-list2");
		cdw2.children().eq(0).addClass("active");
		setTimeout(function() {
			cdw2.children().eq(1).addClass("active");			
		}, 400)
	}
	function ccl3() {
		var cdw2 = $(".cml-list3");
		cdw2.children().eq(0).addClass("active");
		setTimeout(function() {
			cdw2.children().eq(1).addClass("active");			
		}, 400)
	}
	function ccl4() {
		var cdw2 = $(".cml-list4");
		cdw2.children().eq(0).addClass("active");
		setTimeout(function() {
			cdw2.children().eq(1).addClass("active");			
		}, 400)
	}
	
	
	
	

	function mapTop(){
		$('.map-top').addClass('animated fadeInDown')
	}


	news_selectshow();
	focus_introul();
	prod_selectshow();
	cdindro();//案例内页标题

});