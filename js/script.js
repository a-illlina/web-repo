const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const headerMenu = document.querySelector('.header__menu-body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    })
}

const menuLinks = document.querySelector('.header__list-item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

const aboutArrow = document.querySelector('.about__arrow');
if (aboutArrow) {
    const aboutBlocks = document.querySelector('.about__blocks');
    aboutArrow.addEventListener("click", function (e) {
        aboutArrow.classList.toggle('_active');
        aboutBlocks.classList.toggle('_active');
    })
}

// document.querySelector('.about__arrow').addEventListener('click', e =>{
//     document.querySelector('.aboutBlocks').classList.toggle('_active');
// })