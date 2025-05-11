
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready to serve GBTS Builders customers!');

    const slides = document.querySelectorAll('.slides img');
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

    document.querySelector('.prev')?.addEventListener('click', function () {
        moveSlide(-1);
    });
    document.querySelector('.next')?.addEventListener('click', function () {
        moveSlide(1);
    });
});
