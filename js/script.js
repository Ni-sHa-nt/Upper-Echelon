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


// Hero Section Counter Added on Cards
const counters = document.querySelectorAll(".counter");
const section = document.querySelector(".funding-statistics");

let started = false;

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
        started = true;

        counters.forEach(counter => {
            const target = parseFloat(counter.dataset.target);
            const text = counter.dataset.target;
            const duration = 1000; // 1 second

            function animate(startTime) {

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease Out Cubic
                    const ease = 1 - Math.pow(1 - progress, 3);

                    const current = target * ease;

                    if (text.includes(".")) {
                        counter.textContent = `$${current.toFixed(1)}M`;
                    } else if (text === "50") {
                        counter.textContent = `$${Math.floor(current)}K`;
                    } else {
                        counter.textContent = `$${Math.floor(current)}M`;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }

                requestAnimationFrame(update);
            }

            requestAnimationFrame(animate);
        });

        observer.disconnect();
    }
}, {
    threshold: 0.4
});

observer.observe(section);