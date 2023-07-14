import { createJobsCards } from "./createJobCards.js";
import { cardHoverEffect } from "./cardHover.js";

createJobsCards();
cardHoverEffect();

/* let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove); */

const menuItemsNodes = document.querySelectorAll('.menu-item');
const menuItems = Array.from(menuItemsNodes);

menuItems.forEach(item => {

  item.addEventListener('mouseover', () => {
    const line = item.querySelector('.menu-lines');
    line.classList.add('lol');
  });
  
});

menuItems.forEach(item => {

  item.addEventListener('mouseout', () => {
    const line = item.querySelector('.menu-lines');
    line.classList.remove('lol');
  });

});