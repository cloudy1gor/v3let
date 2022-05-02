export default function modal(params) {
  // модальное окно
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  function openModal(params) {
    modal.style.display = "block";
    // фиксируем страницу за модальным окном
    document.body.style.overflow = "hidden";
    // если модальное окно было ранее открыто оно не вызывается
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => [btn.addEventListener("click", openModal)]);

  // dry не повторяй участки кода
  function closeModal(params) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal); // closeModal передаем как название

  // действия по закрытию модального окна при клике вне окна
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(); // вызываем
    }
  });
  // при нажатии на esc закрываем модальное окно
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
}
