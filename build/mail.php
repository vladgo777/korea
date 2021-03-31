<?php
if (isset($_POST["name"]) && isset($_POST["phone"])) {
$token = "1604909264:AAHcwA5VAvhBkGR2kQoMVk5XBU84vJx3i38";
$chat_id = "-549352411";
$name = $_POST['name'];
$phone = $_POST['phone']; 

$arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone
);


$my_email = "servisrnd61@bk.ru" ;  
$sender_email = 'site@avtokoreia.ru'; 
$title = "avtokoreia.ru - Заказать обратный звонок"; 

$mes = "
 Имя: $name
 Телефон: $phone
 
 --
 
 Это сообщение отправлено с сайта (https://avtokoreia.ru/)
";

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$mes}","r");
$sendToMail = mail($my_email,$title,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sender_email");


}
?>