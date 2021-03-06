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

//background header
var menu = $(".header");
var menu1 = $(".mobileHeader");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      menu.addClass('background');
      menu1.addClass('background');
    } else if ( top <= 200 ) {
        menu.removeClass('background');
        menu1.removeClass('background');
    }
  });