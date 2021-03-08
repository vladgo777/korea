
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

	$('button[type="submit"]').click(function(){
	
	/*Валидация полей формы*/
	$('#feedback').validate({
	//Правила валидации
	rules: {
        form_name: {
            required: true,
        },
        form_phone: {
            required: true,
        },

    },
	//Сообщения об ошибках
    messages: {
		form_name: {
            required: "Обязательно укажите имя",
            required: "<style> .name {border-bottom: 1px solid #FF0000;} </style>",
        },
		form_phone: {
			required: "Укажите номер телефона",
            required: "<style> .phone {border-bottom: 1px solid #FF0000;} </style>",
		},
    },
	
	/*Отправка формы в случае успеха валидации*/
    submitHandler: function(){
         sendAjaxForm('feedback', 'mail.php'); //Вызываем функцию отправки формы
		 return false; 
    }
	});
});

	function sendAjaxForm(feedback, url) {
					$.ajax({
						url:     url, //url страницы (mail.php)
						type:     "POST", //метод отправки
						dataType: "html", //формат данных
						data: $("#"+feedback).serialize(),  // Сеарилизуем объекты формы
						success: function(response) { //Данные отправлены успешно
							
							//Ваш код если успешно отправлено
							alert('Успешно отправлено!');
						},
						error: function(response) { // Данные не отправлены
							
							//Ваш код если ошибка
							alert('Ошибка отправления');
						}
					});

}

$('button[type="submit"]').click(function(){
	
	/*Валидация полей формы*/
	$('#feedback2').validate({
	//Правила валидации
	rules: {
        form_name: {
            required: true,
        },
        form_phone: {
            required: true,
        },

    },
	//Сообщения об ошибках
    messages: {
		form_name: {
            required: "Обязательно укажите имя",
            required: "<style> .name {border-bottom: 1px solid #FF0000;} </style>",
        },
		form_phone: {
			required: "Укажите номер телефона",
            required: "<style> .phone {border-bottom: 1px solid #FF0000;} </style>",
		},
    },
	
	/*Отправка формы в случае успеха валидации*/
    submitHandler: function(){
         sendAjaxForm('feedback2', 'mail.php'); //Вызываем функцию отправки формы
		 return false; 
    }
	});
});

	function sendAjaxForm(feedback, url) {
					$.ajax({
						url:     url, //url страницы (mail.php)
						type:     "POST", //метод отправки
						dataType: "html", //формат данных
						data: $("#"+feedback).serialize(),  // Сеарилизуем объекты формы
						success: function(response) { //Данные отправлены успешно
							
							//Ваш код если успешно отправлено
							alert('Успешно отправлено!');
						},
						error: function(response) { // Данные не отправлены
							
							//Ваш код если ошибка
							alert('Ошибка отправления');
						}
					});

}
});

