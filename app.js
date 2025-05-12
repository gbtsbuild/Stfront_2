document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready to serve GBTS Builders customers!');

    const slides = document.querySelectorAll('.slides img');
    if (slides.length === 0) {
        console.error('No slides found in the slider!');
        return;
    }

    let currentIndex = 0;

    // Function to update the active slide
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    // Function to move the slide in a given direction
    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlides();
    }

    // Initialize the slider with the first active slide
    updateSlides();

    // Select the navigation buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Add event listeners for navigation buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
    } else {
        console.error('Previous button not found! Ensure the .prev button is present in the HTML.');
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide(1));
    } else {
        console.error('Next button not found! Ensure the .next button is present in the HTML.');
    }
});
