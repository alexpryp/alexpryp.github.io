"use strict"

//script that simulates active tabs
function activateTab(evt) {
    var i, tablinks;

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";
}

// smooth page movement to the desired block
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector(`a[name=${blockID.slice(1)}]`).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}


//automatic switching of menu items
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}

//that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.
function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let elementArray = [];

let selectorsArray = [[".about"], [".portfolio"], [".contact"]];

for (let i = 0; i < selectorsArray.length; i++) {
	elementArray.push([$(selectorsArray[i][0])[0]]);
}

elementArray[0].push($("a[href='#about']")[0]);
elementArray[1].push($("a[href='#portfolio']")[0]);
elementArray[2].push($("a[href='#contact']")[0]);

function scrolling(e) {
	for(let i = 0; i < elementArray.length; i++) {
		let tablinks;
		if (isPartiallyVisible( elementArray[i][0] )) {
			elementArray[i][1].classList.add("active");
		} else {
			elementArray[i][1].classList.remove("active");
		}
	}
}