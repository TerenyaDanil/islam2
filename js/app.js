

burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__menu');
body = document.querySelector('body');

burger.onclick = function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

}


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



btn = document.querySelector('.inner-program__btn');
dop = document.querySelector('.inner-program__item-dop');


btn.onclick = function () {
    btn.classList.add('active');
    dop.classList.add('active');

}


var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
    el.onclick = function () {
        el.classList.toggle("active");
        el.previousElementSibling.classList.toggle("active");
    }
});


var swiper = new Swiper('.cases__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.cases__slider-next',
        prevEl: '.cases__slider-prev',
    },
    breakpoints: {

        768: {
            slidesPerView: 2,

            slidesPerGroup: 2,
            spaceBetween: 100,
        },

    }

});

var swiper = new Swiper('.rev__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.rev__slider-next',
        prevEl: '.rev__slider-prev',
    },
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 100,
            slidesPerGroup: 2,
        },

    }

});