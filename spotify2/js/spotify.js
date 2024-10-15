/*
javascript for bulma Hamburger menu (for mobile)
*/

fixlinks = document.querySelector("#navMenu");

(function () {

    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#' + burger.dataset.target);
    fixlinks.style.background = "#73c4fb";

    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
})();
