export default class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item, index) => {
      const element = this._renderer(item, index);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
