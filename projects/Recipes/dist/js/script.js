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
var selectorsArray = [".chicken-legs", ".best-recipes-week", ".pieInOneBowl", ".cheeseCake", ".simpleDrinks", ".whatIsHoney", ".howKneadDough", ".bestMitballs", ".recipes h2", ".categories", ".recipe-item-duck-legs", ".recipe-item-beetroot-salad", ".recipe-item-amer-pie", ".recipe-item-cesar", ".recipe-item-sote", ".recipe-item-fried-eggplant", ".recipe-item-navaren", ".recipe-item-brussels-sprouts", ".recipe-item-liver-cake", ".recipe-item-crab-salad", ".hot-selection h2", ".hangover-recipes", ".maslenitsa", ".recipes-for-children", ".healthy-eating", ".top-authors h2", ".mailing h5", ".form"];

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

  intervalID = setInterval(cleanEventListeners, 5000);

  function cleanEventListeners() {
    if (!body.querySelector(".hide-item")) {
      clearInterval(intervalID);
      document.removeEventListener("DOMContentLoaded", scrolling);
      window.removeEventListener("scroll", throttleScroll);
    }
  }
}
//# sourceMappingURL=script.js.map
