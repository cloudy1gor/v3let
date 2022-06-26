export const updateProgressBar = (progressBar, embla) => () => {
  const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
  progressBar.style.transform = `translateX(${progress * 100}%)`;
};
