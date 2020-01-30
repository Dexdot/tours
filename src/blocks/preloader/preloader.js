window.addEventListener('load', () => {
  const preloader = $.qs('.preloader');
  if (!preloader) return false;

  preloader.style.opacity = 0;
  preloader.style.pointerEvents = 'none';
});
