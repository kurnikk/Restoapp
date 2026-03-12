const headerTopBtn = document.querySelector('.header__top-btn');

headerTopBtn.addEventListener('click', function (e) {
    headerTopBtn.parentNode.classList.toggle('header__top--is-visible')
});