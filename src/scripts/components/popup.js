export default function popUp(params) {
  let pics = document.getElementsByClassName("gallery__image");
  let modalWindow = document.getElementById("modalWindow");
  let modalIsOpen = false;
  let isClickedOutside = false;
  let modalClose = document.getElementById("modalClose");
  modalClose.addEventListener("click", imageClose, false);

  function listenerLaunch() {
    modalWindow.addEventListener("click", function (evt) {
      isClickedOutside = !document.getElementById("modalPic").getElementsByTagName("img")[0].contains(evt.target);
      if (isClickedOutside && modalIsOpen) {
        modalWindow.style.display = "none";
        modalIsOpen = false;
      }
    });
  }

  function imageOpen(item) {
    listenerLaunch();
    modalWindow.style.display = "flex";
    document.getElementById("modalPic").innerHTML = '<img class="wp-post-image entered loaded gallery__image-full" srcset="' + this.srcset + '" src=(unknow) sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded">';
    isClickedOutside = false;
    modalIsOpen = true;
  }

  for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", imageOpen, false);
  }

  function imageClose() {
    modalIsOpen = false;
    modalWindow.style.display = "none";
  }
}
