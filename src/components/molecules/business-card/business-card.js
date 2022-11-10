/* import sheet from "./business-card.css" assert { type: "css" };
document.adoptedStyleSheets.push(sheet); */
const sheet = document.createElement('link');
sheet.rel="stylesheet";
// absolute url from root
sheet.href = "./src/components/molecules/business-card/business-card.css";
document.head.appendChild(sheet);

import { Avatar } from '../avatar/avatar.js';
import { Text } from '../../atoms/text/text.js';

export class BusinessCard {
  constructor({ image, name, title }) {
    this.state = {};

    this.container = document.createElement("div");
    this.container.classList.add("business-card-container");

    this.left = document.createElement("div");
    this.left.classList.add("business-card-left");
    this.container.appendChild(this.left);

    this.right = document.createElement("div");
    this.right.classList.add("business-card-right");
    this.container.appendChild(this.right);

    this.avatar = new Avatar({});
    this.left.appendChild(this.avatar.render());

    this.name = new Text({ containerClass: "business-card-name"});
    this.right.appendChild(this.name.render());

    this.title = new Text({ containerClass: "business-card-title"});
    this.right.appendChild(this.title.render());

    this.update({ image, name, title });
  }

  update({ image, name, title }) {
    if (image !== undefined) {
      this.state.image = {...image};
      this.avatar.update({ image: this.state.image });
    }

    if (this.name !== undefined) {
      this.state.name = name;
      this.name.update({ text: this.state.name});
    }

    if (this.title !== undefined) {
      this.state.title = title;
      this.title.update({ text: this.state.title });
    }
  }

  render() {
    this.avatar.render();
    this.name.render();
    this.title.render();
    return this.container;
  }
}
