window.addEventListener('DOMContentLoaded', () => {
  const header = $.qs('.header');
  const hasTransparentModifier = $.qs('#set-header-transparent');
  let lastY = 0;
  let y = window.pageYOffset;
  let dir = 'down';

  // Fixed on scroll
  const check = () => {
    y = window.pageYOffset;
    dir = y > lastY ? 'down' : 'up';
    lastY = y;

    const onTop = y <= 1;
    const isMob = window.innerWidth <= 1040;

    // Transparent
    if (hasTransparentModifier)
      header.classList[onTop ? 'add' : 'remove']('header--transparent');

    // Fixed
    header.classList[onTop ? 'remove' : 'add']('header--fixed');

    // Up hidden
    header.classList[onTop ? 'remove' : dir === 'down' ? 'add' : 'remove'](
      'header--uphidden'
    );
  };
  check();

  window.addEventListener('scroll', check);
});
