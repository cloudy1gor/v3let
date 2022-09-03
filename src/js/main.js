import aos from "./components/aos";
import lazy from "./components/lazy";
import header from "./components/header";
import menu from "./components/menu";
import up from "./components/up";
import modal from "./components/modal";
import sliderS from "./components/slider";
import sliderY from "./components/slider";
// import popUp from "./components/popup";
// import themeSwitcher from "./components/themeSwitcher";

document.addEventListener("DOMContentLoaded", () => {
  up();
  aos();
  lazy();
  header();
  menu();
  modal();
  sliderS();
  sliderY();
  // popUp();
  // themeSwitcher();
});
