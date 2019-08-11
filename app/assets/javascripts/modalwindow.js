document.addEventListener(
  'DOMContentLoaded', (e) => {
    let modal_open = document.getElementById('modal_open')
    let modal_close = document.getElementById('modal-close-btn')
    modal_open.onclick = function () {
      $('#overlay').fadeIn();
    };
    modal_close.onclick = function () {
      $('#overlay').fadeOut();
    };
  },
  false
);