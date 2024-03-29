export default function header(params) {
  // липкая шапка
  let lastScroll = 0;
  const defaultOffset = 200;
  const header = document.querySelector(".header");

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains("hide");

  window.addEventListener("scroll", () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
      // scroll down
      header.classList.add("hide");
      header.classList.remove("color");
    } else if (scrollPosition() < lastScroll && containHide()) {
      // scroll up
      header.classList.remove("hide");
      header.classList.add("color");
    }

    lastScroll = scrollPosition();
  });
}
