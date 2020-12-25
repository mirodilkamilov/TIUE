// <!-- Initialize Swiper -->
var swiper = new Swiper(".swiper-container", {
	cssMode: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	mousewheel: true,
	keyboard: true,
	updateOnWindowResize: true,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	disableOnInteraction: false,
	waitForTransition: false,
	preloadImages: false,
	lazy: true,
	slidesPerView: 2,
	breakpoints: {
		"@0.00": {
			slidesPerView: 2,
			spaceBetween: 16,
			slidesPerGroup: 2,
		},
		"@0.45": {
			slidesPerView: 3,
			spaceBetween: 32,
			slidesPerGroup: 3,
		},
		"@0.75": {
			slidesPerView: 4,
			spaceBetween: 20,
			slidesPerGroup: 3,
		},
		"@1": {
			slidesPerView: 6,
			spaceBetween: 20,
			slidesPerGroup: 3,
		},
		"@1.2": {
			slidesPerView: 6,
			spaceBetween: 30,
			slidesPerGroup: 3,
		},
	},
});
