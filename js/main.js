const menu = document.getElementById('menu')
const openthemenu = document.getElementById('openthemenu')
const closethemenu = document.getElementById('closethemenu')

closethemenu.addEventListener('click', () => {
    menu.style.right = "-835px"
    menu.style.transition = "right 0.5s ease-out"
});

openthemenu.addEventListener('click', () => {
    menu.style.display = "flex"
    menu.style.right = "-4px"
    menu.style.transition = "right 0.5s ease-in"
})