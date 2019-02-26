$(document).ready(function(){
	$('.hamburgler').click(function(e){
		e.preventDefault();
    $(this).toggleClass('no-hamburgler');
    
   if($('.hamburgler').hasClass("no-hamburgler"))
   {
     console.log('ma klase')
     $('.nav_menu').css({display:"flex"})
     $('.menu_item').css({display:'flex'})
   }
    else{
      
      $('.nav_menu').css({display:"none"})
    }
	});
});