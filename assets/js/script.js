(function ($) {
	var allfunction = {
		//sticky menu
		sticky_header:function(){					
			$(window).on('scroll',function(){
				if($(this).scrollTop() > 20){
					$('.header').addClass('sticky');
				}
				else{
					$('.header').removeClass('sticky');
				}
			});	
		},
		//search
		searh_click: function () {
			$('.search').on("click", function (e) {
				e.stopPropagation()
				$(".sub-icon").addClass('active');
				if ($('.cart-area').hasClass('active')) {
					$('.cart-area').removeClass('active');
					$("body").removeClass('body-overlay');
				}
			});
			$('.search-close').on("click", function (e) {
				e.stopPropagation()
				$(this).parent().removeClass('active');
			});
		},
		//cart
		cart_click: function () {
			$('.cart').on("click", function (e) {
				e.stopPropagation()
				$(".cart-area").toggleClass('active');
				if ($('.cart-area').hasClass('active')) {
					$("body").addClass('body-overlay');
				} else {
					$("body").removeClass('body-overlay');
				}
			});
		},
		// About Gallery
		gallMesh: function () {
			if ($('.gallery').length) {
				var $grid = $('.gallery').isotope({
					itemSelector: '.single-gallery',
					masonry: {
						columnWidth: 1,
					}
				});
				$grid.imagesLoaded().progress(function () {
					$grid.isotope('layout')
				});
			}
		},
		stopPropagationElements: () => {
			$('.cart-area').click(function (e) {
				e.stopPropagation()
			}),
			$('.flip').click(function (e) {
				e.stopPropagation()
			})
		},
		//================ Document click to hide elements ==================
		elementHide: () => {
			$(document).click(function () {
				$('.cart-area').removeClass('active');
				$('body').removeClass('body-overlay');
			})
		},
		//shopv2 category
		dropdownSlide: () => {
			$('.dropdown a').on("click",function () {
				$(this).siblings().slideToggle().parents().siblings().children('.d-subMenu').slideUp();
			})
		},
		elemntCatSLider: () => {
			$('.single-left h6').on("click",function () {
				$(this).siblings().slideToggle().parents().siblings().children('ul').slideUp();
			})
		},
		aosEnimation:() =>{
			AOS.init({
				once :true,	
			});
		},
		//nice select
		niceSelect : () =>{		
			$('select').niceSelect();	
		},
		//date picker
		datePicker : () =>{		
			$('#datepicker').datepicker({
				format: "dd/mm/yyyy",
				autoclose: true,
				todayHighlight: true,
			  	showOtherMonths: true,
			 	 selectOtherMonths: true,
			  	autoclose: true,
			  	changeMonth: true,
			  	changeYear: true,
			  	orientation: "button"
			});	
		},
		foodSlider : () =>{
			if ($('.product-slider').length) {
				var sync1 = jQuery("#sync1");
				var sync2 = jQuery("#sync2");
				var slidesPerPage = 4; //globaly define number of elements per page
				var syncedSecondary = true;
			
				sync1
				  .owlCarousel({
				  items: 1,
				  slideSpeed: 3000,
				  nav: false,
				  dots: false,
				  loop: true,
				 
				})
				  .on("changed.owl.carousel", syncPosition);
			
				sync2
				  .on("initialized.owl.carousel", function() {
				  sync2
					.find(".owl-item")
					.eq(0)
					.addClass("current");
				})
				  .owlCarousel({
					items: slidesPerPage,
					dots: false,
					//   nav: true,
					smartSpeed: 1000,
					slideSpeed: 1000,
					slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
					responsiveRefreshRate: 100
				})
				  .on("changed.owl.carousel", syncPosition2);
			
				function syncPosition(el) {
				  var count = el.item.count - 1;
				  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
			
				  if (current < 0) {
					current = count;
				  }
				  if (current > count) {
					current = 0;
				  }
				  sync2
					.find(".owl-item")
					.removeClass("current")
					.eq(current)
					.addClass("current");
				  var onscreen = sync2.find(".owl-item.active").length - 1;
				  var start = sync2
				  .find(".owl-item.active")
				  .first()
				  .index();
				  var end = sync2
				  .find(".owl-item.active")
				  .last()
				  .index();
			
				  if (current > end) {
					sync2.data("owl.carousel").to(current, 100, true);
				  }
				  if (current < start) {
					sync2.data("owl.carousel").to(current - onscreen, 100, true);
				  }
				}
			
				function syncPosition2(el) {
				  if (syncedSecondary) {
					var number = el.item.index;
					sync1.data("owl.carousel").to(number, 100, true);
				  }
				}
			
				sync2.on("click", ".owl-item", function(e) {
				  e.preventDefault();
				  var number = jQuery(this).index();
				  sync1.data("owl.carousel").to(number, 300, true);
				});
			}
			if ($('.home-desc-slider').length) {
				$(".home-desc-slider").owlCarousel({
					items:1,
					loop:true,
					nav:false,
					autoplay:true,
					autoplayTimeout:2000,
					animateIn: 'fadeIn',
					dots:true,
				  });
			}
			// if ($('.home-desc-slider').length) {
			// 	$(".home-desc-slider").owlCarousel({
			// 		items:1,
			// 		loop:true,
			// 		nav:false,
			// 		autoplay:true,
			// 		autoplayTimeout:2000,
			// 		animateIn: 'fadeIn',
			// 		dots:true,
			// 	  });
			// }
			$(".review-slider").owlCarousel({
				items:1,
				loop:true,
				nav:true,
				autoplay:true,
				autoplayTimeout:2000,
				animateIn: 'fadeIn',
				navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
			  });
			  $(".hme-ReviewSlider").owlCarousel({
				items:1,
				loop:true,
				nav:true,
				autoplay:true,
				autoplayTimeout:2000,
				animateIn: 'fadeIn',
				navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
			  });
			  $(".banner").owlCarousel({
				items:1,
				loop:true,
				nav:true,
				autoplay:true,
				autoplayTimeout:2000,
				animateIn: 'fadeIn',
				navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
			  });
		},
		slickReview : () =>{
			$('.review-slider2').slick({
				slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		  nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		  
		  });
		},

		popUpVideo : () =>{
			$('.popup-video').magnificPopup({
				type: 'iframe'
			  });
		},
		dataTable : () =>{
			$('#example').DataTable({
                responsive: true,
                "paging": false,
                "info": false,
				"searching": false,				
            });
		},
		countDown  : ()	=>{
			$(".count-down").countdown("2023/04/14", function(event) {
			  $(this).html(event.strftime('%D days %H:%M:%S'));
			  $(this).html(event.strftime('<div class="single-counter"><h3>%D</h3><p>Days</p></div><div class="single-counter"><h3>%H</h3><p>Hours</p></div><div class="single-counter"><h3>%M</h3><p>Minute</p></div><div class="single-counter"><h3>%S</h3><p>Seconds</p></div>'));
		   
			});
		},	

		shopSlideRange : () =>{
			if ($('#slider-container').length) {
				$(function () {
					$('#slider-container').slider({
						range: true,
						min: 0,
						max: 200,
						values: [0, 40],
						create: function() {
							$("#amount").val("$0 - $20");
						},
						slide: function (event, ui) {
							$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
							var mi = ui.values[0];
							var mx = ui.values[1];
							filterSystem(mi, mx);
						}
					})
				});
				function filterSystem(minPrice, maxPrice) {
					$(".filter-wrapper div.filter-data").hide().filter(function () {
						var price = parseInt($(this).data("price"), 10);
						return price >= minPrice && price <= maxPrice;
					}).show();
				}
			}
		},	
		// scrollTop : () =>{
		// 	$(window).on('scroll',function(){
		// 		if($(this).scrollTop()>300){
		// 			$('#return').addClass('scrollTop');
		// 		}else{
		// 			$('#return').removeClass('scrollTop');
	
		// 		}
		// 		$('#return').click(function(){
		// 			$('html,body').animate({
		// 				scrollTop:0
		// 			})
		// 		});
		// 	});
		// },
		init: function () {
			// allfunction.scrollTop();
			allfunction.searh_click();
			allfunction.cart_click();
			allfunction.gallMesh();
			allfunction.elementHide();
			allfunction.stopPropagationElements();
			allfunction.aosEnimation();
			allfunction.sticky_header();
			allfunction.niceSelect();
			allfunction.datePicker();
			allfunction.foodSlider();
			allfunction.dataTable();
			allfunction.popUpVideo();
			allfunction.countDown();
			allfunction.shopSlideRange();
			allfunction.elemntCatSLider();
			allfunction.slickReview();
			allfunction.dropdownSlide();
		},
	}
	$(document).ready(function () {
		allfunction.init();
	});
})(jQuery);

$(document).ready(function () {
	$("#myinput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#card div").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

		});
	});

	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

});


// javascript call here
/*---------------------------------------
	header js
----------------------------------------*/
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
let dSubMenu;
menuMain.addEventListener("click", (e) => {
	if (!menu.classList.contains("active")) {
		return;
	}
	if (e.target.closest(".menu-item-has-children")) {
		const hasChildren = e.target.closest(".menu-item-has-children");
		showSubMenu(hasChildren);
	}
});
goBack.addEventListener("click", () => {
	hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
	toggleMenu();
})
closeMenu.addEventListener("click", () => {
	toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
	toggleMenu();
})

function toggleMenu() {
	menu.classList.toggle("active");
	document.querySelector(".menu-overlay").classList.toggle("active");
}

function showSubMenu(hasChildren) {
	subMenu = hasChildren.querySelector(".sub-menu");
	subMenu.classList.add("active");
	subMenu.style.animation = "slideLeft 0.5s ease forwards";
	const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
	menu.querySelector(".current-menu-title").innerHTML = menuTitle;
	menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
	subMenu.style.animation = "slideRight 0.5s ease forwards";
	setTimeout(() => {
		subMenu.classList.remove("active");
	}, 300);
	menu.querySelector(".current-menu-title").innerHTML = "";
	menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
	if (this.innerWidth > 991) {
		if (menu.classList.contains("active")) {
			toggleMenu();
		}
	}
}

//preloader
var loader=document.getElementById("pre-loader");
window.addEventListener("load",function(){
  loader.style.display="none";
});

//increment decrement
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.getElementsByClassName('incre-decre')
    function incInputNumber(input, i) {
        var val = +input.value
        if (isNaN(val)) val = 0
        val += i
        input.value = val > 0 ? val : 0
    }
    Array.prototype.forEach.call(inputs, function(el) {
        var input = el.getElementsByTagName('input')[0]

        el.getElementsByClassName('inc')[0].addEventListener('click', function() {
             incInputNumber(input, 1)
             })
        el.getElementsByClassName('dec')[0].addEventListener('click', function() {
             incInputNumber(input, -1) 
            })
    });
});       


