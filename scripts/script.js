// Animation Navbar

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');
    const navLink = document.querySelectorAll('.nav-link');
    const navBrand = document.querySelector('.navbar-brand');

    if (window.scrollY >= 50) {
        navBrand.style.color = 'white';
        navbar.classList.add('nav-colored');
        navbar.classList.remove('nav-transparent');
        navbar.style.transition = '.3s';


        navLink.forEach((e) => {
            e.classList.add('text-white');
            e.classList.remove('text-dark');
        });
    } else {

        navBrand.style.color = 'black';
        navbar.classList.remove('nav-colored');
        navbar.classList.add('nav-transparent');


        navLink.forEach((e) => {
            e.classList.add('text-dark');
            e.classList.remove('text-white');
        });
    }

})



// AOS js Animation
AOS.init();