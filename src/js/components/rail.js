export default class Rail {
  constructor(el) {
    this.DOM = { el };
    this.containerWidth = 0;

    this.init();

    this.requestAnimation = null;

    this.translation = 0;

    this.grabbed = false;
    this.preventClick = false;

    this.originalVelocity = 6;
    this.velocity = this.originalVelocity;
  }

  init() {
    this.initializeElements();
    this.update();
  }

  initializeElements() {
    this.DOM.railContainer = $.qs('.rail__container', this.DOM.el);
    this.getBCR();
  }

  update() {
    if (!this.grabbed) {
      this.translation = this.translation - this.velocity;
    }

    const t =
      this.translation > 0
        ? -this.containerWidth + (this.translation % this.containerWidth)
        : this.translation % this.containerWidth;

    this.DOM.railContainer.style.transform = `translateX(${t / 2}px)`;

    this.requestAnimation = window.requestAnimationFrame(
      this.update.bind(this)
    );
  }

  getBCR() {
    this.railContainerBCR = this.DOM.railContainer.getBoundingClientRect();
    this.containerWidth = this.railContainerBCR.width;
  }
}
