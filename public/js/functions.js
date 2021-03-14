 $(document).ready(function(){


 	var val1 = 0;

 	$('.navbar-handler').children("img").click(function(){
 		if(val1==0){
 			$(this).attr("src","images/cross.JPEG XR")
 		$('.navbar-custom').slideToggle()

 		val1 = 1;
 	
 	}
 	else {
 		$('.navbar-custom').slideToggle()
 		$(this).attr("src","images/hamburger.JPEG XR")
 		val1 = 0;

 	}
 	})
 })


 $(document).ready(function(){
  //call the function when ready
  slideShow();


//Actually define the slideShow()
function slideShow(){
  
  //*** Conditional & Variables ***//
  
    //Define the current img
    var current = $('.fade-slider .show');
    //If index != 0/false then show next img
  var next = current.next().length ? 
      current.next() :
      // if index == false then show first img
      current.siblings().first();
  
   //*** Swap out the imgs and class ***//
   current.hide().removeClass('show');
   next.fadeIn("slow").addClass('show');
  
  
  //*** Repeat function every 3 seconds ***//
  setTimeout(slideShow, 3000);
  
};
  
}); //end ready



 $('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 500);
  }
});