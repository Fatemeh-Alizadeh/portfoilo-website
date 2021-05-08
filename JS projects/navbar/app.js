const btn = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
console.log(navbar)

btn.addEventListener("click", () => {
    btn.classList.toggle('change');
});
