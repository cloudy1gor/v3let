// import $ from "jquery";
// import swiper from "./components/swiper";
import lazy from "./components/lazy";
import header from "./components/header";
import menu from "./components/menu";
import aos from "./components/aos";
import up from "./components/up";
import modal from "./components/modal";
import sliderS from "./components/slider";
import popUp from "./components/popup";

document.addEventListener("DOMContentLoaded", () => {
  sliderS();
  aos();
  lazy();
  header();
  menu();
  up();
  modal();
  popUp();
  // swiper();
});
