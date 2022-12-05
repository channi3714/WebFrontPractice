let ps = true;
let interval;
function playSlide(param = 0) {
    if (param == 0) {
        console.log(0);
        ps = false;
    }
    else if (param == 1) {
        console.log(1);
        ps = true;
    }
    if (ps) {
        interval = setInterval(function () {
            document.getElementsByClassName("swiper-button-next")[0].click();
        }, 2000);
        console.log(ps);
    }
    else {
        clearInterval(interval);
        console.log("stop");
    }
}

window.onload = function () {
    //-----------------------main nav bar---------------------------
    const toggleBtn = document.querySelector('.navbar_toggleBtn');
    const menu = document.querySelector('.navbar_menu');
    const links = document.querySelector('.navbar_user');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        links.classList.toggle('active');
    })
    //----------------------slide-----------------------------------
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
