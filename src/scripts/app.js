import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
"use strict";
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