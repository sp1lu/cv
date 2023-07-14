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
    const newArr = [...allCards];

    newArr.splice(newArr.indexOf(item), 1);

    newArr.forEach(subitem => {
      subitem.classList.add('pippo');
    })

  })

});

allCards.forEach(item => {
  
  item.addEventListener('mouseout', () => {
    allCards.forEach(subitem => {
      subitem.classList.remove('pippo');
    })
  })

});