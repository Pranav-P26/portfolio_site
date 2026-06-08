const nav = document.querySelector("nav");

if (nav) {
    const updateNavBackground = () => {
        nav.classList.toggle("is-scrolled", window.scrollY > 10);
    };

    updateNavBackground();
    window.addEventListener("scroll", updateNavBackground, { passive: true });
}

const aboutSlides = document.querySelectorAll(".about-slide");
const aboutSlideCount = document.querySelector(".about-slide-count");
const aboutPrev = document.querySelector("[data-about-prev]");
const aboutNext = document.querySelector("[data-about-next]");
let aboutSlideIndex = 0;

const updateAboutSlide = () => {
    aboutSlides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === aboutSlideIndex);
    });

    if (aboutSlideCount) {
        const currentSlide = String(aboutSlideIndex + 1).padStart(2, "0");
        const totalSlides = String(aboutSlides.length).padStart(2, "0");

        aboutSlideCount.textContent = `${currentSlide} / ${totalSlides}`;
    }
};

if (aboutSlides.length && aboutPrev && aboutNext) {
    aboutPrev.addEventListener("click", () => {
        aboutSlideIndex = (aboutSlideIndex - 1 + aboutSlides.length) % aboutSlides.length;
        updateAboutSlide();
    });

    aboutNext.addEventListener("click", () => {
        aboutSlideIndex = (aboutSlideIndex + 1) % aboutSlides.length;
        updateAboutSlide();
    });

    updateAboutSlide();
}
