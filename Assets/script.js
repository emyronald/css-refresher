const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const aside = document.querySelector('aside')


menu.addEventListener('click', ()=>{
aside.classList.add('active')
})

closeMenu.addEventListener('click', ()=>{
    aside.classList.remove('active')
})