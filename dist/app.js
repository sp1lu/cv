import { createJobsCards } from "./createJobCards.js";

createJobsCards();

/* let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove); */

const allCardsNode = document.querySelectorAll('.card');
const allCards = Array.from(allCardsNode);

allCards.forEach(item => {

  item.addEventListener('mouseover', () => {
    item.classList.add('test');

    allCards.splice()

  })

  item.addEventListener('mouseout', () => {
    item.classList.remove('test');
  })

});