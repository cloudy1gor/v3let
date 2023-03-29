export default function up() {
  // top of the page
  const root = document.documentElement;
  // the actual back-to-top button
  const button = document.querySelector(".up");

  // show back-to-top button when page is scrolled enough that the title is off the page
  function handleScroll() {
    const scrollTotal = root.scrollHeight - root.clientHeight;

    if (root.scrollTop / scrollTotal > 0.05) {
      // if the page has been scrolled down at least 5% from the top, show back-to-top button
      button.classList.add("up--animated");
    } else {
      // otherwise, hide back-to-top button
      button.classList.remove("up--animated");
    }
  }

  // send the user back to top of the page when the back-to-top button is clicked. Note: button will be hidden by the handleScroll function since it's less than 20% scrolled when returned to top of the page
  function handleClick() {
    root.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // call functions
  button.addEventListener("click", handleClick);
  document.addEventListener("scroll", handleScroll);
}
