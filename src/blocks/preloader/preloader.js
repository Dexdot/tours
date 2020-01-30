window.addEventListener('load', () => {
  const preloader = $.qs('.preloader');
  if (!preloader) return false;

  setTimeout(() => {
    preloader.style.opacity = 0;
    preloader.style.pointerEvents = 'none';
  }, 1000);
});
