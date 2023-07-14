import { createJobsCards } from "./createJobCards.js";
import { cardHoverEffect } from "./cardHover.js";
import { menuLinesAnimation } from "./menu.js";

createJobsCards();
cardHoverEffect();
menuLinesAnimation();

/* let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove); */