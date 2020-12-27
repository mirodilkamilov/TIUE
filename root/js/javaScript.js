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
		$("html").animate({ scrollTop: 0 });
	});

	$(".menu-btn").click(function () {
		$(".navbar .menu").toggleClass("active");
		$(".menu-btn i").toggleClass("active");
	});
	$(".scroll-up-btn").click(function () {
		$("html").animate({ scrollTop: 0 });
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
	"(max-width: 767px)": function () {
		let carousel = gsap.timeline({
			scrollTrigger: {
				trigger: ".main-carousel",
				start: "top center",
			},
		});
		carousel
			.from(".slide1 p, .slide1 h3, .slide1 .read-more-btn", { x: -100, opacity: 0, duration: 0.7 });

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
		vision.from(".vision", { x: -100, opacity: 0, duration: 0.7 });

		let mission = gsap.timeline({
			scrollTrigger: {
				trigger: ".mission",
				start: "-=150px center",
			},
		});
		mission.from(
			".mission",
			{ x: 100, opacity: 0, duration: 0.7 },
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
				".card-container",
				{ x: -100, opacity: 0, duration: 0.7 },
				"-=0.3"
			)
			.from(".last-card", { x: -100, opacity: 0, duration: 0.7 });

		let team = gsap.timeline({
			scrollTrigger: {
				trigger: ".core-team",
				start: "top center",
			},
		});
		team.from(".core-team .heading", { x: -100, opacity: 0, duration: 0.7 })
			.from(".leadership", { x: 100, opacity: 0, duration: 0.7 }, "-=0.5")
			.from(".t-hub", { x: -100, opacity: 0, duration: 0.7 }, "-=0.5");

		let team_last = gsap.timeline({
			scrollTrigger: {
				trigger: ".elp-team",
				start: "top center",
				markers: true,
			},
		});
		team_last
			.from(".elp-team", { x: 100, opacity: 0, duration: 0.7 }, "-=0.5")
			.from(".physics", { x: -100, opacity: 0, duration: 0.7 }, "-=0.5");

		let programs = gsap.timeline({
			scrollTrigger: {
				trigger: ".programs",
				start: "-=150px center",
			},
		});
		programs
			.from(".programs .heading", { x: -100, opacity: 0, duration: 0.7 })
			.from(
				".program-card-container",
				{ y: 100, opacity: 0, duration: 0.7 },
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
		carousel.from(".slide1", { x: -100, opacity: 0, duration: 0.7 });

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
			x: -100,
			opacity: 0,
			duration: 0.7,
		});

		let vision = gsap.timeline({
			scrollTrigger: {
				trigger: ".vision-mission-container",
				start: "-=150px center",
			},
		});
		vision
			.from(".vision", { x: -100, opacity: 0, duration: 0.7 })
			.from(".mission", { x: 100, opacity: 0, duration: 0.7 }, "-=0.5");

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
				".card-container",
				{ y: -100, opacity: 0, duration: 0.7 },
				"-=0.3"
			)
			.from(".last-card", { y: -100, opacity: 0, duration: 0.7 });

		let team = gsap.timeline({
			scrollTrigger: {
				trigger: ".core-team",
				start: "-=150px center",
			},
		});
		team.from(".core-team .heading", { x: -100, opacity: 0, duration: 0.7 })
			.from(".leadership", { y: 100, opacity: 0, duration: 0.7 }, "-=0.5")
			.from(".t-hub", { y: 100, opacity: 0, duration: 0.7 }, "-=0.5")
			.from(".elp-team", { y: 100, opacity: 0, duration: 0.7 }, "-=0.5")
			.from(".physics", { y: 100, opacity: 0, duration: 0.7 }, "-=0.5");

		let programs = gsap.timeline({
			scrollTrigger: {
				trigger: ".programs",
				start: "-=150px center",
			},
		});
		programs
			.from(".programs .heading", { x: -100, opacity: 0, duration: 0.7 })
			.from(
				".program-card-container",
				{ y: 100, opacity: 0, duration: 0.7 },
				"-=0.5"
			);
	},
});
