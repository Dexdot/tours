import init from 'autosize';

const initAutosize = () => {
  $.each('.js-autosize', el => {
    init(el);
  });
};

window.addEventListener('DOMContentLoaded', initAutosize);
