const dropdown = button => {
  const parent = button.closest('.js-accordion');
  parent.dispatchEvent(new Event('accordion:begin'));

  // Current content
  const content = button.nextElementSibling;
  content.parentElement.style.setProperty(
    '--acc-max-height',
    `${content.scrollHeight}px`
  );
  content.parentElement.classList.toggle('active');

  // Other contents
  const accordions = $.qsa('.accordion', parent);
  const currentIndex = accordions.indexOf(content.parentElement);
  const others = accordions.filter((el, i) => i !== currentIndex);

  others.forEach(el => {
    el.classList.remove('active');
  });

  parent.dispatchEvent(new Event('accordion:complete'));
};

const initAccordion = () => {
  $.delegate('.accordion__btn', (e, el) => {
    dropdown(el);
  });
};

window.addEventListener('DOMContentLoaded', initAccordion);
