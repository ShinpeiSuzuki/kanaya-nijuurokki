$(function(){


    // ハンバーガーメニュー
    $('#bars').on('click', function(){
        $('#menu').slideToggle(300);
    });

    // スライダー

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

        loop: true,
      });


	$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
	});
	
	$("click").animate({scrollTop:$('#kumin').offset().top});
	
	$("click").animate({scrollTop:$('#deena').offset().top});
	
	$("click").animate({scrollTop:$('#hasumin').offset().top});
	
	$("click").animate({scrollTop:$('#jinta').offset().top});
	
	$("click").animate({scrollTop:$('#kanaru').offset().top});
	
	$("click").animate({scrollTop:$('#kei').offset().top});
	
	$("click").animate({scrollTop:$('#kousuke').offset().top});
	
	$("click").animate({scrollTop:$('#maro').offset().top});
	
	$("click").animate({scrollTop:$('#miyumaru').offset().top});
	
	$("click").animate({scrollTop:$('#nattyan').offset().top});
	
	$("click").animate({scrollTop:$('#okutyan').offset().top});
	
	$("click").animate({scrollTop:$('#sinpei').offset().top});
	
	$("click").animate({scrollTop:$('#yone').offset().top});
	
	$("click").animate({scrollTop:$('#yossi').offset().top});
	
	$("click").animate({scrollTop:$('#yuusuke').offset().top});
	
    // トップに戻る
    $('#totop').on('click', function(){
        $('html,body').animate({scrollTop:0}, 500, 'swing');
    });
    $(window).scroll(function(){
        let scroll = $('body,html').scrollTop();
        if (scroll > 300) {
          $('#totop').fadeIn(200);
        } else {
          $('#totop').fadeOut(200);
        }
    });
	
	
})
