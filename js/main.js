// ============================================
// MOHTADI MARMOURI PORTFOLIO - MAIN JAVASCRIPT
// Parallax Animations & Interactions
// ============================================

// ============================================
// GLOBAL VARIABLES
// ============================================
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scroll-top');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');

// ============================================
// PAGE LOADER
// ============================================
function hideLoader() {
    const loader = document.getElementById('page-loader');
    const body = document.body;
    
    if (loader) {
        // Add fade-out class
        loader.classList.add('fade-out');
        
        // Remove loading class from body
        body.classList.remove('loading');
        
        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.remove();
        }, 500);
    }
}

// ============================================
// INITIALIZE ON DOM LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeAOS();
    initializeParticles();
    setupNavigation();
    setupScrollAnimations();
    setupParallax();
    setupBlogFilters();
    setupContactForm();
    setupTypingEffect();
    setupSkillsCarousel();
    setupSmoothScroll();
});

// Hide loader when everything is loaded
window.addEventListener('load', () => {
    // Add a small delay for better UX
    setTimeout(hideLoader, 800);
});

// ============================================
// AOS (Animate On Scroll) INITIALIZATION
// ============================================
function initializeAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });
}

// ============================================
// PARTICLES.JS INITIALIZATION
// ============================================
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#39ff14'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#123513',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================
function setupNavigation() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            if (mobileOverlay) {
                mobileOverlay.classList.toggle('active');
            }
            document.body.style.overflow = isActive ? 'hidden' : '';
        });
    }

    // Close menu when clicking on overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close menu when clicking close button
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            if (mobileOverlay) {
                mobileOverlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            if (mobileOverlay) {
                mobileOverlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navToggle) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                if (mobileOverlay) {
                    mobileOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        }
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Fix for mobile project cards - ensure they're clickable
    const projectCards = document.querySelectorAll('.project-link-card');
    projectCards.forEach(card => {
        // Prevent event propagation issues on mobile
        card.addEventListener('touchstart', function(e) {
            // Allow the touch to propagate
        }, { passive: true });
        
        card.addEventListener('click', function(e) {
            // Ensure the link works on mobile
            if (this.href) {
                window.location.href = this.href;
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
    let scrollTimeout;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Navbar scroll effect with smooth transition
                if (scrollTop > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Smooth following effect - navbar always visible and following
                navbar.style.transform = 'translateX(-50%) translateY(0)';
                
                // Scroll to top button
                if (scrollTop > 500) {
                    scrollTopBtn.classList.add('visible');
                } else {
                    scrollTopBtn.classList.remove('visible');
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Scroll to top button click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// PARALLAX EFFECTS
// ============================================
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Hero parallax layers
        const layers = document.querySelectorAll('.parallax-layer');
        layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.15;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // Floating code snippets
        const snippets = document.querySelectorAll('.code-snippet');
        snippets.forEach((snippet, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = scrolled * speed;
            snippet.style.transform = `translateY(${yPos}px)`;
        });
        
        // Glass cards parallax on hover
        setupCardParallax();
    });
}

// ============================================
// CARD 3D TILT EFFECT
// ============================================
function setupCardParallax() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// TYPING EFFECT
// ============================================
function setupTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const texts = [
        'AI • Data Science • Software Engineering • FinTech',
        'Machine Learning Engineer',
        'Data Scientist',
        'Full-Stack Developer',
        'Cloud Solutions Architect'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect after a delay
    setTimeout(type, 1000);
}

// ============================================
// BLOG FILTERS
// ============================================
function setupBlogFilters() {
    const filterButtons = document.querySelectorAll('.blog-filter');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter blog cards
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ============================================
// CONTACT FORM
// ============================================
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Get translated success message
            const t = translations[currentLanguage] || translations.en;
            const successMsg = t.contact?.messageSent || 'Message sent successfully! I\'ll get back to you soon.';
            
            // Show success message (you can integrate with a backend here)
            showNotification(successMsg, 'success');
            
            // Reset form
            contactForm.reset();
            
            // Update placeholders after reset
            setTimeout(() => {
                if (typeof updatePlaceholders === 'function') {
                    updatePlaceholders();
                }
            }, 100);
        });
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        padding: 20px 30px;
        background: ${type === 'success' ? 'rgba(57, 255, 20, 0.2)' : 'rgba(255, 57, 20, 0.2)'};
        border: 1px solid ${type === 'success' ? '#39ff14' : '#ff3914'};
        border-radius: 12px;
        color: #f5f5f0;
        font-weight: 600;
        z-index: 10000;
        backdrop-filter: blur(20px);
        animation: slideIn 0.4s ease-out;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add slide in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 3000);
}

// ============================================
// SMOOTH SCROLL
// ============================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignore empty anchors
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add stagger effect for children
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate-in');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============================================
// CURSOR GLOW EFFECT (DESKTOP ONLY)
// ============================================
if (window.innerWidth > 768) {
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(57, 255, 20, 0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
let ticking = false;

function requestTick(callback) {
    if (!ticking) {
        requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
}

// Debounce function for resize events
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    AOS.refresh();
}, 200));

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👋 Hello, Developer!', 'color: #39ff14; font-size: 24px; font-weight: bold;');
console.log('%cInterested in how this portfolio was built?', 'color: #f5f5f0; font-size: 16px;');
console.log('%cCheck out my GitHub:https://github.com/MOHTADI0505', 'color: #39ff14; font-size: 14px;');
console.log('%c✨ Built with passion by Mohtadi Marmouri', 'color: #f5f5f0; font-size: 14px;');

// ============================================
// FILTER BROWSER EXTENSION ERRORS (Optional)
// ============================================
// This filters out common browser extension errors from console
// These errors don't affect your website functionality
if (typeof console !== 'undefined') {
    const originalError = console.error;
    console.error = function(...args) {
        const errorString = args.join(' ');
        // Filter out common extension-related errors
        if (
            errorString.includes('content-scripts.js') ||
            errorString.includes('injection-tss-mv3.js') ||
            errorString.includes('feature flag') ||
            errorString.includes('tab info') ||
            errorString.includes('enableSearchHijackingNotification') ||
            errorString.includes('enableBreachNotification') ||
            errorString.includes('Error getting tab') ||
            errorString.includes('Failed to get Tab ID')
        ) {
            // Silently ignore extension errors
            return;
        }
        // Show real errors from your website
        originalError.apply(console, args);
    };
}

// ============================================
// EXPORT FOR MODULE USAGE (OPTIONAL)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAOS,
        initializeParticles,
        setupNavigation,
        setupScrollAnimations,
        setupParallax,
        setupBlogFilters,
        setupContactForm,
        showNotification,
    setupSkillsCarousel
    };
}

// ============================================
// SKILLS CAROUSEL
// ============================================
function setupSkillsCarousel() {
    const skillsTrack = document.getElementById('skills-track');
    if (!skillsTrack) return;
    
    // Ensure smooth animation with hardware acceleration
    skillsTrack.style.willChange = 'transform';
    skillsTrack.style.backfaceVisibility = 'hidden';
    skillsTrack.style.webkitBackfaceVisibility = 'hidden';
    skillsTrack.style.transform = 'translateZ(0)';
    skillsTrack.style.webkitTransform = 'translateZ(0)';
    
    // Pause on hover for better UX
    const carousel = document.querySelector('.skills-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            skillsTrack.style.animationPlayState = 'paused';
        });
        
        carousel.addEventListener('mouseleave', () => {
            skillsTrack.style.animationPlayState = 'running';
        });
    }
    
    // Ensure smooth infinite loop - no reset needed with proper CSS
    // The animation will loop infinitely and smoothly
}

