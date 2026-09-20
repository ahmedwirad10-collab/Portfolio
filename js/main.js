/* ==========================================================================
   AHMAD WIRAD - PORTFOLIO INTERACTIVE SCRIPTS (js/main.js)
   ==========================================================================
   
   TABLE OF CONTENTS:
   --------------------------------------------------------------------------
   01. HERO PHOTO SCROLL CROSSFADE
   02. MOBILE NAVIGATION MENU TOGGLE   --> [WHERE TO ADD / EXPAND]
   03. NEW INTERACTIVE SCRIPTS AREA    --> [WHERE TO ADD: New JavaScript here]
   ========================================================================== */


/* ==========================================================================
   01. HERO PHOTO SCROLL CROSSFADE
   ==========================================================================
   Controls the smooth crossfade transition between photo-1 and photo-2
   as the visitor scrolls down the initial 200vh hero section.
   
   [WHERE TO CHANGE]:
   - transitionDistance: Change the pixel value (e.g. 700) to make the photo
     fade faster or slower as the user scrolls.
   ========================================================================== */

const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const heroArea = document.querySelector(".hero-scroll-area");

function updatePhotoTransition() {
    if (!heroArea || !photo1 || !photo2) return;

    /* Get the hero's position relative to the browser window */
    const rect = heroArea.getBoundingClientRect();

    /* Transition distance in pixels (higher = slower fade, lower = faster fade) */
    const transitionDistance = 700;

    /* Calculate scroll progress between 0 and 1 */
    let progress = -rect.top / transitionDistance;
    progress = Math.max(0, Math.min(1, progress));

    /* Fade photo 1 OUT and photo 2 IN */
    photo1.style.opacity = 1 - progress;
    photo2.style.opacity = progress;
}

/* Run smoothly on scroll with passive flag for high performance */
window.addEventListener("scroll", updatePhotoTransition, { passive: true });

/* Run once when page loads */
document.addEventListener("DOMContentLoaded", updatePhotoTransition);


/* ==========================================================================
   02. MOBILE NAVIGATION MENU TOGGLE
   
   [WHERE TO EXPAND]:
   If you want to add an active drawer or slide-out menu on mobile,
   the listener is prepared below.
   ========================================================================== */

const mobileToggle = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
        const isOpen = navLinks.style.display === "flex";
        navLinks.style.display = isOpen ? "none" : "flex";
    });
}


/* ==========================================================================
   03. NEW INTERACTIVE SCRIPTS AREA
   
   [WHERE TO ADD NEW SCRIPTS]:
   Add any custom JavaScript (e.g. modal popups, filter tabs, stats animation,
   smooth scroll behavior, or form handlers) below this line.
   ========================================================================== */

// Example: Log ready state
console.log("Ahmad Wirad Portfolio scripts loaded successfully.");

