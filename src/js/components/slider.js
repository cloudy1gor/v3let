import { tns } from "tiny-slider";

export default function sliderS(params) {
  var slider = tns({
    container: ".slider__list",
    items: 2,
    slideBy: "page",
    speed: 400,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayText: ["", ""],
    gutter: 14,
    loop: true,
    mouseDrag: true,
    controls: true,
    controlsText: ["<", ">"],
    responsive: {
      768: {
        items: 4,
      },
      480: {
        items: 3,
      },
    },
  });
}
