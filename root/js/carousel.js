// <!-- Initialize Swiper -->
var swiper = new Swiper(".swiper-container", {
	cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
	updateOnWindowResize: true,
	slidesPerView: 3,
	loop: true,
	spaceBetween: 10,
	autoplay: {
		delay: 5000,
	 },
	 preloadImages: false,
	 lazy: true,
});
