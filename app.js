document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready to serve GBTS Builders customers!');

    const slides = document.querySelectorAll('.slides img');
    if (slides.length === 0) {
        console.error('No slides found!');
        return;
    }

    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlides();
    }

    updateSlides();

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
    } else {
        console.error('Previous button not found!');
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide(1));
    } else {
        console.error('Next button not found!');
    }
});
