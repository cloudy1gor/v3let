export const listenForPrevBtnClick = (btn, embla, autoplay) => {
  const scrollPrev = () => {
    autoplay.reset();
    embla.scrollPrev();
  };
  btn.addEventListener("click", scrollPrev, false);
};

export const listenForNextBtnClick = (btn, embla, autoplay) => {
  const scrollNext = () => {
    autoplay.reset();
    embla.scrollNext();
  };
  btn.addEventListener("click", scrollNext, false);
};

export const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };
};
