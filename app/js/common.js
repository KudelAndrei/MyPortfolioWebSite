$(document).ready(function(){

	toggle = function toggleMenu(){
		if ($(this).hasClass('toggle')){
			$(this).removeClass('toggle');

			textHome = "Home";
			$('.text-active').text(textHome);
			$('.wrap-container').removeClass('menu--active');
			$('.section').fadeOut(500);
		}
	};

	hover = function hoverMenu(){
		if($(this).hasClass('menu__item--about')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--about').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.about').fadeIn(1000);
			});
		}
		else if ($(this).hasClass('menu__item--skills')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--skills').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.skills').show(1000);
			});
		}
		else if ($(this).hasClass('menu__item--work')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--work').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.work').show(1000);
			});
		}
		else if ($(this).hasClass('menu__item--contact')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--contact').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.contact').show(1000);
			});
		}
	};

	section = function toggleSection(){
		$(".wrap-container").addClass("menu--active");
		$(".logo").addClass("toggle");
		text = $(this).text();
		$('.text-active').text(text);
	};


	$('.logo').click(toggle);
	$('.menu__item').hover(hover);
	$('.menu__item').click(section);

	// закрытие меню
	$(".toggle").click(function(){
		$('.section').removeClass('section--active');
		$(".wrap-container").toggleClass("menu--active");
			$(this).removeClass("toggle");
			tetx1 = 'text';
			$('.text-active').text();
	});



});

