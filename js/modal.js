(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-1]"),
    openModalBtn2: document.querySelector("[data-modal-open-2]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector(".backdrop"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", handleBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }
})();
