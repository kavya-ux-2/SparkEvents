document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky navigation bar
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    window.onscroll = function () {
        stickyNavbar();
        highlightNavLink();
    };

    function stickyNavbar() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // Dynamic active link highlighting
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".header ul li");

    function highlightNavLink() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.querySelector('a').getAttribute('href').includes(current)) {
                li.classList.add("active");
            }
        });
    }
});