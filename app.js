const span = document.querySelector('#span')
const btnMenu = document.querySelector('#menuBtn')
const header = document.querySelector('.header')
window.onscroll = () => {
    if(window.scrollY > 0){
        span.classList.add('active')
    } else {
        span.classList.remove('active')
    }
    header.classList.remove('open')
}
btnMenu.addEventListener('click', () => {
    header.classList.toggle('open')
})
