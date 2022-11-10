// import sheet from './image.css' assert { type: 'css' };
// document.adoptedStyleSheets.push(sheet);
const sheet = document.createElement('link');
sheet.rel="stylesheet";
// absolute url from root
sheet.href = "./src/components/atoms/image/image.css";
document.head.appendChild(sheet);

export class Image {
  constructor({
    src,
    alt,
    width,
    height,
    imageClass,
    containerClass,
    fadeIn = false,
  }) {
    this.state = {};
    this.imageClass = imageClass;
    this.containerClass = containerClass;
    this.fadeIn = fadeIn;

    this.handleOnError = this.handleOnError.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);

    this.container = document.createElement("div");
    this.container.classList.add("image-container");
    if (this.containerClass) {
      this.container.classList.add(this.containerClass);
    }

    this.image = document.createElement("img");
    if (this.imageClass) {
      this.image.classList.add(this.imageClass);
    }
    this.image.addEventListener("load", this.handleOnLoad);
    this.image.addEventListener("error", this.handleOnError);
    this.container.appendChild(this.image);

    this.update({ src, alt, width, height });
  }

  update({ src, alt, width, height }) {
    if (src !== undefined) this.state.src = src;
    if (alt !== undefined) this.state.alt = alt;
    if (width !== undefined) this.state.width = width;
    if (height !== undefined) this.state.height = height;
  }

  handleOnError() {
    console.log("error occured");
  }

  handleOnLoad() {
    if (this.fadeIn) this.image.style.opacity = 1;
  }

  render() {
    if (this.state.src) this.image.src = this.state.src;
    if (this.state.alt) this.image.alt = this.state.alt;

    if (this.state.width) {
      this.image.width = this.state.width;
      this.container.style.width = `${this.state.width}px`;
    }
    if (this.state.height) {
      this.image.height = this.state.height;
      this.container.style.height = `${this.state.height}px`;
    }

    if (this.fadeIn) this.image.style.opacity = 0;
    return this.container;
  }
}