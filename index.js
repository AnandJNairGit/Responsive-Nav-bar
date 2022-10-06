const menu_btn = document.querySelector(".nav-list");
const active_nav = document.querySelector(".navbar");

const toggleNavbar = () => {
    active_nav.classList.toggle("active");
}


menu_btn.addEventListener("click", () => toggleNavbar());
