window.onload = function () {
    var swiper = new Swiper(".wrap", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto",
        spaceBetween: 50,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        direction: "horizontal",
        // direction: "vertical"
        effect: "coverflow",
        coverflowEffect: {
            rotate: 40,
            stretch: -10,
            depth: -10,
            modifier: 1,
            slideShadows: false
        }
    });
}