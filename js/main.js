const openmenu = document.getElementById('openmenu')
const closemenu = document.getElementById('closemenu')
const menu = document.getElementById('menu')

openmenu.addEventListener('click', () => {
    menu.style.display = "flex";
})

closemenu.addEventListener('click', () => {
    menu.style.display = "none";
})