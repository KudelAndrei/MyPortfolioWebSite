$(document).ready(function(){

	$('.cssload-thecube').fadeOut();
	$('.container-fluid').removeClass('loader');
	
	function loadMenu(){
		$('.menu__item').each(function(i){
			$(this).show(300*i).delay(150*i);
		});
	};

	loadMenu(1000);


	toggle = function toggleMenu(){
		if ($(this).hasClass('toggle')){
			$(this).removeClass('toggle');
			textHome = "Главная";
			$('.text-active').text(textHome);
			$('.wrap-container').removeClass('menu--active');
			$('.section').fadeOut(700);
		}
	};

	hover = function hoverMenu(){
		if($(this).hasClass('menu__item--about')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--about').addClass('hover');
			$(this).click(function(){
				//$(this).hide(300);
				$('.section').removeClass('section--active');
				$('.about').fadeIn(1000);
			});
		}
		else if ($(this).hasClass('menu__item--skills')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--skills').addClass('hover');
			$(this).click(function(){
				$('.skills').fadeIn(1000);
			});
		}
		else if ($(this).hasClass('menu__item--work')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--work').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.work').fadeIn(1000);
			});
		}
		else if ($(this).hasClass('menu__item--contact')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--contact').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.contact').fadeIn(1000);
			});
		}
	};

	section = function toggleSection(){
		$(".wrap-container").addClass("menu--active");
		$(".logo").addClass("toggle");
		text = $(this).children('a').text();
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
			$('.text-active').text();
	});



});

