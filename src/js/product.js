import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
  // липкая шапка
  let lastScroll = 0;
  const defaultOffset = 200;
  const header = document.querySelector(".header");

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains("hide");

  window.addEventListener("scroll", () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      //scroll down
      header.classList.add("hide");
      header.classList.remove("color");
    } else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove("hide");
      header.classList.add("color");
    }

    lastScroll = scrollPosition();
  });

  // кнопка наверх
  const btnUp = document.querySelector(".up");

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      btnUp.style.display = "block";
      btnUp.classList.add("up--animated");
    }
    if (scrolled < coords) {
      btnUp.style.display = "none";
      btnUp.classList.remove("up--animated");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener("scroll", trackScroll);
  btnUp.addEventListener("click", backToTop);

  AOS.init({
    // Global settings:
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 190, // offset (in px) from the original trigger point
    delay: 450, // values from 0 to 3000, with step 50ms
    duration: 2500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});
