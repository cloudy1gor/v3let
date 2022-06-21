import { getSlider } from "simple-slider/dist/simpleslider";

export default function slider(params) {
  getSlider({
    // container: document.querySelector("slider__list"),
    // children: container.querySelectorAll(".slider__item"),
    transitionTime: 4,
    delay: 3.6,

    init: -100,
    show: 0,
    end: 100,
    unit: "%",
  });
}
