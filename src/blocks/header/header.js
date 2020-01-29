window.addEventListener('DOMContentLoaded', () => {
  const header = $.qs('.header');
  const isTransparent = $.qs('#set-header-transparent');

  // Fixed on scroll
  const check = () => {
    const onTop = window.pageYOffset <= 1;
    const isMob = window.innerWidth <= 1040;

    header.classList[onTop ? 'remove' : 'add']('header--fixed');
    header.classList[isMob || onTop ? 'add' : 'remove']('header--transparent');
  };
  check();

  window.addEventListener('scroll', check);
});
