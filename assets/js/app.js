/**********
DUCK
**********/
$(document).ready(function(){

	var $jsDuckImg = $("#js-duck__image");
	var $jsDuckCap = $("#js-duck__caption");
	var $jsDuckWght = $("#js-duck__weight");
	var $menuCapBuy = $(".menu__caption--buy");
	var $jsDuckBuy = $("#js-duck__buy");
	var $jsDuckDes = $("#js-duck__description");

//CLICK ON IMAGE

	$jsDuckImg.click(function(){
		$(this).toggleClass("selected");                                            //ADD CLASS "SELECTED"
		if ($jsDuckImg.hasClass("selected")){                                       //IF
			$jsDuckCap.html("Печень утки разварная с артишоками.");                   //CHANGE CAPTION
			$jsDuckBuy.hide();                                                        //CHANGE CAPTION
			$jsDuckWght.css("background-color", "#ba1c65");                           //CHANGE WEIGHT COLOR
			$jsDuckImg.mouseleave(function(){                                         //MOUSELEAVE
				$jsDuckDes.html("Котэ не одобряет?").css("color", "#e62e7a");           //CHANGE DESCRIPTION TITLE AND HIS COLOR
			});
		} else {
				$jsDuckCap.html("Чего сидишь? Порадуй котэ,");                          //CHANGE CAPTION
				$jsDuckBuy.show();                                                      //CHANGE CAPTION
				$jsDuckWght.css("background-color", "#5897D6");                         //CHANGE WEIGHT COLOR
				$jsDuckImg.mouseleave(function(){                                       //MOUSELEAVE
					$jsDuckDes.html("Сказочное заморское яство").css("color", "#666666"); //CHANGE DESCRIPTION TITLE AND HIS COLOR
				});
		}
	});

//CLICK ON THE WORD "BUY"

	$jsDuckBuy.click(function(){
		$jsDuckImg.toggleClass("selected");                                         //ADD CLASS "SELECTED"
		if ($jsDuckImg.hasClass("selected")){                                       //IF
			$jsDuckCap.html("Печень утки разварная с артишоками.");                   //CHANGE CAPTION
			$jsDuckBuy.hide();                                                        //CHANGE CAPTION
      $jsDuckWght.css("background-color", "#ba1c65");                           //CHANGE WEIGHT COLOR
      $jsDuckImg.mouseleave(function(){                                         //MOUSELEAVE
        $jsDuckDes.html("Котэ не одобряет?").css("color", "#e62e7a");           //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
		} else {
				$jsDuckCap.html("Чего сидишь? Порадуй котэ,");
				$jsDuckBuy.show();
      	$jsDuckWght.css("background-color", "#5897D6");
      	$jsDuckImg.mouseleave(function(){                                        //MOUSELEAVE
        	$jsDuckDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      	});
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
  var $jsFishDes = $("#js-fish__description");

//CLICK ON IMAGE

	$jsFishImg.click(function(){
		$(this).toggleClass("selected");
		if ($jsFishImg.hasClass("selected")){
			$jsFishCap.html("Головы щучьи с чесноком да свежайшая сёмгушка.");
			$jsFishBuy.hide();
      $jsFishWght.css("background-color", "#ba1c65");
      $jsFishImg.mouseleave(function(){                                       //MOUSELEAVE
        $jsFishDes.html("Котэ не одобряет?").css("color", "#e62e7a");         //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
		} else {
				$jsFishCap.html("Чего сидишь? Порадуй котэ,");
				$jsFishBuy.show();
      	$jsFishWght.css("background-color", "#5897D6");
      	$jsFishImg.mouseleave(function(){                                       //MOUSELEAVE
        	$jsFishDes.html("Сказочное заморское яство").css("color", "#666666"); //CHANGE DESCRIPTION TITLE AND HIS COLOR
      	});
		}
	});

//CLICK ON THE WORD "BUY"

	$jsFishBuy.click(function(){
		$jsFishImg.toggleClass("selected");
		if ($jsFishImg.hasClass("selected")){
			$jsFishCap.html("Головы щучьи с чесноком да свежайшая сёмгушка.");
			$jsFishBuy.hide();
      $jsFishWght.css("background-color", "#ba1c65");
      $jsFishImg.mouseleave(function(){                                       //MOUSELEAVE
        $jsFishDes.html("Котэ не одобряет?").css("color", "#e62e7a");         //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
		} else {
				$jsFishCap.html("Чего сидишь? Порадуй котэ,");
				$jsFishBuy.show();
      	$jsFishWght.css("background-color", "#5897D6");
      	$jsFishImg.mouseleave(function(){                                       //MOUSELEAVE
        	$jsFishDes.html("Сказочное заморское яство").css("color", "#666666"); //CHANGE DESCRIPTION TITLE AND HIS COLOR
      	});
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
	var $jsChickDes = $("#js-chicken__caption");

//DISABLED
$jsChickImg.addClass("disabled");

if ($jsChickImg.hasClass("disabled")){
	$jsChickCap.html("Печалька, с курой закончился.").css("color", "#d2d253");
	$jsChickBuy.hide();
}
/*
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
	});*/
});

