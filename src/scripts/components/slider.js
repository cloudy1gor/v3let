import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { disablePrevNextBtns, listenForPrevBtnClick, listenForNextBtnClick } from "./prevAndNextButtons.js";
import { updateProgressBar } from "./progressBar.js";

export default function sliderS() {
  const setupEmblaCarousel = (emblaNode, options) => {
    const viewPort = emblaNode.querySelector(".embla__viewport");
    const prevBtn = emblaNode.querySelector(".embla__button--prev");
    const nextBtn = emblaNode.querySelector(".embla__button--next");
    const progressBar = document.querySelector(".embla__progress__bar");

    const autoplay = Autoplay({ delay: 10000, stopOnInteraction: false }, (emblaRoot) => emblaRoot.parentElement);
    const embla = EmblaCarousel(viewPort, options, [autoplay]);
    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
    const updateProgress = updateProgressBar(progressBar, embla);

    listenForPrevBtnClick(prevBtn, embla, autoplay);
    listenForNextBtnClick(nextBtn, embla, autoplay);

    embla.on("init", disablePrevAndNextBtns);
    embla.on("select", disablePrevAndNextBtns);
    embla.on("scroll", updateProgress);
  };

  const options = { loop: false, slidesToScroll: 1, skipSnaps: false, dragFree: true, containScroll: "trimSnaps" };
  const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
  const emblaCarousels = emblaNodes.map((emblaNode) => setupEmblaCarousel(emblaNode, options));
}
