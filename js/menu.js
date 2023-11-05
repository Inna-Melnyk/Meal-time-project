
//   const refs = {
//     openMenulBtn: document.querySelector("[data-menu-open]"),
//     // closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
// };
    
// (() => {

    
//     console.log(refs.openMenulBtn);

//   refs.openMenulBtn.addEventListener("click", toggleModal);
// //   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//     }
    
  
// })();

//   document.body.addEventListener("click", function (evt) {
//       if (
//         // evt.target.closest(".js-user-bar") &&
//         logOutWndw.classList.contains("is-hidden")
//       ) {
//         return logOutWndw.classList.remove("is-hidden");
//       }
      
//       if (
//       // !evt.target.closest(".js-logout") &&
//       !refs.modal.classList.contains("is-hidden")
//     ) {
//       return refs.modal.classList.add("is-hidden");
//     }
//   });
const refs = {
  openMenuBtn: document.querySelector("[data-menu-open]"),
  modal: document.querySelector("[data-modal]"),
};

(() => {
  console.log(refs.openMenuBtn);

  refs.openMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

document.addEventListener("click", function (evt) {
  if (
    (!evt.target.closest("[data-menu-open]") &&
      !evt.target.closest("[data-modal]")) ||
    evt.target === refs.modal
  ) {
    // If the click is outside the menu or the button, close the modal
    refs.modal.classList.add("is-hidden");
  }
});
