function SmallText(i){
    $('.text-'+i).addClass('has-value');
    $('.label_text-'+i).addClass('has-value');
}

$('.text-1').on('click',function(){
    SmallText(1);
});