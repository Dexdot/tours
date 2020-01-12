window.addEventListener('DOMContentLoaded', () => {
  const check = () => {
    $.qs('.header').classList[window.pageYOffset > 1 ? 'add' : 'remove'](
      'header--fixed'
    );
  };
  check();
  window.addEventListener('scroll', () => {
    $.qs('.header').classList[window.pageYOffset > 1 ? 'add' : 'remove'](
      'header--fixed'
    );
  });
});
