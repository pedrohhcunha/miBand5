const span = document.querySelector('#span')
const btnMenu = document.querySelector('#menuBtn')
const header = document.querySelector('.header')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const cards = document.querySelector('.cards')
const verMais = document.querySelector('#verMais')
const contentVerMais = document.querySelector('.right-features')
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
next.addEventListener('click', () => {
    if (cards.classList.contains('first')) {
        cards.classList.remove('first')
        cards.classList.add('second')
    } else if (cards.classList.contains('second')) {
        cards.classList.remove('second')
        cards.classList.add('third')
    } else {
    }
})
prev.addEventListener('click', () => {
    if (cards.classList.contains('first')) {

    } else if (cards.classList.contains('second')) {
        cards.classList.remove('second')
        cards.classList.add('first')

    } else {
        cards.classList.remove('third')
        cards.classList.add('second')
    }
})
verMais.addEventListener('click', () => {
    if (contentVerMais.classList.contains('active')) {
        contentVerMais.classList.remove('active')
        verMais.innerHTML = "Ver Mais"
    } else {
        contentVerMais.classList.add('active')
        verMais.innerHTML = "Ver Menos"
    }
})
