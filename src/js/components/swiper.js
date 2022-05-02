import Swiper, { Lazy, Autoplay } from "swiper";

export default function swiper(params) {
  const swiper = new Swiper(".swiper", {
    modules: [Lazy, Autoplay],
    loop: false,
    slidesPerView: 5,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
