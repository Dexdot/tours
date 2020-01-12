import scroll from '~/js/helpers/stop-scroll';

$.delegate('.burger', (e, el) => {
  el.classList.toggle('active');
  $.qs('.menu').classList.toggle('active');
  $.qs('body').classList.toggle('menu-active');

  scroll[el.classList.contains('active') ? 'disable' : 'enable']();
});
