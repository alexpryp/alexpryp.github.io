(this.webpackJsonpamazing_world_react=this.webpackJsonpamazing_world_react||[]).push([[0],[,,function(e,s,c){},,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var t=c(0),a=c(1),i=c.n(a),n=c(5),r=c.n(n),l=(c(11),c(3)),j=(c(12),["btn--primary","btn--outline","btn--test"]),o=["btn--medium","btn--large"],b=function(e){var s=e.children,c=e.name,a=e.type,i=e.onClick,n=e.buttonStyle,r=e.buttonSize,l=j.includes(n)?n:j[0],b=o.includes(r)?r:o[0];return Object(t.jsx)("button",{className:"btn ".concat(l," ").concat(b),onClick:i,"data-name":c,type:a,children:s})};c(13);var d=function(e){var s=Object(a.useState)(!1),c=Object(l.a)(s,2),i=c[0],n=c[1],r=Object(a.useState)(!0),j=Object(l.a)(r,2),o=j[0],d=j[1],h=function(){return n(!1)},m=function(s){s.preventDefault(),e.setPage(s.target.dataset.name),h(),window.scrollTo(0,0)},O=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(a.useEffect)((function(){O()}),[]),window.addEventListener("resize",O),Object(t.jsx)("nav",{className:"navbar",children:Object(t.jsxs)("div",{className:"navbar-container",children:[Object(t.jsxs)("a",{href:"#",className:"navbar-logo",onClick:h,children:["WORLD",Object(t.jsx)("i",{className:"fas fa-globe"})]}),Object(t.jsx)("div",{className:"menu-icon",onClick:function(){return n(!i)},children:Object(t.jsx)("i",{className:i?"fas fa-times":"fas fa-bars"})}),Object(t.jsxs)("ul",{className:i?"nav-menu active":"nav-menu",children:[Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{href:"/#","data-name":"Home",className:"nav-links",onClick:m,children:"Home"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{href:"/#","data-name":"Services",className:"nav-links",onClick:m,children:"Services"})}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)("a",{href:"/#","data-name":"Products",className:"nav-links",onClick:m,children:"Products"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"/#","data-name":"SignUp",className:"nav-links-mobile",onClick:m,children:"Sign Up"})})]}),o&&Object(t.jsx)(b,{name:"SignUp",buttonStyle:"btn--outline",onClick:m,children:"SIGN UP"})]})})};c(2),c(14);var h=function(e){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("li",{className:"cards__item",children:Object(t.jsxs)("a",{href:"#",className:"cards__item__link",children:[Object(t.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(t.jsx)("img",{className:"cards__item__img",alt:"Travel",src:e.src})}),Object(t.jsx)("div",{className:"cards__item__info",children:Object(t.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var m=function(){return Object(t.jsxs)("div",{className:"cards",children:[Object(t.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(t.jsx)("div",{className:"cards__container",children:Object(t.jsxs)("div",{className:"cards__wrapper",children:[Object(t.jsxs)("ul",{className:"cards__items",children:[Object(t.jsx)(h,{src:"images/img-9.jpg",text:"Explore the paradise lands of the tropical belt",label:"Adventure",path:"/services"}),Object(t.jsx)(h,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})]}),Object(t.jsxs)("ul",{className:"cards__items",children:[Object(t.jsx)(h,{src:"images/img-3.jpg",text:"Visit the ancient towns of our beautiful planet",label:"Mystery",path:"/services"}),Object(t.jsx)(h,{src:"images/img-4.jpg",text:"Take a journey through the megacities of the future",label:"Adventure",path:"/products"}),Object(t.jsx)(h,{src:"images/img-8.jpg",text:"Take a look into the northern icy lands",label:"Adrenaline",path:"/sign-up"})]})]})})]})};c(15);var O=function(){return Object(t.jsxs)("div",{className:"hero-container",children:[Object(t.jsx)("video",{src:"videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(t.jsx)("h1",{children:"AMAZING WORLD"}),Object(t.jsx)("p",{children:"What are you waiting for?"}),Object(t.jsxs)("div",{className:"hero-btns",children:[Object(t.jsx)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(t.jsxs)(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["WATCH TRAILER ",Object(t.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var x=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(O,{}),Object(t.jsx)(m,{})]})};function u(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("h1",{className:"products",children:"PRODUCTS"})})}function f(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("h1",{className:"services",children:"SERVICES"})})}function v(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("h1",{className:"sign-up",children:"LIKE & SUBSCRIBE"})})}c(16);var N=function(){return Object(t.jsxs)("div",{className:"footer-container",children:[Object(t.jsxs)("section",{className:"footer-subscription",children:[Object(t.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsletter to receive our best vacation deals"}),Object(t.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(t.jsx)("div",{className:"input-areas",children:Object(t.jsxs)("form",{children:[Object(t.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(t.jsx)(b,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(t.jsxs)("div",{className:"footer-links",children:[Object(t.jsxs)("div",{className:"footer-link-wrapper",children:[Object(t.jsxs)("div",{className:"footer-link-items",children:[Object(t.jsx)("h2",{children:"About Us"}),Object(t.jsx)("a",{href:"#",children:"How it works"}),Object(t.jsx)("a",{href:"#",children:"Testimonials"}),Object(t.jsx)("a",{href:"#",children:"Careers"}),Object(t.jsx)("a",{href:"#",children:"Investors"}),Object(t.jsx)("a",{href:"#",children:"Terms of Service"})]}),Object(t.jsxs)("div",{className:"footer-link-items",children:[Object(t.jsx)("h2",{children:"Contact Us"}),Object(t.jsx)("a",{href:"#",children:"Contact"}),Object(t.jsx)("a",{href:"#",children:"Support"}),Object(t.jsx)("a",{href:"#",children:"Destinations"}),Object(t.jsx)("a",{href:"#",children:"Sponsorships"})]})]}),Object(t.jsxs)("div",{className:"footer-link-wrapper",children:[Object(t.jsxs)("div",{className:"footer-link-items",children:[Object(t.jsx)("h2",{children:"Videos"}),Object(t.jsx)("a",{href:"#",children:"Submit Video"}),Object(t.jsx)("a",{href:"#",children:"Ambassadors"}),Object(t.jsx)("a",{href:"#",children:"Agency"}),Object(t.jsx)("a",{href:"#",children:"Influencer"})]}),Object(t.jsxs)("div",{className:"footer-link-items",children:[Object(t.jsx)("h2",{children:"Social Media"}),Object(t.jsx)("a",{href:"#",children:"Instagram"}),Object(t.jsx)("a",{href:"#",children:"Facebook"}),Object(t.jsx)("a",{href:"#",children:"Youtube"}),Object(t.jsx)("a",{href:"#",children:"Twitter"})]})]})]}),Object(t.jsx)("section",{className:"social-media",children:Object(t.jsxs)("div",{className:"social-media-wrap",children:[Object(t.jsx)("div",{className:"footer-logo",children:Object(t.jsxs)("a",{href:"#",className:"social-logo",children:["WORLD",Object(t.jsx)("i",{className:"fas fa-globe"})]})}),Object(t.jsx)("small",{className:"website-rights",children:"WORLD \xa9 2021"}),Object(t.jsxs)("div",{className:"social-icons",children:[Object(t.jsx)("a",{className:"social-icon-link facebook",href:"#",target:"_blank","aria-label":"Facebook",children:Object(t.jsx)("i",{className:"fab fa-facebook-f"})}),Object(t.jsx)("a",{className:"social-icon-link instagram",href:"#",target:"_blank","aria-label":"Instagram",children:Object(t.jsx)("i",{className:"fab fa-instagram"})}),Object(t.jsx)("a",{className:"social-icon-link youtube",href:"#",target:"_blank","aria-label":"Youtube",children:Object(t.jsx)("i",{className:"fab fa-youtube"})}),Object(t.jsx)("a",{className:"social-icon-link twitter",href:"#",target:"_blank","aria-label":"Twitter",children:Object(t.jsx)("i",{className:"fab fa-twitter"})}),Object(t.jsx)("a",{className:"social-icon-link twitter",href:"#",target:"_blank","aria-label":"LinkedIn",children:Object(t.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})};var g=function(){var e={Home:Object(t.jsx)(x,{}),Products:Object(t.jsx)(u,{}),Services:Object(t.jsx)(f,{}),SignUp:Object(t.jsx)(v,{})},s=Object(a.useState)("Home"),c=Object(l.a)(s,2),i=c[0],n=c[1];return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(d,{setPage:n}),Object(t.jsx)("div",{id:"main-content",children:e[i]}),Object(t.jsx)(N,{})]})};r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(g,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.d37afea5.chunk.js.map