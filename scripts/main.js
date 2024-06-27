/*=============== SHOW MENU ===============*/
$('.nav__toggle').click(function () {
    $('.nav__menu').addClass('show-menu')
});

$('.nav__close').click(function () {
    $('.nav__menu').removeClass('show-menu')
});

/*=============== SPOYLER ===============*/
$('.block__title').click(function (event) {
    $(this).parents('.block__item').toggleClass('active').find('.block__text').slideToggle();
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top')
    this.scrollY >= 800 ? scrollTop.classList.add('show-scroll')
        : scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.sponsor__container, .organization__container, .discover__items`)
sr.reveal(`.pricing__items, .block, .footer__container`, { interval: 100 })
sr.reveal(`.email__container, .unlock__cont`, { origin: 'left' })
sr.reveal(`.home__img, .unlock__img`, { origin: 'right' })

