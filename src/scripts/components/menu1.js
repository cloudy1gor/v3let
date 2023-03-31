export default function menu(params) {
  // бургер меню
  const menuNav = document.querySelector(".menu__list");
  const menuBurger = document.querySelector(".menu__btn");

  menuBurger.addEventListener("click", () => {
    menuNav.classList.toggle("menu__list--active");
  });
}
