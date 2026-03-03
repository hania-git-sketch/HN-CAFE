// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Reserve Button
function reserveTable() {
    alert("Thank you! Our team will contact you soon ☕💜");
}

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}