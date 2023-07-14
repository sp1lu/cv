const menuItemsNodes = document.querySelectorAll('.menu-item');
const menuItems = Array.from(menuItemsNodes);

export const menuLinesAnimation = function () {
    menuItems.forEach(item => {

        item.addEventListener('mouseover', () => {
            const link = item.querySelector('a');
            link.style.color = 'rgba(226, 232, 240, 1)';

            const line = item.querySelector('.menu-lines');
            line.classList.add('color-changed');
        });

    });

    menuItems.forEach(item => {

        item.addEventListener('mouseout', () => {
            const link = item.querySelector('a');
            link.style.color = 'rgba(226, 232, 240, .5)';

            const line = item.querySelector('.menu-lines');
            line.classList.remove('color-changed');
        });

    });
}