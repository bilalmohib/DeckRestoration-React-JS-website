<?php
//Here what should be
header("Access-Control-Allow-Origin: *");
//Here what should be
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if ($_SERVER['HTTP_REFERER'] === 'https://deckrestorationservices.com/') {
    // get data from Get method 
    $email = isset($_GET['email']) ? $_GET['email'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $address = isset($_GET['address']) ? $_GET['address'] : null;
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null;

    if ($name && $address && $email && $phone) {
        require 'vendor/autoload.php';

        //Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings         
                                                      //Send using SMTP
            $mail->Host       = 'mail.deckrestorationservice';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'contact@deckrestorationservices.com';                     //SMTP username
            $mail->Password   = 'Shmaga55';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom($email, 'Mailer');
            $mail->addAddress('contact@deckrestorationservices.com');               //Name is optional
            $mail->addReplyTo($email, 'Information');
           

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'React Form';
            $mail->Body    = 'Name: ' . $name . '<br/>
            Email: ' . $email . '<br/>
            Address: ' . $address . '<br/>
            Phone: ' . $phone;
            // $mail->AltBody = 'Name: ' . $name . '<br/>
            //                    Email: ' . $email . '<br/>
            //                    Address: ' . $address . '<br/>
            //                    Phone: ' . $phone;

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
    else
    {
        echo "All the fields area required!";
    }
}
else
{
    echo "You can use this server!";
}
?>