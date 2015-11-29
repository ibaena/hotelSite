$(document).ready(function(){

 $(window).scroll(function() {
 	var yPos = window.pageYOffset;

 	if(yPos >= 100){
 		$('#nav-scroller').css('height', '30px');
 		$('#nav-scroller a').css('font-size', '1.7em');
 		$('#nav-scroller a').css('margin-top', '0');
 	}else{
 		$('#nav-scroller').css('height', '100px');
 		$('#nav-scroller a').css('font-size', '2em');
 		$('#nav-scroller a').css('margin-top', '20px');
 	}
 });
 	

});