$(document).ready(function(){
	$(".menu__item--about").hover(function(){
			$(".menu__image").siblings().removeClass("hover");
			$(".menu__image--about").addClass("hover");
	});
	$(".menu__item--skills").hover(function(){
			$(".menu__image").siblings().removeClass("hover");
			$(".menu__image--skills").addClass("hover");

	});
});

