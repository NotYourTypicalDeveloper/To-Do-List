// ============= Animation of the BURGER MENU NAVBAR ============

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
        // animate links 
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
            }
        });
    });

}

navSlide();


// jQuery version but does not work? 
// $(document).ready(function() {
//   const burger = $('.burger');
//   const nav = $('.nav-links');

//   function toggleBurger() {
//     nav.toggleClass('.nav-active');
//   }

//   burger.on('click', toggleBurger());
// });