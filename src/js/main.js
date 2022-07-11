import themeSwitcher from "./components/themeSwitcher";
import lazy from "./components/lazy";
import header from "./components/header";
import menu from "./components/menu";
import aos from "./components/aos";
import up from "./components/up";
import modal from "./components/modal";
import sliderS from "./components/slider";
// import popUp from "./components/popup";

document.addEventListener("DOMContentLoaded", () => {
  aos();
  lazy();
  header();
  menu();
  modal();
  up();
  // popUp();
  themeSwitcher();
  sliderS();
});
