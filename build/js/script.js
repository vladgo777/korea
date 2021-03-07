function SmallText(i){
    $('.text-'+i).addClass('has-value');
    $('.label_text-'+i).addClass('has-value');
}

$('.text-1').on('click',function(){
    SmallText(1);
});

//open burger
$('.burger').click(function(){
    $(this).toggleClass('open');
    $('.mobileHeader__li').toggleClass('open');
    });

$('.proposal__icon').hover(function(){
    var Num = $(this).attr('class').split(/\s+/)[1].slice(-1);
    $('.span-' + Num).toggleClass('hover');
});

//background header
var menu = $(".header");
var menu1 = $(".mobileHeader");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      menu.addClass('background');
      menu1.addClass('background');
      $('.burger').removeClass('open');
      $('.mobileHeader__li').removeClass('open');
    } else if ( top <= 200 ) {
        menu.removeClass('background');
        menu1.removeClass('background');
    }
  });

  //scrollTo
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var plus = $(window).innerHeight() / 100 * 25;
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - (plus/2)
        }, 1000);
    }
    // var widthWindow = $(window).width();
    // if (widthWindow <= 1024){
    //   $('header').fadeToggle(400);
    // } 
});