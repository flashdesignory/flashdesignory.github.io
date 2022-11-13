// import sheet from './link.css' assert { type: 'css' };
// document.adoptedStyleSheets.push(sheet);

export class Link {
  constructor({ name, type = "text", label, url, target = "_blank" }) {
    this.state = {
      name: undefined, // string
      type: undefined, // "icon" | "text"
      label: undefined, // string
      url: undefined, // string
      target: undefined, // "_blank" | string
    };

    this.update({ name, type, label, url, target });
  }

  update({ name, type, label, url, target }) {
    if (name !== undefined) {
      this.state.name = name;
    }

    if (type !== undefined) {
      this.state.type = type;
    }

    if (label !== undefined) {
      this.state.label = label;
    }

    if (url !== undefined) {
      this.state.url = url;
    }

    if (target !== undefined) {
      this.state.target = target;
    }
  }

  render() {
    this.link = document.createElement("a");
    this.link.classList.add("link");

    if (this.state.url) {
      this.link.href = this.state.url;
    }
    if (this.state.target) {
      this.link.target = this.state.target;
    }

    if (this.state.type !== "icon") this.link.textContent = this.state.label;
    else this.link.insertAdjacentHTML("afterbegin", this.state.label);

    return this.link;
  }
}
