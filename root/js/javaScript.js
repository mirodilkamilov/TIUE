//? Navbar dropdown displayed on hover
function resize() {
	if (window.innerWidth >= 992) {
		function toggleDropdown(e) {
			const _d = $(e.target).closest(".dropdown"),
				_m = $("ul.dropdown-menu", _d);
			setTimeout(
				function () {
					const shouldOpen = e.type !== "click" && _d.is(":hover");
					_m.toggleClass("show", shouldOpen);
					_d.toggleClass("show", shouldOpen);
					$('[data-toggle="dropdown"]', _d).attr(
						"aria-expanded",
						shouldOpen
					);
				},
				e.type === "mouseleave" ? 300 : 0
			);
		}
		$("body")
			.on("mouseenter mouseleave", ".dropdown", toggleDropdown)
			.on("click", "div.dropdown-menu a", toggleDropdown);
	}
}
resize();
$(window).resize(resize);

//? Bootstrap Carousel
var myCarousel = document.querySelector("#carouselExampleIndicators");
var carousel = new bootstrap.Carousel(myCarousel, {
	pause: false,
});

//? Adding animating classes on hamburger menu click
$(document).ready(function () {
	$("#menu-button").click(function () {
		$("#first-line").toggleClass("first-line");
		$("#second-line").toggleClass("second-line");
		$("#third-line").toggleClass("third-line");
	});
});

//? Take Home button
$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 500) {
			$(".scroll-up-btn").addClass("show");
		} else {
			$(".scroll-up-btn").removeClass("show");
		}
	});

	$(".scroll-up-btn").click(function () {
		$("html").animate({
			scrollTop: 0,
		});
	});

	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});
	$(".scroll-up-btn").click(function () {
		$("html").animate({
			scrollTop: 0,
		});
		// removing smooth scroll on slide-up button click
		$("html").css("scrollBehavior", "auto");
	});

	$(".navbar .menu li a").click(function () {
		// applying again smooth scroll on menu items click
		$("html").css("scrollBehavior", "smooth");
	});
});

//? ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
	"(max-width: 1199px)": function () {
		let carousel = gsap.timeline({
			scrollTrigger: {
				trigger: ".main-carousel",
				start: "top center",
			},
		});
		carousel.from(".slide1 p, .slide1 h3, .slide1 .read-more-btn", {
			x: -100,
			opacity: 0,
			duration: 0.7,
		});
		let vision = gsap.timeline({
			scrollTrigger: {
				trigger: ".vision",
				start: "-=150px center",
			},
		});
		vision.from(".vision", {
			x: -100,
			opacity: 0,
			duration: 0.7,
		});
		let mission = gsap.timeline({
			scrollTrigger: {
				trigger: ".mission",
				start: "-=150px center",
			},
		});
		mission.from(
			".mission",
			{
				x: 100,
				opacity: 0,
				duration: 0.7,
			},
			"-=0.5"
		);

		let values = gsap.timeline({
			scrollTrigger: {
				trigger: ".values",
				start: "-=150px center",
			},
		});
		values
			.from(".values .sub-heading", {
				x: -100,
				opacity: 0,
				duration: 0.7,
			})
			.from(
				".card-container .cards:nth-child(odd)",
				{
					x: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.3"
			)
			.from(
				".card-container .cards:nth-child(even)",
				{
					x: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.3"
			)
			.from(".last-card", {
				x: -100,
				opacity: 0,
				duration: 0.7,
				delay: 0.5,
			});

		let team = gsap.timeline({
			scrollTrigger: {
				trigger: ".core-team",
				start: "top center",
			},
		});
		team.from(".core-team .heading", {
			x: -100,
			opacity: 0,
			duration: 0.7,
		})
			.from(
				".core-team .leadership",
				{
					x: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			)
			.from(
				".core-team .t-hub",
				{
					x: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			);

		let team_last = gsap.timeline({
			scrollTrigger: {
				trigger: ".core-team .elp-team",
				start: "top center",
			},
		});
		team_last
			.from(
				".core-team .elp-team",
				{
					x: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			)
			.from(
				".core-team .physics",
				{
					x: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			);

		let programs = gsap.timeline({
			scrollTrigger: {
				trigger: ".programs",
				start: "top center",
			},
		});
		programs
			.from(".programs .heading", {
				x: -100,
				opacity: 0,
				duration: 0.7,
			})
			.from(
				".programs .undergraduate",
				{
					x: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			)
			.from(
				".programs .pre-university",
				{
					x: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			);

		let programs_last = gsap.timeline({
			scrollTrigger: {
				trigger: ".programs .elp",
				start: "top center",
			},
		});
		programs_last
			.from(".programs .elp", {
				x: 100,
				opacity: 0,
				duration: 0.7,
				markers: true,
			})
			.from(
				".programs .leadership",
				{
					x: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			);
	},

	"(min-width: 1200px)": function () {
		let carousel = gsap.timeline({
			scrollTrigger: {
				trigger: ".main-carousel",
				start: "top center",
			},
		});
		carousel.from(".slide1", {
			x: -100,
			opacity: 0,
			duration: 0.7,
		});

		let vision = gsap.timeline({
			scrollTrigger: {
				trigger: ".vision",
				start: "-=150px center",
			},
		});
		vision.from(".vision", {
			y: -100,
			opacity: 0,
			duration: 0.7,
		});
		let mission = gsap.timeline({
			scrollTrigger: {
				trigger: ".mission",
				start: "-=150px center",
			},
		});
		mission.from(
			".mission",
			{
				y: -100,
				opacity: 0,
				duration: 0.7,
			},
			"-=0.5"
		);

		let values = gsap.timeline({
			scrollTrigger: {
				trigger: ".values",
				start: "-=150px center",
			},
		});
		values
			.from(".values .sub-heading", {
				y: -100,
				opacity: 0,
				duration: 0.7,
			})
			.from(
				".card-container .cards:nth-child(odd)",
				{
					y: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.3"
			)
			.from(
				".card-container .cards:nth-child(even)",
				{
					y: -100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.3"
			)
			.from(".last-card", {
				y: -100,
				opacity: 0,
				duration: 0.7,
			});

		let team = gsap.timeline({
			scrollTrigger: {
				trigger: ".core-team",
				start: "-=150px center",
			},
		});
		team.from(".core-team .heading", {
			x: -100,
			opacity: 0,
			duration: 0.7,
		})
			.from(
				".core-team .leadership",
				{
					y: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			)
			.from(
				".core-team .t-hub",
				{
					y: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			)
			.from(
				".core-team .elp-team",
				{
					y: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			)
			.from(
				".core-team .physics",
				{
					y: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			);

		let programs = gsap.timeline({
			scrollTrigger: {
				trigger: ".programs",
				start: "-=130px center",
			},
		});
		programs
			.from(".programs .heading", {
				x: -100,
				opacity: 0,
				duration: 0.7,
			})
			.from(
				".program-card-container",
				{
					y: 100,
					opacity: 0,
					duration: 0.7,
				},
				"-=0.5"
			);
	},
	all: function () {
		let about_first = gsap.timeline({
			scrollTrigger: {
				trigger: ".about",
				start: "-=150px center",
			},
		});
		about_first.from(".about-top-content", {
			x: -100,
			opacity: 0,
			duration: 0.7,
		});

		let rector = gsap.timeline({
			scrollTrigger: {
				trigger: ".rector-container",
				start: "-=150px center",
			},
		});
		rector.from(".rector-container", {
			x: 100,
			opacity: 0,
			duration: 0.7,
		});

		let news_section = gsap.timeline({
			scrollTrigger: {
				trigger: ".news-section",
				start: "-=50px center",
			},
		});
		news_section.from(".news-section", {
			y: -100,
			opacity: 0,
			duration: 0.7,
		});
	},
});

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
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		1281: {
			slidesPerView: 3,
			spaceBetween: 32,
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

