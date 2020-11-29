let toggler = document.querySelector(".toggler");
let fullscreen = document.querySelector(".fullscreen");

toggler.addEventListener('click', () => {
    fullscreen.classList.toggle("light");
})
