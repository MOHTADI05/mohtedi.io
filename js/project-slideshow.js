// ============================================
// PROJECT SLIDESHOW FUNCTIONALITY
// ============================================

let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Initialize slideshow
function initSlideshow() {
    if (slides.length === 0) return;
    
    showSlide(0);
    startAutoplay();
    
    // Pause autoplay on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopAutoplay);
        slideshowContainer.addEventListener('mouseleave', startAutoplay);
    }
}

// Show specific slide
function showSlide(index) {
    // Wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Remove active class from all slides and indicators
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Add active class to current slide and indicator
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
}

// Change slide (next/previous)
function changeSlide(direction) {
    stopAutoplay();
    showSlide(currentSlide + direction);
    startAutoplay();
}

// Go to specific slide
function goToSlide(index) {
    stopAutoplay();
    showSlide(index);
    startAutoplay();
}

// Autoplay functions
function startAutoplay() {
    stopAutoplay(); // Clear any existing interval
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoplay() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (slides.length === 0) return;
    
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slideshowContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - next slide
            changeSlide(1);
        } else {
            // Swiped right - previous slide
            changeSlide(-1);
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlideshow);
} else {
    initSlideshow();
}

// Clean up on page unload
window.addEventListener('beforeunload', () => {
    stopAutoplay();
});

