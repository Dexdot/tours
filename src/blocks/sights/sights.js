import { open } from '~/blocks/modal/modal';

class Sights {
  constructor(modal) {
    this.DOM = { modal };
    this.DOM.modalImg = $.qs('.sights__img img', this.DOM.modal);
    this.DOM.modalCounter = $.qs('.sights__counter', this.DOM.modal);
    this.DOM.modalText = $.qs('.sights__text', this.DOM.modal);
    this.DOM.roadmapList = $.qs('.roadmap__list');

    this.index = 0;
    this.init();
  }

  init() {
    this.handleRoadmapButton();
    this.handleSliderNav();
  }

  handleRoadmapButton() {
    $.delegate('.js-sights', (e, btn) => {
      if (window.innerWidth > 1040) return false;

      const i = $.nodeIndex(btn.closest('li'));
      this.setSightsData(this.getDataByIndex(i));
      this.open();
    });
  }

  handleSliderNav() {
    ['prev', 'next'].forEach(str => {
      $.delegate(`.js-sights-${str}`, (e, btn) => {
        if (window.innerWidth > 1040) return false;

        this[str]();
        this.open();
      });
    });
  }

  prev() {
    const i =
      this.index <= 0
        ? this.DOM.roadmapList.children.length - 1
        : this.index - 1;
    this.setSightsData(this.getDataByIndex(i));
    this.open();
  }

  next() {
    const i =
      this.index === this.DOM.roadmapList.children.length - 1
        ? 0
        : this.index + 1;
    this.setSightsData(this.getDataByIndex(i));
    this.open();
  }

  open() {
    open(this.DOM.modal);
  }

  getDataByIndex(i) {
    const li = this.DOM.roadmapList.children[i];
    const btn = $.qs('.roadmap__btn', li);

    const text = btn.textContent;
    const { src } = $.qs('.roadmap__img', btn);
    return { i, text, src };
  }

  setSightsData({ src, i, text }) {
    this.index = i;

    this.DOM.modalImg.src = src;
    this.DOM.modalCounter.textContent = i + 1;
    this.DOM.modalText.textContent = text;
  }
}

$.each('[data-modal="sights"]', modal => {
  const sights = new Sights(modal);
});
