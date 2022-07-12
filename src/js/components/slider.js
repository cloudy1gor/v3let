import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { disablePrevNextBtns, listenForPrevBtnClick, listenForNextBtnClick } from "./prevAndNextButtons";
import { updateProgressBar } from "./progressBar";

export default function sliderS() {
  const wrap = document.querySelector(".embla");
  const viewPort = wrap.querySelector(".embla__viewport");
  const prevBtn = wrap.querySelector(".embla__button--prev");
  const nextBtn = wrap.querySelector(".embla__button--next");
  const progressBar = document.querySelector(".embla__progress__bar");

  const autoplay = Autoplay({ delay: 10000, stopOnInteraction: false }, (emblaRoot) => emblaRoot.parentElement);
  const embla = EmblaCarousel(viewPort, { loop: false, slidesToScroll: 1, skipSnaps: false, dragFree: true, containScroll: "trimSnaps" }, [autoplay]);
  const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
  const updateProgress = updateProgressBar(progressBar, embla);


  listenForPrevBtnClick(prevBtn, embla, autoplay);
  listenForNextBtnClick(nextBtn, embla, autoplay);

  embla.on("init", disablePrevAndNextBtns);
  embla.on("select", disablePrevAndNextBtns);
  embla.on("scroll", updateProgress);

  // const embla = EmblaCarousel(emblaNode, options);
}
