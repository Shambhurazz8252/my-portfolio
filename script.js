
document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');   // Icon change
        navbar.classList.toggle('active');   // Menu show/hide
    };

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionTop = current.offsetTop - 100;
            const sectionHeight = current.offsetHeight;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    document
                        .querySelector('header nav a[href*="' + sectionId + '"]')
                        .classList.add("active");
                });
            }
        });
    };

    // Typed.js effect
    new Typed(".multiple-text", {
        strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
