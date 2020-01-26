import Slider from '~/js/components/slider';

const init = el => {
  if (!el) return false;

  const slider = new Slider(el);
  const parentSection = el.closest('.gallery-modal');

  // Prev
  $.delegate('.js-gallery-modal-prev', (e, btn) => {
    slider.prev();
  });

  // Next
  $.delegate('.js-gallery-modal-next', (e, btn) => {
    slider.next();
  });

  // Thumb
  $.delegate('.js-gallery-modal-thumb', (e, btn) => {
    if (btn.classList.contains('gallery-section__cell--hero')) {
      slider.update(null, 0);
      return false;
    }

    const li = btn.closest('li');
    const i = li ? $.nodeIndex(li) : $.nodeIndex(btn) + 1;
    slider.update(null, i);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-gallery-modal-slider', el => {
    init(el);
  });
});
