import Slider from '~/js/components/slider';

const setHeight = slider => {
  let height = 0;

  slider.DOM.slides.forEach(slide => {
    const slideHeight = slide.scrollHeight;

    if (slideHeight > height) {
      height = slideHeight;
    }
  });

  slider.DOM.el.style.height = `${height}px`;
};

const init = el => {
  if (!el) return false;
  const slider = new Slider(el);
  const parentSection = el.closest('.reviews-slider-section');

  // Prev
  $.qsa('.js-reviews-slider-prev', parentSection).forEach(btn => {
    btn.addEventListener('click', () => {
      slider.prev();
    });
  });

  // Next
  $.qsa('.js-reviews-slider-next', parentSection).forEach(btn => {
    btn.addEventListener('click', () => {
      slider.next();
    });
  });

  // Slider height
  setHeight(slider);
  ['resize', 'load'].forEach(ev => {
    window.addEventListener(ev, () => {
      setHeight(slider);
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-reviews-slider', el => {
    init(el);
  });
});
