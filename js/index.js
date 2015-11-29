$(document).ready(function(){

 $(window).scroll(function() {
 	var yPos = window.pageYOffset;

 	if(yPos >= 100){
 		$('#nav-scroller').css('height', '30px');
 	}else{
 		$('#nav-scroller').css('height', '100px');
 	}
 });
 	

});