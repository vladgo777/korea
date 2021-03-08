<?php

if (isset($_POST["form_name"]) && isset($_POST["form_phone"]) ) { 

$name = $_POST['form_name'];
$phone = $_POST['form_phone']; 
// $email = $_POST['email'];

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

$send = mail ($my_email,$title,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sender_email");

}


?>