import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
"use strict";
/*Copyright*/
let year = new Date().getFullYear();
let date = document.querySelector("#date");
date.innerHTML = "©SpikeZ"+ String(year);

/*Scroll*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Dark Mode*/
const btnDark = document.querySelector(".btn__darkmode");
btnDark.addEventListener("click", function(){
    if(document.body.dataset.theme === "dark"){
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    } 
});

let theme = localStorage.getItem('theme');
if((!theme && userDark) || (theme === "dark")){
    dark();
    
} else if(theme === "light"){
    light();
}

function dark(){
    document.body.setAttribute("data-theme", "dark");
}

function light(){
    document.body.setAttribute("data-theme", "light");
}

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
        end: '+=4000',
        scrub: true,
        toggleActions: 'play none reverse none'
    }
});