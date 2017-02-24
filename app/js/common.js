$(document).ready(function(){
	$(window).on('load resize', windowMobile);

	$('.cssload-thecube').fadeOut();
	$('.container-fluid').removeClass('loader');
	
	/* Функция для постепенного появления меню */
	function loadMenu(){
		$('.menu__item').each(function(i){
			$(this).show(300*i).delay(150*i);
		});
	};

	loadMenu(1000);

	/* Функция для мобильного экрана */
	function windowMobile(){
		if ($(window).width() <= '768')
				$('.container-fluid').addClass('mobile');
			else
				$('.container-fluid').removeClass('mobile');
	}

	/* Функция вызывается при нажатии на логопит (для открытия меню) */
	function toggleMenu(){
		if ($(this).hasClass('toggle')){
			$(this).removeClass('toggle');
			textHome = "Главная";
			$('.text-active').text(textHome);
			$('.wrap-container').removeClass('menu--active');
			$('.section').fadeOut(700);
		}
	};

/*
	// для постепенного появления контактов
	loadContact = function(){
		$('.contact').siblings().each(function(i){
			per = $(this).text(i);
			console.log(per);
		})
	};
*/

	/* Функция выполняется при наведении на меню и при нажатии */
	function hoverMenu(){
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
				$('.section').removeClass('section--active');
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

	/* Функиция при нажатии на меню */
	function toggleSection(){
		$(".wrap-container").addClass("menu--active");
		$(".logo").addClass("toggle");
		text = $(this).children('a').text();
		$('.text-active').text(text);
	};

	/* Вызов функция */
	$('.logo').click(toggleMenu);
	$('.menu__item').hover(hoverMenu);
	$('.menu__item').click(toggleSection);

	// закрытие меню
	$(".toggle").click(function(){
		$('.section').removeClass('section--active');
		$(".wrap-container").toggleClass("menu--active");
			$(this).removeClass("toggle");
			$('.text-active').text();
	});

	// вспывашки
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


});

