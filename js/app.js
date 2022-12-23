"use strict";


const leftBtn = document.querySelectorAll(".left-btn"),
      rightBtn = document.querySelectorAll(".right-btn");


const slider = document.querySelectorAll(".slider");


slider.forEach ((item, i) => {
    let sliderContainer = item.getBoundingClientRect();
    let sliderWidth = sliderContainer.width;

    rightBtn[i].addEventListener("click", () => {
        item.scrollLeft += sliderWidth / 3;
    });
    
    leftBtn[i].addEventListener("click", () => {
        item.scrollLeft -= sliderWidth / 3;
    });

});