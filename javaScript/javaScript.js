document.addEventListener("DOMContentLoaded", function () {
    menuToggle();
});

function menuToggle() {
    const iconMenu = document.querySelector(".fa-bars");
    const menu = document.querySelector(".menu");

    if (iconMenu && menu) {
        iconMenu.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }
}

