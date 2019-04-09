/**********
DUCK
**********/
$(document).ready(function(){
	var $jsDuckImg = $("#js-duck__image");
	var $jsDuckCap = $("#js-duck__caption");
	var $jsDuckWght = $("#js-duck__weight");
	var $menuCapBuy = $(".menu__caption--buy");
	var $jsDuckBuy = $("#js-duck__buy");
//CLICK ON IMAGE
	$jsDuckImg.click(function(){
		$(this).toggleClass("selected");
		if ($jsDuckImg.hasClass("selected")){
			$jsDuckCap.html("Печень утки разварная с артишоками.");
			$jsDuckBuy.hide();
		} else {
			$jsDuckCap.html("Чего сидишь? Порадуй котэ,");
			$jsDuckBuy.show();
		}
		if ($jsDuckImg.hasClass("selected")){
			$jsDuckWght.css("background-color", "#ba1c65");
		} else {
			$jsDuckWght.css("background-color", "#5897D6");
		}
	});
//CLICK ON THE WORD "BUY"
	$jsDuckBuy.click(function(){
		$jsDuckImg.toggleClass("selected");
		if ($jsDuckImg.hasClass("selected")){
			$jsDuckCap.html("Печень утки разварная с артишоками.");
			$jsDuckBuy.hide();
		} else {
			$jsDuckCap.html("Чего сидишь? Порадуй котэ,");
			$jsDuckBuy.show();
		}
		if ($jsDuckImg.hasClass("selected")){
			$jsDuckWght.css("background-color", "#ba1c65");
		} else {
			$jsDuckWght.css("background-color", "#5897D6");
		}
	});
});

/**********
FISH
**********/
$(document).ready(function(){
	var $jsFishImg = $("#js-fish__image");
	var $jsFishCap = $("#js-fish__caption");
	var $jsFishWght = $("#js-fish__weight");
	var $menuCapBuy = $(".menu__caption--buy");
	var $jsFishBuy = $("#js-fish__buy");
//CLICK ON IMAGE
	$jsFishImg.click(function(){
		$(this).toggleClass("selected");
		if ($jsFishImg.hasClass("selected")){
			$jsFishCap.html("Головы щучьи с чесноком да свежайшая сёмгушка.");
			$jsFishBuy.hide();
		} else {
			$jsFishCap.html("Чего сидишь? Порадуй котэ,");
			$jsFishBuy.show();
		}
		if ($jsFishImg.hasClass("selected")){
			$jsFishWght.css("background-color", "#ba1c65");
		} else {
			$jsFishWght.css("background-color", "#5897D6");
		}
	});
//CLICK ON THE WORD "BUY"
	$jsFishBuy.click(function(){
		$jsFishImg.toggleClass("selected");
		if ($jsFishImg.hasClass("selected")){
			$jsFishCap.html("Головы щучьи с чесноком да свежайшая сёмгушка.");
			$jsFishBuy.hide();
		} else {
			$jsFishCap.html("Чего сидишь? Порадуй котэ,");
			$jsFishBuy.show();
		}
		if ($jsFishImg.hasClass("selected")){
			$jsFishWght.css("background-color", "#ba1c65");
		} else {
			$jsFishWght.css("background-color", "#5897D6");
		}
	});
});

/**********
CHICKEN
**********/
$(document).ready(function(){
	var $jsChickImg = $("#js-chicken__image");
	var $jsChickCap = $("#js-chicken__caption");
	var $jsChickWght = $("#js-chicken__weight");
	var $menuCapBuy = $(".menu__caption--buy");
	var $jsChickBuy = $("#js-chicken__buy");
//CLICK ON IMAGE
	$jsChickImg.click(function(){
		$(this).toggleClass("selected");
		if ($jsChickImg.hasClass("selected")){
			$jsChickCap.html("Филе из цыплят с трюфелями в бульоне.");
			$jsChickBuy.hide();
		} else {
			$jsChickCap.html("Чего сидишь? Порадуй котэ,");
			$jsChickBuy.show();
		}
		if ($jsChickImg.hasClass("selected")){
			$jsChickWght.css("background-color", "#ba1c65");
		} else {
			$jsChickWght.css("background-color", "#5897D6");
		}
	});
//CLICK ON THE WORD "BUY"
	$jsChickBuy.click(function(){
		$jsChickImg.toggleClass("selected");
		if ($jsChickImg.hasClass("selected")){
			$jsChickCap.html("Филе из цыплят с трюфелями в бульоне.");
			$jsChickBuy.hide();
		} else {
			$jsChickCap.html("Чего сидишь? Порадуй котэ,");
			$jsChickBuy.show();
		}
		if ($jsChickImg.hasClass("selected")){
			$jsChickWght.css("background-color", "#ba1c65");
		} else {
			$jsChickWght.css("background-color", "#5897D6");
		}
	});
});

