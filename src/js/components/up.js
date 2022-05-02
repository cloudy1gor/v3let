export default function up(params) {
  // кнопка наверх
  function scrollTo(to, duration = 1000) {
    const element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          element.scrollTop = to;
        }
      };
    animateScroll();
  }

  let btn = document.querySelector(".up");
  // При клике прокручиваем на самый верх
  btn.onclick = function (click) {
    click.preventDefault();
    // Вызываем функцию, первый аргумент - отступ, второй - скорость скролла, чем больше значение, тем медленнее скорость прокрутки
    scrollTo(0, 400);
  };
}
