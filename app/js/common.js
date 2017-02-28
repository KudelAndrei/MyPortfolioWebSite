$(document).ready(function(){
	$(window).on('load resize', windowMobile);

	$('.cssload-thecube').fadeOut();
	$('.container-fluid').removeClass('loader');

		/* Анимация */
		$('.section__head').addClass('animated fadeInDown');


	
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

	/*
	function eachSlide(){
		slidefirst = $('.work__doc-slider').children().first();
		$('.slider-img').siblings().removeClass('slider-img--active');
		slidefirst.next().addClass('slider-img--active');
	};


	function sliderWork(){
		if($('.zoom-anim-dialog').hasClass('mfp-hide')){
			setInterval(eachSlide, 4000);
		}
	}
	*/

	

	$('.link-more').click(function(){
		if ($('.work__doc').hasClass('mfp-hide')){
			setInterval(nextSlide, 6000);	
		}
		clearInterval(nextSlide);
		
	});

	var slides = document.querySelectorAll('.work__doc-slider .slider-img');
	var currentSlide = 0;

	function nextSlide(){
		slides[currentSlide].className = 'slider-img';
		currentSlide = (currentSlide+1)%slides.length;
		slides[currentSlide].className = 'slider-img slider-img--active';
	}


	/* Функция выполняется при наведении на меню и при нажатии */
	function hoverMenu(){
		if($(this).hasClass('menu__item--about')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--about').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.about').fadeIn(500);
				/* анимация */
				$('.about__image').addClass('animated fadeInLeftBig');
				$('.section__head.about__head').addClass('animated fadeInDown');
				$('.about__description').addClass('animated fadeInRight');
				/* end */
			});
		}
		else if ($(this).hasClass('menu__item--skills')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--skills').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.skills').fadeIn(500);
				/* анимация */
				$('.skills-card, .tools__item').each(function(i){
					setTimeout(function() {
						$('.skills-card, .tools__item').eq(i).addClass('animated fadeInUp');
					}, 200*i);		
				});
				/* end */
			});
		}
		else if ($(this).hasClass('menu__item--work')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--work').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.work').fadeIn(500);
				/* анимация */
				$('.work__card').addClass('animated fadeInDown');
				/* end */
			});
		}
		else if ($(this).hasClass('menu__item--contact')){
			$('.menu__image').siblings().removeClass("hover");
			$('.menu__image--contact').addClass('hover');
			$(this).click(function(){
				$('.section').removeClass('section--active');
				$('.contact').fadeIn(500);
				/* анимация */
				$('.skills-card, .tools__item').each(function(i){
					setTimeout(function() {
						$('.contact-info__item, .contact-social__item').eq(i).addClass('animated fadeInUp');
					}, 200*i);		
				});
				/* end */
			});
		}
	};

	/* Функиция при нажатии на меню */
	function toggleSection(){
		$(".wrap-container").addClass("menu--active");
		$(".logo").addClass("toggle");
		text = $(this).children('a').text();
		$('.text-active').text(text);
		//
	};


	/*
	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}
	function parallaxWork(){
		var scrolled = $(window).scrollTop()/getRandomArbitrary(10, 20);
	  	$('.work__card').css('background-position-y',-(scrolled)+'px');
	  	console.log(scrolled);
	};
	$(window).scroll(function(e){
	  parallaxWork();
	});
	*/


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

