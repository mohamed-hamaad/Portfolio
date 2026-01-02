// Scroll Animation
const hiddenElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
// Ham menu
const hamMenu = document.querySelector(".ham-menu");
const nav = document.querySelector(".nav-bar");

hamMenu.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});