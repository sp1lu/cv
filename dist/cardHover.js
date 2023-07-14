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

        });

        item.addEventListener('click', () => {
            const agency = item.querySelector('.agency');
            const link = agency.getAttribute('href');
            window.open(`${link}`, '_blank');
        });

    });


    allCards.forEach(item => {

        item.addEventListener('mouseout', () => {
            allCards.forEach(subitem => {
                subitem.classList.remove('pippo');
            })
        })

    });
}