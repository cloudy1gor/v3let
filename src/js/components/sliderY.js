import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

export default function sliderY() {
  const wrap = document.querySelector(".embla--y");
  const viewPort = wrap.querySelector(".embla__viewport--y");

  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false }, (emblaRoot) => emblaRoot.parentElement);
  const embla = EmblaCarousel(viewPort, { axis: "y", loop: false, slidesToScroll: 1, skipSnaps: false, dragFree: true, containScroll: "trimSnaps" }, [autoplay]);

}
