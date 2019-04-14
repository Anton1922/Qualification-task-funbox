
$(document).ready(function(){

	var $jsImg = $(".js-image");

//DUCK VARIABLES
  var $jsDuckImg = $("#js-duck__image");
	var $jsDuckCap = $("#js-duck__caption");
	var $jsDuckWght = $("#js-duck__weight");
	var $jsDuckBuy = $("#js-duck__buy");
	var $jsDuckDes = $("#js-duck__description");

//FISH VARIABLES
  var $jsFishImg = $("#js-fish__image");
  var $jsFishCap = $("#js-fish__caption");
  var $jsFishWght = $("#js-fish__weight");
  var $jsFishBuy = $("#js-fish__buy");
  var $jsFishDes = $("#js-fish__description");

//CJICKEN VARIABLES
  var $jsChickImg = $("#js-chicken__image");
  var $jsChickCap = $("#js-chicken__caption");
  var $jsChickWght = $("#js-chicken__weight");
  var $jsChickBuy = $("#js-chicken__buy");
  var $jsChickDes = $("#js-chicken__description");

/**************
CLICK ON IMAGE
**************/

	$jsImg.click(function(){
		$(this).toggleClass("selected");  //ADD CLASS "SELECTED TO IMAGE"

    //DUCK

		if ($jsDuckImg.hasClass("selected")){
			$jsDuckCap.html("Печень утки разварная с артишоками.");  //CHANGE CAPTION
			$jsDuckBuy.hide();   //HIDE WORD "BUY"
			$jsDuckWght.css("background-color", "#ba1c65");  //CHANGE WEIGHT COLOR
			$jsDuckImg.mouseleave(function(){  //ADD MOUSELEAVE
				$jsDuckDes.html("Котэ не одобряет?").css("color", "#e62e7a");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
			});
      $jsDuckImg.mouseenter(function(){  //ADD MOUSENTER
        $jsDuckDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
		} else {
				$jsDuckCap.html("Чего сидишь? Порадуй котэ,");  //CHANGE CAPTION BACK
				$jsDuckBuy.show();  //SHOW WORD "BUY"
				$jsDuckWght.css("background-color", "#5897D6");  //CHANGE WEIGHT COLOR BACK
				$jsDuckImg.unbind('mouseleave');  //MOUSELEAVE REMOVE
        $jsDuckDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR BACK
		}

    //FISH

    if ($jsFishImg.hasClass("selected")){
      $jsFishCap.html("Головы щучьи с чесноком да свежайшая сёмгушка.");  //CHANGE CAPTION
      $jsFishBuy.hide();  //HIDE WORD "BUY"
      $jsFishWght.css("background-color", "#ba1c65");  //CHANGE WEIGHT COLOR
      $jsFishImg.mouseleave(function(){  //ADD MOUSELEAVE
        $jsFishDes.html("Котэ не одобряет?").css("color", "#e62e7a");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
      $jsFishImg.mouseenter(function(){  //MOUSENTER
        $jsFishDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
    } else {
        $jsFishCap.html("Чего сидишь? Порадуй котэ,");  //CHANGE CAPTION BACK
        $jsFishBuy.show();  //SHOW WORD "BUY"
        $jsFishWght.css("background-color", "#5897D6"); //CHANGE WEIGHT COLOR BACK
        $jsFishImg.unbind('mouseleave');  //MOUSELEAVE REMOVE
        $jsFishDes.html("Сказочное заморское яство").css("color", "#666666"); //CHANGE DESCRIPTION TITLE AND HIS COLOR BACK
    }

  //CHICKEN
  
  /*if ($jsChickImg.hasClass("selected")){
      $jsChickCap.html("Филе из цыплят с трюфелями в бульоне.");  //CHANGE CAPTION
      $jsChickBuy.hide();  //HIDE WORD "BUY"
      $jsChickWght.css("background-color", "#ba1c65");  //CHANGE WEIGHT COLOR
      $jsChickImg.mouseleave(function(){  //ADD MOUSELEAVE
        $jsChickDes.html("Котэ не одобряет?").css("color", "#e62e7a");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
      $jsChickImg.mouseenter(function(){  //ADD MOUSENTER
        $jsChickDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
    } else {
      $jsChickCap.html("Чего сидишь? Порадуй котэ,");  //CHANGE CAPTION BACK
      $jsChickBuy.show();  //SHOW WORD "BUY"
      $jsChickWght.css("background-color", "#5897D6"); //CHANGE WEIGHT COLOR BACK
      $jsChickImg.unbind('mouseleave');  //MOUSELEAVE REMOVE
      $jsChickDes.html("Сказочное заморское яство").css("color", "#666666"); //CHANGE DESCRIPTION TITLE AND HIS COLOR BACK
    }*/
  });

/*******************
CLICK ON WORD "BUY"
*******************/

  //DUCK

	$jsDuckBuy.click(function(){
		$jsDuckImg.toggleClass("selected");  //ADD CLASS "SELECTED"
		if ($jsDuckImg.hasClass("selected")){  
			$jsDuckCap.html("Печень утки разварная с артишоками.");  //CHANGE CAPTION
			$jsDuckBuy.hide();  //HIDE WORD "BUY"
      $jsDuckWght.css("background-color", "#ba1c65");  //CHANGE WEIGHT COLOR
      $jsDuckImg.mouseleave(function(){  //ADD MOUSELEAVE
        $jsDuckDes.html("Котэ не одобряет?").css("color", "#e62e7a");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
      $jsDuckImg.mouseenter(function(){  //ADD MOUSENTER
        $jsDuckDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
		} else {
				$jsDuckCap.html("Чего сидишь? Порадуй котэ,");  //CHANGE CAPTION BACK
				$jsDuckBuy.show();  //SHOW WORD "BUY"
      	$jsDuckWght.css("background-color", "#5897D6");  //CHANGE WEIGHT COLOR BACK
      	$jsDuckImg.unbind('mouseleave'); //MOUSELEAVE REMOVE
        $jsDuckDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR BACK
		}
	});

  //FISH

  $jsFishBuy.click(function(){
    $jsFishImg.toggleClass("selected");  //ADD CLASS "SELECTED"
    if ($jsFishImg.hasClass("selected")){
      $jsFishCap.html("Головы щучьи с чесноком да свежайшая сёмгушка.");  //CHANGE CAPTION
      $jsFishBuy.hide();  //HIDE WORD "BUY"
      $jsFishWght.css("background-color", "#ba1c65");  //CHANGE WEIGHT COLOR
      $jsFishImg.mouseleave(function(){  //MOUSELEAVE
        $jsFishDes.html("Котэ не одобряет?").css("color", "#e62e7a");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
      $jsFishImg.mouseenter(function(){  //MOUSENTER
        $jsFishDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
    } else {
        $jsFishCap.html("Чего сидишь? Порадуй котэ,");  //CHANGE CAPTION BACK
        $jsFishBuy.show();  //SHOW WORD "BUY"
        $jsFishWght.css("background-color", "#5897D6");  //CHANGE WEIGHT COLOR BACK
        $jsFishImg.unbind('mouseleave');  //MOUSELEAVE REMOVE
        $jsFishDes.html("Сказочное заморское яство").css("color", "#666666");  //CHANGE DESCRIPTION TITLE AND HIS COLOR BACK
    }
  });

  //CHICKEN

  /*$jsChickBuy.click(function(){
    $jsChickImg.toggleClass("selected");
    if ($jsChickImg.hasClass("selected")){
      $jsChickCap.html("Филе из цыплят с трюфелями в бульоне.");
      $jsChickBuy.hide();
      $jsChickWght.css("background-color", "#ba1c65");
      $jsChickImg.mouseleave(function(){  //ADD MOUSELEAVE
        $jsChickDes.html("Котэ не одобряет?").css("color", "#e62e7a");  //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
      $jsChickImg.mouseenter(function(){                                         //MOUSELEAVE
        $jsChickDes.html("Сказочное заморское яство").css("color", "#666666");           //CHANGE DESCRIPTION TITLE AND HIS COLOR
      });
    } else {
      $jsChickCap.html("Чего сидишь? Порадуй котэ,");
      $jsChickBuy.show();
      $jsChickWght.css("background-color", "#5897D6");
      $jsChickImg.unbind('mouseleave');  //MOUSELEAVE REMOVE
      $jsChickDes.html("Сказочное заморское яство").css("color", "#666666");
    }
  });*/

  //DISABLED

  $jsChickImg.addClass("disabled");

    if ($jsChickImg.hasClass("disabled")){
      $jsChickCap.html("Печалька, с курой закончился.").css("color", "#d2d253");
      $jsChickBuy.hide();
    }

});

