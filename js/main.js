const menu = document.getElementById('menu')
const openthemenu = document.getElementById('openthemenu')
const closethemenu = document.getElementById('closethemenu')

closethemenu.addEventListener('click', () => {
    menu.style.opacity = "0"
    menu.style.right = "-835px"
    menu.style.transition = "all 0.5s ease-out"
});

openthemenu.addEventListener('click', () => {
    menu.style.opacity = "1"
    menu.style.right = "-4px"
    menu.style.transition = "all 0.5s ease-in"
})

menu.addEventListener('mouseleave', () => {
    menu.style.opacity = "0"
    menu.style.right = "-835px"
    menu.style.transition = "all 0.5s ease-out"
    
})

const hovertitleweb = document.getElementById('webtitle')
const underline = document.getElementById('underh1')

hovertitleweb.addEventListener('mouseover', () => {
    underline.style.width = "250px"
    underline.style.opacity = "1"
    underline.style.transition = "all 2s ease-in"

})

hovertitleweb.addEventListener('mouseout', () => {
    underline.style.width = "0px"
    underline.style.opacity = "0"
    underline.style.transition = "all 2s ease-outé"

})