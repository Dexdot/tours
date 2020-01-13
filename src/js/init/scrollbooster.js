import ScrollBooster from 'scrollbooster';

const init = el => {
  const viewport = el;
  const content = el.firstElementChild;

  if (!content) return false;

  // Cursor style
  content.style.cursor = 'grab';

  // Set draggable false to links and images
  $.qsa('a, img', el).forEach(child => {
    child.draggable = false;
    child.ondragstart = 'return false';
  });

  let data;

  const sb = new ScrollBooster({
    viewport,
    content,
    mode: 'x',
    onUpdate: payload => {
      data = payload;
      content.style.transform = `translateX(${-payload.position.x}px)`;
    }
  });

  $.qsa('a', el).forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      const { x, y } = data.dragOffsetPosition;

      // Если мы не драгаем, а просто кликаем, т.е. x,y === 0, то "переходим" по ссылке
      const clickOnly = x === 0 && y === 0;
      if (!clickOnly) return false;

      const { href, target } = link;
      if (target === '_blank') {
        window.open(href);
      } else {
        window.location = href;
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-sb', el => {
    init(el);
  });
});
