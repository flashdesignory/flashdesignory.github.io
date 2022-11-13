// import sheet from './image.css' assert { type: 'css' };
// document.adoptedStyleSheets.push(sheet);

export class Image {
  constructor({
    src,
    alt,
    width,
    height,
    imageClass,
    containerClass,
    style,
    fadeIn = false,
    sources,
  }) {
    this.state = {
      src: undefined, // string
      alt: undefined, // string
      width: undefined, // string
      height: undefined, // string
      sources: [], // array of picture sources
    };

    this.imageClass = imageClass;
    this.containerClass = containerClass;
    this.style = style;
    this.fadeIn = fadeIn;

    this.handleOnError = this.handleOnError.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);

    this.container = document.createElement("div");
    this.container.classList.add("image-container");
    if (this.containerClass) {
      this.container.classList.add(this.containerClass);
    }

    if (this.style) {
      Object.keys(this.style).forEach(key => this.container.style[key] = this.style[key])
    }

    this.picture = document.createElement("picture");
    this.picture.classList.add("picture");
    this.container.appendChild(this.picture);

    this.image = document.createElement("img");
    this.image.classList.add("image");
    if (this.imageClass) {
      this.image.classList.add(this.imageClass);
    }
    this.image.addEventListener("load", this.handleOnLoad);
    this.image.addEventListener("error", this.handleOnError);
    this.picture.appendChild(this.image);

    this.update({ src, alt, width, height, sources });
  }

  update({ src, alt, width, height, sources }) {
    if (src !== undefined) this.state.src = src;
    if (alt !== undefined) this.state.alt = alt;
    if (width !== undefined) this.state.width = width;
    if (height !== undefined) this.state.height = height;
    if (sources !== undefined) this.state.sources = sources;
  }

  handleOnError() {
    console.log("error occured");
  }

  handleOnLoad() {
    if (this.fadeIn) this.image.style.opacity = 1;
  }

  render() {
    const elements = this.picture.getElementsByTagName("source");
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
    }

    this.state.sources.forEach(source => {
      const element = document.createElement('source');
      element.srcset = source.srcset;
      element.type = source.type;
      this.picture.insertBefore(element, this.image);
    })

    if (this.state.src) this.image.src = this.state.src;
    if (this.state.alt) this.image.alt = this.state.alt;
    if (this.state.width) this.image.width = this.state.width;
    if (this.state.height) this.image.height = this.state.height;

    if (this.fadeIn) this.image.style.opacity = 0;
    return this.container;
  }
}
