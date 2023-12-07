
// Hamburger menu open/close 

const btn = document.querySelector('.hamburger-button');
const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-times');
const menuBurgerAside = document.querySelector('.hamburger-mobile-drawer');
const bookNowLink = document.querySelector('.bookNowLink');

btn.addEventListener('click', function() {
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
    menuBurgerAside.classList.toggle('show');

    if (menuBurgerAside.classList.contains('show')) {
        bookNowLink.style.visibility = 'hidden';
    } else {
        bookNowLink.style.visibility = 'visible';
    }

});

//  Mobile navigation col inactive - display ACCORDION MENU 

const navigationCols = document.querySelectorAll('.navigation-col');

navigationCols.forEach(navigationCol => {
    navigationCol.addEventListener('click', event => {
        navigationCol.classList.toggle('active');
        const mobileNavigationInactive = navigationCol.nextElementSibling;

        if (navigationCol.classList.contains('active')) {
            mobileNavigationInactive.style.maxHeight = mobileNavigationInactive.scrollHeight + "px";
        } else {
            mobileNavigationInactive.style.maxHeight = 0;
        }
    });
});

