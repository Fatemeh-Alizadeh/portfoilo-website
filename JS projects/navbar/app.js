const btn = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
const line = document.querySelector(".line");
const logo = document.querySelector(".logo");

btn.addEventListener("click", function () {
    navbar.classList.toggle('nav-menu')
    logo.classList.toggle('logo-change')
    
});
