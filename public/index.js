$(document).ready(function(){
    $('body').on('click','.try',function(){
        window.location = "https://www.facebook.com/House-going-732187793657284/?view_public_for=732187793657284";
    });
    $('body').on('click','.next_btn.no1',function(){
      $('.overview_div.no1').fadeOut(500);
      $('.overview_div.no2').fadeIn(500);
      $('.prev-img').attr('src','/public/image/search.gif');
    });


	$(".select_city td").hover(function(){
    $(this).find('img').attr('src',String($(this).find('img').attr('src')).replace('city/city','city/hover/VectorTaiwanMap'));
    $(this).find('font').css('color','#252538');
	},function(){
    $(this).find('img').attr('src',String($(this).find('img').attr('src')).replace('city/hover/VectorTaiwanMap','city/city'));
    $(this).find('font').css('color','black');
	});

});

$(window).scroll(function(){
    var wintop = $(window).scrollTop();
    $('.header_title').css('margin-top','calc( 50vh - 140px + '+(wintop/1.5)+'px )');
    if( parseInt($(window).scrollTop()) > (parseInt($(window).height())-200) ){
      if(parseInt($('.prev-img').attr('mode'))==1){
        $('.prev-img').attr('src','/public/image/menu.gif');
        $('.prev-img').attr('mode','2');

      }
    }else{
       if(parseInt($('.prev-img').attr('mode'))==2){
         $('.prev-img').attr('src','/public/image/prev-01.jpg');
         $('.prev-img').attr('mode','1');
       }
    }
    $('.overview_div.no1').css('opacity', ($(window).scrollTop()-$(window).height()+200)/200);
});
