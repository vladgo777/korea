
$( document ).ready(function() {
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
        if ( top >= 20 ) {
        menu.addClass('background');
        menu1.addClass('background');
        $('.burger').removeClass('open');
        $('.mobileHeader__li').removeClass('open');
        } else if ( top <= 80 ) {
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

    $('.openform').magnificPopup({
        items: {
            src: '#feedback11'
        },
        type: 'inline'
    });


    function SendMail(form_name, btn_name, nameId, phoneId){
            var form = form_name,
            btn = btn_name;
            form.find('.input').addClass('empty_field');

            function checkInput(){
                form.find('.input').each(function(){
                if($(this).val() != ''){
                    // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
                } else {
                    // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field');
                }
                });
            };
            
            function lightEmpty(){
                form.find('.empty_field').addClass('error-form');
                // Через полсекунды удаляем подсветку
                setTimeout(function(){
                    form.find('.empty_field').removeClass('error-form');
                },500);
            };

            setInterval(function(){
                // Запускаем функцию проверки полей на заполненность
                checkInput();
                // Считаем к-во незаполненных полей
                var sizeEmpty = form.find('.empty_field').length;
                // Вешаем условие-тригер на кнопку отправки формы
                if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                    return false
                } else {
                    btn.addClass('disabled')
                }
                } else {
                btn.removeClass('disabled')
                }
            },500);

            btn.click(function(){
                if($(this).hasClass('disabled')){
                    lightEmpty();
                    return false
                } else {
                    var name = nameId.val().trim();
                    var phone = phoneId.val().trim();
                    $.ajax({
                        url: 'mail.php',
                        type: 'POST',
                        cache: false,
                        data: {'name': name, 'phone': phone},
                        dataType: 'html',
                        beforeSend: function(){
                            btn.prop("disabled", true);
                        },
                        success: function(data){
                           
                                var url = "https://avtokoreia.ru/thankyou.html";
                                $(location).attr('href',url);
                                form.trigger("reset");
                            
                            btn.prop("disabled", false);
                        }
                    });
                }
            });
    }

    $('#feedback1').each(function(){
        var form = $(this),
        btn = $('#sendMail1'),
        nameId = $('#name'),
        phoneId = $('#phone');
        SendMail(form, btn,nameId,phoneId );
    });

    $('#feedback2').each(function(){
        var form = $(this),
        btn = $('#sendMail');
        nameId = $('#name1'),
        phoneId = $('#phone1');
        SendMail(form, btn, nameId, phoneId);
    });

});

