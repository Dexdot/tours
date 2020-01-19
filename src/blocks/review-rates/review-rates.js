const setCSSProps = () => {
  $.each('.modal--bottom', modal => {
    const content = $.qs('.modal__content', modal);
    const button = $.qs('.modal__container > .modal__close', modal);

    button.style.setProperty('--modal-content-top', `${content.offsetTop}px`);
  });
};

window.addEventListener('DOMContentLoaded', setCSSProps);
window.addEventListener('resize', setCSSProps);
