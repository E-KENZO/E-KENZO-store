
/* =========================================
   NOVA GAMING — MAIN JAVASCRIPT
   File: script.js
========================================= */

"use strict";

/* 1. SELECT ELEMENTS */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const currentYear = document.getElementById("currentYear");


/* 2. MOBILE NAVIGATION */

function closeMobileMenu() {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation menu" : "Close navigation menu"
        );

        navMenu.classList.toggle("open", !isOpen);
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileMenu();
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });

    document.addEventListener("click", function (event) {
        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMobileMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 760) {
            closeMobileMenu();
        }
    });
}


/* 3. AUTOMATIC COPYRIGHT YEAR */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* 4. ACTIVE NAVIGATION LINK */

function updateActiveLink() {
    const currentHash = window.location.hash || "#home";

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");

        if (href === currentHash) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

window.addEventListener("hashchange", updateActiveLink);

updateActiveLink();


/* 5. CONTACT EMAIL CONFIGURATION */

// Replace this address with your real business email.
const BUSINESS_EMAIL = "your-email@example.com";

const contactEmail = document.getElementById("contactEmail");

if (contactEmail) {
    contactEmail.href =
        "mailto:" + BUSINESS_EMAIL +
        "?subject=" +
        encodeURIComponent("Gaming Design Project Inquiry");
}


/* 6. PORTFOLIO PROJECT LINKS */

const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        // The link already navigates to the contact section.
        // You can add project-specific details in a later version.
    });
});


/* 7. SERVICE LINKS */

const serviceLinks = document.querySelectorAll(".text-link");

serviceLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        // The service links navigate to the contact section.
        // No external account or payment information is collected.
    });
});


/* 8. REDUCE ANIMATION WHEN THE PAGE IS HIDDEN */

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.body.classList.add("page-hidden");
    } else {
        document.body.classList.remove("page-hidden");
    }
});


/* 9. INITIALIZE WEBSITE */

document.addEventListener("DOMContentLoaded", function () {
    updateActiveLink();
    console.log("Nova Gaming website initialized.");
});
                                 
