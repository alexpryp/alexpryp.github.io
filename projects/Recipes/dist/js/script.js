"use strict";

// Gamburger menu animation
function displayMenu(event) {
  $(".nav-menu").toggleClass("nav-menu-hide");
  $(".first").toggleClass("first-active");
  $(".second").toggleClass("second-active");
  $(".third").toggleClass("third-active");
}

$(".gamburger-menu-wrapper").on('click', displayMenu);
$(".nav-menu").on('click', displayMenu); //---------------------------------------------------------------------------
//Page component animation

var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);
document.addEventListener("DOMContentLoaded", scrolling, false);

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
} //that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.


function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }

  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);
var elementArray = [];
var selectorsArray = [".chicken-legs", ".best-recipes-week", ".pieInOneBowl", ".cheeseCake", ".simpleDrinks", ".whatIsHoney", ".howKneadDough", ".bestMitballs", ".recipes h2", ".categories", ".recipe-item-duck-legs", ".recipe-item-beetroot-salad", ".recipe-item-amer-pie", ".recipe-item-cesar", ".recipe-item-sote", ".recipe-item-fried-eggplant", ".recipe-item-navaren", ".recipe-item-brussels-sprouts", ".recipe-item-liver-cake", ".recipe-item-crab-salad", ".hot-selection h2", ".hangover-recipes", ".maslenitsa", ".recipes-for-children", ".healthy-eating", ".top-authors h2", ".mailing", ".form"];

for (var i = 0; i < selectorsArray.length; i++) {
  elementArray.push([$(selectorsArray[i])[0], true]);
}

var body = $("body")[0],
    navMenu = $(".nav-menu")[0],
    navMenuFlag = true,
    statusBar = $(".status-bar")[0],
    statusBarFlag = true,
    recipeMenu = $(".recipe-menu")[0],
    recipeMenuFlag = true,
    topAuthors = $(".top-authors")[0],
    topAuthorsFlag = true,
    footerWrapper = $(".footer-wrapper")[0],
    footerWrapperFlag = true;

function scrolling(e) {
  var intervalID = null;

  if (isPartiallyVisible(navMenu)) {
    if ($(".logo").hasClass("hide-item")) {
      $(".logo").removeClass("hide-item").addClass("show-item");
    }

    if ($(".main-menu a").hasClass("hide-item")) {
      $(".main-menu .hide-item").removeClass("hide-item").addClass("show-item");
    }

    if ($(".nav-footer a").hasClass("hide-item")) {
      $(".nav-footer a").removeClass("hide-item").addClass("show-item");
      navMenuFlag = false;
    }
  }

  if (statusBarFlag && isPartiallyVisible(statusBar)) {
    if ($(".search").hasClass("hide-item")) {
      $(".status-bar .hide-item").removeClass("hide-item").addClass("show-item");
      statusBarFlag = false;
    }
  }

  if (recipeMenuFlag && isPartiallyVisible(recipeMenu)) {
    if ($(".recipe-selection-header").hasClass("hide-item")) {
      $(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
    }

    if ($(".filter-item").hasClass("hide-item")) {
      $(".recipe-menu .hide-item").removeClass("hide-item").addClass("show-item");
      recipeMenuFlag = false;
    }
  }

  if (topAuthorsFlag && isPartiallyVisible(topAuthors)) {
    if ($(".set-of-authors-item").hasClass("hide-item")) {
      $(".set-of-authors-item").removeClass("hide-item").addClass("show-item");
      topAuthorsFlag = false;
    }
  }

  if (footerWrapperFlag && isPartiallyVisible(footerWrapper)) {
    if ($(".footer-wrapper a").hasClass("hide-item")) {
      $(".footer-wrapper a").removeClass("hide-item").addClass("show-item");
      footerWrapperFlag = false;
    }
  }

  for (var _i = 0; _i < elementArray.length; _i++) {
    if (elementArray[_i][1] && isPartiallyVisible(elementArray[_i][0])) {
      if (elementArray[_i][0].classList.contains("hide-item")) {
        elementArray[_i][0].classList.remove("hide-item");

        elementArray[_i][0].classList.add("show-item");

        elementArray[_i][1] = false;
      }
    }
  }

  function cleanEventListeners() {
    if (!body.classList.contains("hide-item")) {
      clearInterval(intervalID);
      document.removeEventListener("DOMContentLoaded", scrolling);
      document.removeEventListener("scroll", throttleScroll);
    }
  }

  intervalID = setInterval(cleanEventListeners, 5000);
}
/*let navMenu = $(".nav-menu")[0],
	statusBar = $(".status-bar")[0],
	statusBarFlag = true,
	recipeMenu = $(".recipe-menu")[0],
	news = $(".news")[0],
	newsFlag = true,
	chikenLegs = $(".chicken-legs")[0],
	chikenLegsFlag = true,
	bestRecipesWeek = $(".best-recipes-week")[0],
	bestRecipesWeekFlag = true,
	pieInOneBowl = $(".pieInOneBowl")[0],
	pieInOneBowlFlag = true,
	cheeseCake = $(".cheeseCake")[0],
	cheeseCakeFlag = true,
	simpleDrinks = $(".simpleDrinks")[0],
	simpleDrinksFlag = true,
	whatIsHoney = $(".whatIsHoney")[0],
	whatIsHoneyFlag = true,
	howKneadDough = $(".howKneadDough")[0],
	howKneadDoughFlag = true,
	bestMitballs = $(".bestMitballs")[0],
	bestMitballsFlag = true,
	recipes = $(".recipes h2")[0],
	recipesFlag = true,
	categories = $(".categories")[0],
	categoriesFlag = true,
	recipeItemDuckLegs = $(".recipe-item-duck-legs")[0],
	recipeItemDuckLegsFlag = true,
	recipeItemBeetrootSalad = $(".recipe-item-beetroot-salad")[0],
	recipeItemBeetrootSaladFlag = true,
	recipeItemAmerPie = $(".recipe-item-amer-pie")[0],
	recipeItemAmerPieFlag = true,
	recipeItemCesar = $(".recipe-item-cesar")[0],
	recipeItemCesarFlag = true,
	recipeItemSote = $(".recipe-item-sote")[0],
	recipeItemSoteFlag = true,
	recipeItemFriedEggplant = $(".recipe-item-fried-eggplant")[0],
	recipeItemFriedEggplantFlag = true,
	recipeItemNavaren = $(".recipe-item-navaren")[0],
	recipeItemNavarenFlag = true,
	recipeItemBrusselsSprouts = $(".recipe-item-brussels-sprouts")[0],
	recipeItemBrusselsSproutsFlag = true,
	recipeItemLiverCake = $(".recipe-item-liver-cake")[0],
	recipeItemLiverCakeFlag = true,
	recipeItemCrabSalad = $(".recipe-item-crab-salad")[0],
	recipeItemCrabSaladFlag = true,
	hotSelection = $(".hot-selection h2")[0],
	hotSelectionFlag = true,
	hangoverRecipes = $(".hangover-recipes")[0],
	hangoverRecipesFlag = true,
	maslenitsa = $(".maslenitsa")[0],
	maslenitsaFlag = true,
	recipesForChildren = $(".recipes-for-children")[0],
	recipesForChildrenFlag = true,
	healthyEating = $(".healthy-eating")[0],
	healthyEatingFlag = true,
	topAuthorsHeader = $(".top-authors h2")[0],
	topAuthorsHeaderFlag = true,
	topAuthors = $(".top-authors")[0],
	topAuthorsFlag = true,
	mailing = $(".mailing")[0],
	mailingFlag = true,
	form = $(".form")[0],
	formFlag = true,
	footerWrapper = $(".footer-wrapper")[0],
	footerWrapperFlag = true;

function scrolling(e) {
	if (isPartiallyVisible( navMenu )) {
		if ($(".logo").hasClass("hide-item")) {
			$(".logo").removeClass("hide-item").addClass("show-item");
		}
		if ( $(".main-menu a").hasClass("hide-item") ) {
			$(".main-menu .hide-item").removeClass("hide-item").addClass("show-item");
		}
		if ($(".nav-footer a").hasClass("hide-item")) {
			$(".nav-footer a").removeClass("hide-item").addClass("show-item");
		}
	}
	if (statusBarFlag && isPartiallyVisible( statusBar )) {
		if ($(".search").hasClass("hide-item")) {
			$(".status-bar .hide-item").removeClass("hide-item").addClass("show-item");
			statusBarFlag = false;
		}
	}
	if (isPartiallyVisible( recipeMenu )) {
		if ($(".recipe-selection-header").hasClass("hide-item")) {
			$(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
		}
		if ($(".filter-item").hasClass("hide-item")) {
			$(".recipe-menu .hide-item").removeClass("hide-item").addClass("show-item");
		}
	}
	if (newsFlag && isPartiallyVisible( news )) {
		if ($(".recipe-selection-header").hasClass("hide-item")) {
			$(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
			newsFlag = false;
		}
	}
	if (chikenLegsFlag && isPartiallyVisible( chikenLegs )) {
		if ($(".chicken-legs").hasClass("hide-item")) {
			$(".chicken-legs").removeClass("hide-item").addClass("show-item");
			chikenLegsFlag = false;
		}
	}
	if (bestRecipesWeekFlag && isPartiallyVisible( bestRecipesWeek )) {
		if ($(".best-recipes-week").hasClass("hide-item")) {
			$(".best-recipes-week").removeClass("hide-item").addClass("show-item");
			bestRecipesWeekFlag = false;
		}
	}
	if (pieInOneBowlFlag && isPartiallyVisible( pieInOneBowl )) {
		if ($(".pieInOneBowl").hasClass("hide-item")) {
			$(".pieInOneBowl").removeClass("hide-item").addClass("show-item");
			pieInOneBowlFlag = false;
		}
	}
	if (isPartiallyVisible( cheeseCake )) {
		if ($(".cheeseCake").hasClass("hide-item")) {
			$(".cheeseCake").removeClass("hide-item").addClass("show-item");
			cheeseCakeFlag = false;
		}
	}
	if (isPartiallyVisible( simpleDrinks )) {
		if ($(".simpleDrinks").hasClass("hide-item")) {
			$(".simpleDrinks").removeClass("hide-item").addClass("show-item");
			simpleDrinksFlag = false;
		}
	}
	if (whatIsHoneyFlag && isPartiallyVisible( whatIsHoney )) {
		if ($(".whatIsHoney").hasClass("hide-item")) {
			$(".whatIsHoney").removeClass("hide-item").addClass("show-item");
			whatIsHoneyFlag = false;
		}
	}
	if (howKneadDoughFlag && isPartiallyVisible( howKneadDough )) {
		if ($(".howKneadDough").hasClass("hide-item")) {
			$(".howKneadDough").removeClass("hide-item").addClass("show-item");
			howKneadDoughFlag = false;
		}
	}
	if (bestMitballsFlag && isPartiallyVisible( bestMitballs )) {
		if ($(".bestMitballs").hasClass("hide-item")) {
			$(".bestMitballs").removeClass("hide-item").addClass("show-item");
			bestMitballsFlag = false;
		}
	}
	if (recipesFlag && isPartiallyVisible( recipes )) {
		if ($(".recipes h2").hasClass("hide-item")) {
			$(".recipes h2").removeClass("hide-item").addClass("show-item");
			recipesFlag = false;
		}
	}
	if (categoriesFlag && isPartiallyVisible( categories )) {
		if ($(".categories").hasClass("hide-item")) {
			$(".categories").removeClass("hide-item").addClass("show-item");
			categoriesFlag = false;
		}
	}
	if (recipeItemDuckLegsFlag && isPartiallyVisible( recipeItemDuckLegs )) {
		if ($(".recipe-item-duck-legs").hasClass("hide-item")) {
			$(".recipe-item-duck-legs").removeClass("hide-item").addClass("show-item");
			recipeItemDuckLegsFlag = false;
		}
	}
	if (recipeItemBeetrootSaladFlag && isPartiallyVisible( recipeItemBeetrootSalad )) {
		if ($(".recipe-item-beetroot-salad").hasClass("hide-item")) {
			$(".recipe-item-beetroot-salad").removeClass("hide-item").addClass("show-item");
			recipeItemBeetrootSaladFlag = false;
		}
	}
	if (recipeItemAmerPieFlag && isPartiallyVisible( recipeItemAmerPie )) {
		if ($(".recipe-item-amer-pie").hasClass("hide-item")) {
			$(".recipe-item-amer-pie").removeClass("hide-item").addClass("show-item");
			recipeItemAmerPieFlag = false;
		}
	}
	if (recipeItemCesarFlag && isPartiallyVisible( recipeItemCesar )) {
		if ($(".recipe-item-cesar").hasClass("hide-item")) {
			$(".recipe-item-cesar").removeClass("hide-item").addClass("show-item");
			recipeItemCesarFlag = false;
		}
	}
	if (recipeItemSoteFlag && isPartiallyVisible( recipeItemSote )) {
		if ($(".recipe-item-sote").hasClass("hide-item")) {
			$(".recipe-item-sote").removeClass("hide-item").addClass("show-item");
			recipeItemSoteFlag = false;
		}
	}
	if (recipeItemFriedEggplantFlag && isPartiallyVisible( recipeItemFriedEggplant )) {
		if ($(".recipe-item-fried-eggplant").hasClass("hide-item")) {
			$(".recipe-item-fried-eggplant").removeClass("hide-item").addClass("show-item");
			recipeItemFriedEggplantFlag = false;
		}
	}
	if (recipeItemNavarenFlag && isPartiallyVisible( recipeItemNavaren )) {
		if ($(".recipe-item-navaren").hasClass("hide-item")) {
			$(".recipe-item-navaren").removeClass("hide-item").addClass("show-item");
			recipeItemNavarenFlag = false;
		}
	}
	if (recipeItemBrusselsSproutsFlag && isPartiallyVisible( recipeItemBrusselsSprouts )) {
		if ($(".recipe-item-brussels-sprouts").hasClass("hide-item")) {
			$(".recipe-item-brussels-sprouts").removeClass("hide-item").addClass("show-item");
			recipeItemBrusselsSproutsFlag = false;
		}
	}
	if (recipeItemLiverCakeFlag && isPartiallyVisible( recipeItemLiverCake )) {
		if ($(".recipe-item-liver-cake").hasClass("hide-item")) {
			$(".recipe-item-liver-cake").removeClass("hide-item").addClass("show-item");
			recipeItemLiverCakeFlag = false;
		}
	}
	if (recipeItemCrabSaladFlag && isPartiallyVisible( recipeItemCrabSalad )) {
		if ($(".recipe-item-crab-salad").hasClass("hide-item")) {
			$(".recipe-item-crab-salad").removeClass("hide-item").addClass("show-item");
			recipeItemCrabSaladFlag = false;
		}
	}
	if (hotSelectionFlag && isPartiallyVisible( hotSelection )) {
		if ($(".hot-selection h2").hasClass("hide-item")) {
			$(".hot-selection h2").removeClass("hide-item").addClass("show-item");
			hotSelectionFlag = false;
		}
	}
	if (hangoverRecipesFlag && isPartiallyVisible( hangoverRecipes )) {
		if ($(".hangover-recipes").hasClass("hide-item")) {
			$(".hangover-recipes").removeClass("hide-item").addClass("show-item");
			hangoverRecipesFlag = false;
		}
	}
	if (maslenitsaFlag && isPartiallyVisible( maslenitsa )) {
		if ($(".maslenitsa").hasClass("hide-item")) {
			$(".maslenitsa").removeClass("hide-item").addClass("show-item");
			maslenitsaFlag = false;
		}
	}
	if (recipesForChildrenFlag && isPartiallyVisible( recipesForChildren )) {
		if ($(".recipes-for-children").hasClass("hide-item")) {
			$(".recipes-for-children").removeClass("hide-item").addClass("show-item");
			recipesForChildrenFlag = false;
		}
	}
	if (healthyEatingFlag && isPartiallyVisible( healthyEating )) {
		if ($(".healthy-eating").hasClass("hide-item")) {
			$(".healthy-eating").removeClass("hide-item").addClass("show-item");
			healthyEatingFlag = false;
		}
	}
	if (topAuthorsHeaderFlag && isPartiallyVisible( topAuthorsHeader )) {
		if ($(".top-authors h2").hasClass("hide-item")) {
			$(".top-authors h2").removeClass("hide-item").addClass("show-item");
			topAuthorsHeaderFlag = false;
		}
	}
	if (topAuthorsFlag && isPartiallyVisible( topAuthors )) {
		if ($(".set-of-authors-item").hasClass("hide-item")) {
			$(".set-of-authors-item").removeClass("hide-item").addClass("show-item");
			topAuthorsFlag = false;
		}
	}
	if (mailingFlag && isPartiallyVisible( mailing )) {
		if ($(".mailing h5").hasClass("hide-item")) {
			$(".mailing h5").removeClass("hide-item").addClass("show-item");
			mailingFlag = false;
		}
	}
	if (formFlag && isPartiallyVisible( form )) {
		if ($(".form").hasClass("hide-item")) {
			$(".form").removeClass("hide-item").addClass("show-item");
			formFlag = false;
		}
	}
	if (footerWrapperFlag && isPartiallyVisible( footerWrapper )) {
		if ($(".footer-wrapper a").hasClass("hide-item")) {
			$(".footer-wrapper a").removeClass("hide-item").addClass("show-item");
			footerWrapperFlag = false;
		}
	}
}*/
//# sourceMappingURL=script.js.map
