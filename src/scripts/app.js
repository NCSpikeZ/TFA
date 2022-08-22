"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*Copyright*/
let year = new Date().getFullYear();
let date = document.querySelector("#date");
date.innerHTML = "©SpikeZ"+ String(year);


gsap.from(".tel1", {
    y: -200,
    duration: 1,
    opacity: 0
});

gsap.to(".Wrapcontainer", {
    x: '-200vw',
    scrollTrigger: {
        trigger: '.Wrapcontainer',
        pin: true,
        start: 'center center',
        end: 'bottom',
        scrub: 5,
    }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);