import LazyLoad from "vanilla-lazyload";

export default function lazy() {
  const lazyLoadInstance = new LazyLoad({
    callback_error: (img) => {
      // Use the following line only if your images have the `srcset` attribute
      img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
      img.setAttribute("src", "fallback_image@1x.jpg");
    },
  });

  lazyLoadInstance.update();
}
