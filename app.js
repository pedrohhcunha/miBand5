const span = document.querySelector('#span')

window.onscroll = () => {
    if(window.scrollY > 0){
        span.classList.add('active')
    } else {
        span.classList.remove('active')
    }
}