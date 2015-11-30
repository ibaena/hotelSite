$(document).ready(function(){


	// NAV RESIZE ON SCROLL FUNCTION

	function navScrollResize(){
	 $(window).scroll(function() {
	 	var yPos = window.pageYOffset;

	 	if(yPos >= 100){
	 		$('#nav-scroller').css('height', '35px');
	 		$('#nav-scroller a').css('font-size', '1.7em');
	 		$('#nav-scroller a').css('margin-top', '0');
			$('#nav-links a').css('font-size', '1.3em');
	 		$('#nav-links a').css('margin-top', '0');
	 	}else{
	 		$('#nav-scroller').css('height', '70px');
	 		$('#nav-scroller a').css('font-size', '2.4em');
	 		$('#nav-scroller a').css('margin-top', '20px');
	 		$('#nav-links a').css('font-size', '1.5em');
	 		$('#nav-links a').css('margin-top', '10px');
	 	}
	 });
 	}

 	// TIMED IMAGE CHANGE FUNCTION
 	function imageChanger(){
 		var imgList = ['underground', 'spain_comp', 'venice_comp', 'asia_comp', 'hotelbed_comp'];
 		var img = 0;

 		setInterval(function(){
 			if(img == imgList.length){
 				img = 0;
 				$('#head-images').css('background', 'url("img/'+imgList[img]+'.jpg") no-repeat');
 				$('#head-images').css('background-size', 'cover');
 			}else if(img < imgList.length){
 				$('#head-images').css('background', 'url("img/'+imgList[img]+'.jpg") no-repeat');
	 			$('#head-images').css('background-size', 'cover');
	 		}
	 		img++;
 		}, 10000);
	}

	// SEARCH BAR FUNCTION
	function searchInput(){

		$('#search-button').click(function(e) {
			e.preventDefault();
			$('#hotel-list-area').fadeIn(200, function() {
				$(this).css('display', 'initial');
				$('#hotel-list-title').css('display', 'initial');
			});
		});
	}

	// ========= MODAL SECTION ==============

	// USER SLIDE
	$('.modal-hotel-reviews').click(function(event) {
		$(this).parent().parent().next().slideToggle(400);
	});

	//Pick a date plugin
	$(function() {
   var options = Date();
		$('.calendar').pickadate({
  		min: new Date(options)
		})
  });





 	// FUNCTIONS CALLED
 	navScrollResize();
 	imageChanger();
 	searchInput();
});