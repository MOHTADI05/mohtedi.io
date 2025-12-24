// ============================================
// PROJECTS CAROUSEL FUNCTIONALITY
// ============================================

class ProjectsCarousel {
    constructor(container, options = {}) {
        this.container = container;
        this.track = container.querySelector('.projects-carousel-track');
        this.cards = Array.from(container.querySelectorAll('.project-card'));
        this.prevBtn = container.querySelector('.carousel-nav.prev');
        this.nextBtn = container.querySelector('.carousel-nav.next');
        this.dots = Array.from(container.querySelectorAll('.carousel-dot'));
        this.autoplayToggle = container.querySelector('.carousel-autoplay-toggle');
        
        // Options
        this.currentIndex = 0;
        this.autoplay = options.autoplay !== false; // Default: true
        this.autoplayInterval = options.autoplayInterval || 5000; // 5 seconds
        this.transitionDuration = options.transitionDuration || 600;
        this.itemsPerView = options.itemsPerView || 1;
        
        // State
        this.isTransitioning = false;
        this.autoplayTimer = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        if (!this.track || this.cards.length === 0) return;
        
        // Set up initial state
        this.updateCarousel();
        this.setupEventListeners();
        this.setupTouchEvents();
        
        // Start autoplay if enabled
        if (this.autoplay) {
            this.startAutoplay();
        }
        
        // Update autoplay toggle state
        if (this.autoplayToggle) {
            this.autoplayToggle.classList.toggle('active', this.autoplay);
        }
    }
    
    setupEventListeners() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Dot indicators
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Autoplay toggle
        if (this.autoplayToggle) {
            this.autoplayToggle.addEventListener('click', () => this.toggleAutoplay());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isInViewport()) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prev();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.next();
                }
            }
        });
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => {
            if (this.autoplay) {
                this.pauseAutoplay();
            }
        });
        
        this.container.addEventListener('mouseleave', () => {
            if (this.autoplay) {
                this.startAutoplay();
            }
        });
        
        // Intersection Observer for autoplay
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (this.autoplay) {
                            this.startAutoplay();
                        }
                    } else {
                        this.pauseAutoplay();
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(this.container);
        }
    }
    
    setupTouchEvents() {
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.pauseAutoplay();
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
            if (this.autoplay) {
                this.startAutoplay();
            }
        }, { passive: true });
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                this.next();
            } else {
                // Swipe right - prev
                this.prev();
            }
        }
    }
    
    updateCarousel() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        // Update cards
        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update navigation buttons
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex === this.cards.length - 1;
        }
        
        // Scroll to active card (smooth scroll)
        if (this.track && this.cards[this.currentIndex]) {
            const activeCard = this.cards[this.currentIndex];
            const cardLeft = activeCard.offsetLeft;
            const cardWidth = activeCard.offsetWidth;
            const trackWidth = this.track.offsetWidth;
            
            // Center the active card in the viewport
            const targetScroll = cardLeft - (trackWidth / 2) + (cardWidth / 2);
            
            this.track.scrollTo({
                left: Math.max(0, targetScroll),
                behavior: 'smooth'
            });
        }
        
        // Reset transition flag
        setTimeout(() => {
            this.isTransitioning = false;
        }, this.transitionDuration);
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
            this.resetAutoplay();
        }
    }
    
    next() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
            this.updateCarousel();
            this.resetAutoplay();
        }
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.cards.length) {
            this.currentIndex = index;
            this.updateCarousel();
            this.resetAutoplay();
        }
    }
    
    startAutoplay() {
        this.pauseAutoplay();
        if (this.autoplay) {
            this.autoplayTimer = setInterval(() => {
                if (this.currentIndex < this.cards.length - 1) {
                    this.next();
                } else {
                    // Loop back to start
                    this.currentIndex = 0;
                    this.updateCarousel();
                }
            }, this.autoplayInterval);
        }
    }
    
    pauseAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    
    resetAutoplay() {
        this.pauseAutoplay();
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    
    toggleAutoplay() {
        this.autoplay = !this.autoplay;
        if (this.autoplay) {
            this.startAutoplay();
        } else {
            this.pauseAutoplay();
        }
        if (this.autoplayToggle) {
            this.autoplayToggle.classList.toggle('active', this.autoplay);
        }
    }
    
    isInViewport() {
        const rect = this.container.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.projects-carousel-wrapper');
    if (carouselContainer) {
        // Dynamically generate dots based on number of projects
        const dotsContainer = carouselContainer.querySelector('.carousel-dots');
        const projectCards = carouselContainer.querySelectorAll('.project-card');
        
        if (dotsContainer && projectCards.length > 0) {
            // Clear existing dots
            dotsContainer.innerHTML = '';
            
            // Create dots for each project
            projectCards.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Go to project ${index + 1}`);
                dotsContainer.appendChild(dot);
            });
        }
        
        // Initialize carousel after dots are created
        setTimeout(() => {
            window.projectsCarousel = new ProjectsCarousel(carouselContainer, {
                autoplay: true,
                autoplayInterval: 5000, // 5 seconds
                transitionDuration: 600
            });
        }, 100);
    }
});

