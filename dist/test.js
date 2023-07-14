// Cards hover effects
export const cardHoverEffect = function () {
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
}