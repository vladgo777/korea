<?php

$token = "1604909264:AAHcwA5VAvhBkGR2kQoMVk5XBU84vJx3i38";

$chat_id = "-549352411";

if (isset($_POST["form_name"]) && isset($_POST["form_phone"]) ) { 

$name = $_POST['form_name'];
$phone = $_POST['form_phone']; 
// $email = $_POST['email'];

$arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone
);

//Теперь давайте настроим куда отправляем и откуда

$my_email = 'vladgo777@gmail.com'; // Куда отправляем
$sender_email = '<avtokoreia.ru>'; // От кого отправляем
$title = "Заголовок сообщения"; 

//Сообщение, которое приходит на почту со всеми нужными нам данными:

$mes = "
 Имя: $name\n
 Телефон: $phone\n
";

//Всё, теперь можно отправлять письмо на почту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
$sendToMail = mail ($my_email,$title,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sender_email");

if(($sendToTelegram == true) &&($sendToMail == true)){
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
}

}


?>