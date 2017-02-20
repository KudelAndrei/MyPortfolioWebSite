$(document).ready(function(){

	toggle = function toggleMenu(){
		if ($(this).hasClass('toggle')){
			$(this).removeClass('toggle');
			$('.wrap-container').removeClass('menu--active');
		}
	};

	hover = function hoverMenu(){
		if($(this).hasClass('menu__item--about')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--about').addClass('hover');
			$(".about").addClass('section--active');
		}
		else if ($(this).hasClass('menu__item--skills')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--skills').addClass('hover');
		}
		else if ($(this).hasClass('menu__item--work')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--work').addClass('hover');
		}
		else if ($(this).hasClass('menu__item--contact')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--contact').addClass('hover');
		}
	};

	section = function toggleSection(){
		$(".wrap-container").addClass("menu--active");
		$(".logo").addClass("toggle");
		text = $(this).text();
		$('.text-active').text(text);
		if ($(this).hasClass('menu__item--about')){
			$('.section').removeClass('section--active');
			$('.about').addClass('section--active');
		}
		else if ($(this).hasClass('menu__item--skills')){
			$('.section').removeClass('section--active');
			$('.skills').addClass('section--active');
		}
		else if ($(this).hasClass('menu__item--work')){
			$('.section').removeClass('section--active');
			$('.work').addClass('section--active');
		}
		else if ($(this).hasClass('menu__item--contact')){
			$('.section').removeClass('section--active');
			$('.contact').removeClass('section--hide');
			$('.contact').one('transitionend', function(e){
				$('.contact').addClass('section--active');
			});
		}
	}


	$('.logo').click(toggle);
	$('.menu__item').hover(hover);
	$('.menu__item').click(section);

	// закрытие меню
	$(".toggle").click(function(){
		$('.section').removeClass('section--active');
		$(".wrap-container").toggleClass("menu--active");
			$(this).removeClass("toggle");
	});



});

