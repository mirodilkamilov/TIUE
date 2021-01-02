//! Collaboration Swiper
var collabSwiper = new Swiper(".collaboration", {
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
			slidesPerView: 2,
			spaceBetween: 32,
			slidesPerGroup: 3,
		},
		"@0.75": {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerGroup: 3,
		},
		"@0.85": {
			slidesPerView: 4,
			spaceBetween: 20,
			slidesPerGroup: 1,
		},
		"@1": {
			slidesPerView: 5,
			spaceBetween: 20,
			slidesPerGroup: 1,
			loop: true,
		},
		"@1.2": {
			slidesPerView: 6,
			spaceBetween: 30,
			slidesPerGroup: 1,
			loop: true,
		},
	},
});

//! News & Events Swiper
var collabSwiper = new Swiper(".news-container", {
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
		delay: 7000,
		disableOnInteraction: true,
	},
	spaceBetween: 16,
	disableOnInteraction: false,
	waitForTransition: false,
	preloadImages: false,
	lazy: true,
	slidesPerView: 2,
	breakpoints: {
		"@0.00": {
			slidesPerView: 1,
		},
	},
});

$(document).ready(function () {
	var mySwiper = document.querySelector(".news-section .swiper-container")
		.swiper;

	$(".news-section .swiper-container").mouseenter(function () {
		mySwiper.autoplay.stop();
	});

	$(".news-section .swiper-container").mouseleave(function () {
		mySwiper.autoplay.start();
	});
});
