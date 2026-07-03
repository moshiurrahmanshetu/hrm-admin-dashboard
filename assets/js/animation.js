/* ==========================================================================
   HRM Premium Admin Dashboard - AOS & Interactivity Animations (animation.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate on Scroll)
    initScrollAnimations();

    // 2. High-end Micro-Interactions on Icons & Cards
    initMicroInteractions();
});

/**
 * Configure and initialize AOS library
 */
function initScrollAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
            // Settings that can be overridden on element level, by `data-aos-*` attributes:
            offset: 40, // offset (in px) from the original trigger point
            delay: 100, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease-out-back', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }
}

/**
 * Implements micro-interactions on hover, focus, and navigation states
 */
function initMicroInteractions() {
    // Select all premium interactive glass cards
    const premiumCards = document.querySelectorAll('.glass-card');

    premiumCards.forEach(card => {
        // Icon bounce/rotation when hovering cards
        const icon = card.querySelector('.brand-icon-wrapper, i, .dropdown-item-icon-wrapper');
        
        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'translateY(-3px) scale(1.12) rotate(6deg)';
                icon.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
            });

            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                icon.style.transition = 'transform 0.3s ease';
            });
        }
    });

    // Custom animation on navbar profile hover
    const profileTrigger = document.querySelector('.profile-dropdown-trigger');
    if (profileTrigger) {
        const avatar = profileTrigger.querySelector('.profile-trigger-avatar');
        profileTrigger.addEventListener('mouseenter', () => {
            if (avatar) {
                avatar.style.transform = 'scale(1.15)';
                avatar.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
            }
        });
        profileTrigger.addEventListener('mouseleave', () => {
            if (avatar) {
                avatar.style.transform = 'scale(1)';
            }
        });
    }
}
