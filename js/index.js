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
		var listArea = $('#hotel-list-area');
		var searchInp = $('#search');
		var checkin = $('#checkin-input');
		var checkout = $('#checkout-input');
		var citiesArray = ['paris', 'london', 'madrid'];
		var inputWarning = document.getElementById('input-warning');
		var warning = document.createElement('p');

		$('#search-button').click(function(e) {
			e.preventDefault();
			
			if(!searchInp.val() || !checkout.val() || !checkin.val()){
				warning.textContent = "Please fill out all required fields";
				inputWarning.appendChild(warning);
				inputWarning.style.display = 'block';
				return;
			}else{
				inputWarning.style.display = 'none';
			}

			for(var i=0; i<citiesArray.length; i++){
				if(searchInp.val().toLowerCase() == citiesArray[i]){
					$('#hotel-list-area').fadeIn(500, function() {
						$(this).css('display', 'block');	
					});

					$('.hotel-list-location').text(searchInp.val());

					$('#hotel-list-title').fadeIn(500, function() {
						$(this).css('display', 'block');	
					});
			
					$('.hotel').each(function() {
						if($(this).parent().hasClass(citiesArray[i])){
							$(this).fadeIn(2000, function() {
								$(this).css('display', 'block');	
							});
						}
					});
				
					$('#head-images').css('height', '20%');					
				}
			}

		});
	}

	// ========= MODAL SECTION ==============

	// MAIN MODAL FUNCTION
	function mainModal(){
		$('.hotel').each(function() {
			$(this).click(function(event) {
				$(this).attr('data-target', '#main-modal');
				$('#modal-title').text($(this).find('h2').text());
				$('#modal-hotel-description').text($(this).find('p.modal-description').text());
				$('#modal-price').text($(this).find('span.hotel-price').text());

				$('#modal-reviews').children('.user-review').remove();

				$('#modal-reviews').append($(this).siblings('.user-review'));
				$('#modal-reviews').children('.user-review').removeClass('hidden');
			});
		});
	}

	// MODAL IGNORE BUTTON
	function ignoreHotel(){
		var hotelGrab;

		$('.hotel').each(function() {
			$(this).click(function() {
				hotelGrab = $(this).parent();
			});
		});

		$('#ignore-hotel').click(function() {
			hotelGrab.remove();
		});
	}


	// USER SLIDE
	$('.modal-hotel-reviews').click(function(event) {
		$(this).parent().parent().next().slideToggle(400);
	});

	// ========= END MODAL ============

	//Pick a date plugin
	$(function() {
   var options = Date();
		$('.calendar').pickadate({
  		min: new Date(options)
		})
  });

//search bar
var options = {
	data: ["London", "Madrid","Paris"]
};

$("#search").easyAutocomplete(options);



 	// FUNCTIONS CALLED
 	navScrollResize();
 	imageChanger();
 	searchInput();
 	mainModal();
 	ignoreHotel();
});