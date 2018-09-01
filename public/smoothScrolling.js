$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
  
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });

    //close navbar on click
    $(document).on('click',function(){
      $('.collapse').collapse('hide');
   });
    
  })