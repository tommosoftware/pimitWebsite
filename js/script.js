// ===========================
// Smooth Scroll for Navigation Links
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty anchors or #signup
        if (href === '#' || href === '') {
            return;
        }

        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (href === '#signup') {
            // If #signup doesn't exist on page, you can handle it here
            // For now, just scroll to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Form Handling (future use)
// ===========================

// When you add a signup form, uncomment and update this
/*
const signupForm = document.querySelector('#signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const email = document.querySelector('#email').value;
        
        // Here you'd send data to your backend or auth service
        console.log('Form submitted with email:', email);
        
        // For now, just redirect to your app
        window.location.href = 'https://app.pimit.co.uk/signup?email=' + encodeURIComponent(email);
    });
}
*/

// ===========================
// Navigation Highlight on Scroll
// ===========================

function highlightNavOnScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Uncomment below if you add IDs to sections and want active nav highlighting
// highlightNavOnScroll();

// ===========================
// Mobile Menu Toggle (future use)
// ===========================

// If you add a mobile hamburger menu, use this template:
/*
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}
*/

// ===========================
// Add animation on scroll (optional)
// ===========================

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Apply to feature cards for subtle entrance
    document.querySelectorAll('.feature-card, .solution-card, .problem-item').forEach(el => {
        observer.observe(el);
    });
}

// Call on page load
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
});

// ===========================
// Track CTA Clicks (optional)
// ===========================

// If you add Google Analytics or similar, log CTA clicks
function trackCTAClicks() {
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            // Example: Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'button_text': button.textContent,
                    'button_location': button.closest('section')?.className || 'unknown'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    trackCTAClicks();
});
