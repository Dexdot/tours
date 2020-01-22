const initTip = () => {
  const handler = (e, node) => {
    const el = node || e.currentTarget;
    const top = el.offsetTop + el.offsetHeight / 2;
    const right = el.offsetLeft + el.offsetWidth;

    document.documentElement.style.setProperty(
      '--tip-btn-offset-top',
      `${top}px`
    );
    document.documentElement.style.setProperty(
      '--tip-btn-offset-left',
      `${right}px`
    );
  };

  $.each('.tip-btn', it => {
    handler(null, it);
    it.addEventListener('mouseenter', handler);
  });
};

window.addEventListener('DOMContentLoaded', initTip);
