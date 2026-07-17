// Header Section
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-sec");

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Trusted Section 
const marqueeSwiper = new Swiper(".marqueeSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 20,
    speed: 5000,
    freeMode: true,
    allowTouchMove: true,
    grabCursor: true,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    breakpoints: {
        // Mobile
        0: {
            slidesPerView: 3,
        },

        // Tablet
        768: {
            slidesPerView: 5,
        },

        // Desktop
        1024: {
            slidesPerView: 5,
        },
    },
});

const marquee = document.querySelector(".marqueeSwiper");

marquee.addEventListener("mouseenter", () => {
    marqueeSwiper.autoplay.stop();
});

marquee.addEventListener("mouseleave", () => {
    marqueeSwiper.autoplay.start();
});