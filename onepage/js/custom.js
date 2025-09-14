// custom js here

// swiper 
(function ($) {
    "use strict";
	
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},


	breakpoints: {
		1920: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		
		1440: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},

		950: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		}
	}
});
	
	
	
	
	
	

	
	
}(jQuery));


	




