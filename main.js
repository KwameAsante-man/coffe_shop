// console.log('here we go again')
const navLinks = document.querySelectorAll('.nav-link')
const menuBtn = document.querySelector('#menu-open-button')
const closeBtn = document.querySelector('#menu-close-button')

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu')
})
closeBtn.addEventListener('click', () => {
    menuBtn.click()
})
navLinks.forEach(x => {
    x.addEventListener('click', () => {
        menuBtn.click()
    })
})

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    gragCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

});