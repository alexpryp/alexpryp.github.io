"use strict";

// Gamburger menu animation
function displayMenu(event) {
  $(".nav-menu").toggleClass("nav-menu-hide");
  $(".first").toggleClass("first-active");
  $(".second").toggleClass("second-active");
  $(".third").toggleClass("third-active");
  $(".fourth").toggleClass("fourth-active");
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

function scrolling(e) {
  if (isPartiallyVisible($(".nav-menu")[0])) {
    if ($(".logo").hasClass("hide-item")) {
      $(".logo").removeClass("hide-item").addClass("show-item");
    }

    if ($(".main-menu a").hasClass("hide-item")) {
      $(".main-menu .hide-item").removeClass("hide-item").addClass("show-item");
    }

    if ($(".nav-footer a").hasClass("hide-item")) {
      $(".nav-footer a").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".status-bar")[0])) {
    if ($(".search").hasClass("hide-item")) {
      $(".status-bar .hide-item").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-menu")[0])) {
    if ($(".recipe-selection-header").hasClass("hide-item")) {
      $(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
    }

    if ($(".filter-item").hasClass("hide-item")) {
      $(".recipe-menu .hide-item").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".news")[0])) {
    if ($(".recipe-selection-header").hasClass("hide-item")) {
      $(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".chicken-legs")[0])) {
    if ($(".chicken-legs").hasClass("hide-item")) {
      $(".chicken-legs").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".best-recipes-week")[0])) {
    if ($(".best-recipes-week").hasClass("hide-item")) {
      $(".best-recipes-week").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".pieInOneBowl")[0])) {
    if ($(".pieInOneBowl").hasClass("hide-item")) {
      $(".pieInOneBowl").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".cheeseCake")[0])) {
    if ($(".cheeseCake").hasClass("hide-item")) {
      $(".cheeseCake").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".simpleDrinks")[0])) {
    if ($(".simpleDrinks").hasClass("hide-item")) {
      $(".simpleDrinks").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".whatIsHoney")[0])) {
    if ($(".whatIsHoney").hasClass("hide-item")) {
      $(".whatIsHoney").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".howKneadDough")[0])) {
    if ($(".howKneadDough").hasClass("hide-item")) {
      $(".howKneadDough").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".bestMitballs")[0])) {
    if ($(".bestMitballs").hasClass("hide-item")) {
      $(".bestMitballs").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipes h2")[0])) {
    if ($(".recipes h2").hasClass("hide-item")) {
      $(".recipes h2").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".categories")[0])) {
    if ($(".categories").hasClass("hide-item")) {
      $(".categories").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-duck-legs")[0])) {
    if ($(".recipe-item-duck-legs").hasClass("hide-item")) {
      $(".recipe-item-duck-legs").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-beetroot-salad")[0])) {
    if ($(".recipe-item-beetroot-salad").hasClass("hide-item")) {
      $(".recipe-item-beetroot-salad").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-amer-pie")[0])) {
    if ($(".recipe-item-amer-pie").hasClass("hide-item")) {
      $(".recipe-item-amer-pie").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-cesar")[0])) {
    if ($(".recipe-item-cesar").hasClass("hide-item")) {
      $(".recipe-item-cesar").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-sote")[0])) {
    if ($(".recipe-item-sote").hasClass("hide-item")) {
      $(".recipe-item-sote").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-fried-eggplant")[0])) {
    if ($(".recipe-item-fried-eggplant").hasClass("hide-item")) {
      $(".recipe-item-fried-eggplant").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-navaren")[0])) {
    if ($(".recipe-item-navaren").hasClass("hide-item")) {
      $(".recipe-item-navaren").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-brussels-sprouts")[0])) {
    if ($(".recipe-item-brussels-sprouts").hasClass("hide-item")) {
      $(".recipe-item-brussels-sprouts").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-liver-cake")[0])) {
    if ($(".recipe-item-liver-cake").hasClass("hide-item")) {
      $(".recipe-item-liver-cake").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipe-item-crab-salad")[0])) {
    if ($(".recipe-item-crab-salad").hasClass("hide-item")) {
      $(".recipe-item-crab-salad").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".hot-selection h2")[0])) {
    if ($(".hot-selection h2").hasClass("hide-item")) {
      $(".hot-selection h2").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".hangover-recipes")[0])) {
    if ($(".hangover-recipes").hasClass("hide-item")) {
      $(".hangover-recipes").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".maslenitsa")[0])) {
    if ($(".maslenitsa").hasClass("hide-item")) {
      $(".maslenitsa").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".maslenitsa")[0])) {
    if ($(".maslenitsa").hasClass("hide-item")) {
      $(".maslenitsa").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".recipes-for-children")[0])) {
    if ($(".recipes-for-children").hasClass("hide-item")) {
      $(".recipes-for-children").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".healthy-eating")[0])) {
    if ($(".healthy-eating").hasClass("hide-item")) {
      $(".healthy-eating").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".top-authors h2")[0])) {
    if ($(".top-authors h2").hasClass("hide-item")) {
      $(".top-authors h2").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".top-authors")[0])) {
    if ($(".set-of-authors-item").hasClass("hide-item")) {
      $(".set-of-authors-item").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".mailing")[0])) {
    if ($(".mailing h5").hasClass("hide-item")) {
      $(".mailing h5").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".form")[0])) {
    if ($(".form").hasClass("hide-item")) {
      $(".form").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible($(".footer-wrapper")[0])) {
    if ($(".footer-wrapper a").hasClass("hide-item")) {
      $(".footer-wrapper a").removeClass("hide-item").addClass("show-item");
    }
  }
}
//# sourceMappingURL=script.js.map
