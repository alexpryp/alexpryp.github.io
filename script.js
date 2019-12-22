"use strict"; //script that simulates active tabs

function activateTab(evt) {
  var i, tablinks; // Get all elements with class="tablinks" and remove the class "active"

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  } //Add an "active" class to the button that opened the tab


  evt.currentTarget.className += " active";
} // smooth page movement to the desired block


var anchors = document.querySelectorAll('a[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector("a[name=".concat(blockID.slice(1), "]")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } //automatic switching of menu items

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

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
var selectorsArray = [[".about"], [".portfolio"], [".contact"]];

for (var i = 0; i < selectorsArray.length; i++) {
  elementArray.push([$(selectorsArray[i][0])[0]]);
}

elementArray[0].push($("a[href='#about']")[0]);
elementArray[1].push($("a[href='#portfolio']")[0]);
elementArray[2].push($("a[href='#contact']")[0]);

function scrolling(e) {
  for (var _i = 0; _i < elementArray.length; _i++) {
    if (isPartiallyVisible(elementArray[_i][0]) && checkSize(elementArray[_i][0])) {
      elementArray[_i][1].classList.add("active");
    } else {
      elementArray[_i][1].classList.remove("active");
    }
  }
}

function checkSize(elem) {
  var biggerHalfDisplay = false;
  var windowHeight = document.documentElement.clientHeight;
  var halfWindowHeight = windowHeight / 2;
  var elemTop = elem.getBoundingClientRect().top;
  var elemBottom = elem.getBoundingClientRect().bottom;

  if (elemTop < halfWindowHeight && elemTop > 0 || elemBottom > halfWindowHeight && elemBottom < windowHeight || elemTop < 0 && elemBottom > windowHeight) {
    biggerHalfDisplay = true;
  }

  return biggerHalfDisplay;
}