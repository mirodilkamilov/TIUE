// Navbar dropdown displayed on hover
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

// Adding animating classes on hamburger menu click
$(document).ready(function () {
	$("#menu-button").click(function () {
		$("#first-line").toggleClass("first-line");
		$("#second-line").toggleClass("second-line");
		$("#third-line").toggleClass("third-line");
	});
});

// Take Home button
$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 500) {
			$(".scroll-up-btn").addClass("show");
		} else {
			$(".scroll-up-btn").removeClass("show");
		}
	});
	var typed=new Typed(".typing",{
		strings:["Student Life...",],
		typeSpeed:80,
		backSpeed:60,
		loop:true
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
$("#year").text(new Date().getFullYear());
$(".carousel").owlCarousel({
	margin: 20,
	loop: true,
	autoplayTimeOut: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 2,
			nav: false,
		},
		1000: {
			items: 3,
			nav: false,
		},
	},
});
