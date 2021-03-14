 

  <?php
  
		$name =   $_POST["name"];  
		$email =  $_POST["email"];
		$address = $_POST["address"];
		$phone =  $_POST["phone"];
		$city =  $_POST["city"];
 
	 

	 
	 
         $to = "contact@deckrestorationservices.com";
         $subject = "Form Data";
         
         $message = "<b>Name: </b>".$name;
         $message .="<p><b>Email: </b>".$email;
         $message .="<p><b>Phone: </b>".$phone;
           $message .="<p><b>Address: </b>".$address;
           $message .="<p><b>City: </b>".$city;
            
                          
         
        $headers = "From: contact@deckrestorationservices.com ";
         $header = "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message Saved";
         }else {
            echo "0";
         }
      ?>