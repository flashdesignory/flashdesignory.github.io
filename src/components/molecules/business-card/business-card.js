/* import sheet from "./business-card.css" assert { type: "css" };
document.adoptedStyleSheets.push(sheet); */
const sheet = document.createElement('link');
sheet.rel="stylesheet";
// absolute url from root
sheet.href = "./src/components/molecules/business-card/business-card.css";
document.head.appendChild(sheet);

import { Avatar } from '../avatar/avatar.js';
import { Text } from '../../atoms/text/text.js';
import { Link } from '../../atoms/link/link.js';

import { LinkedInIcon } from '../../../assets/linkedin.js';
import { LocationIcon } from '../../../assets/location.js';
import { WorkIcon } from '../../../assets/work.js';

const getIcon = (name) => {
  switch(name) {
    case "linkedin":
      return LinkedInIcon;
    case "location":
      return LocationIcon;
    case "work":
      return WorkIcon;
  }
}

export class BusinessCard {
  constructor({ image, name, title, links }) {
    this.state = {};
    this.list = [];

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

    this.name = new Text({ containerClass: "business-card-name" });
    this.right.appendChild(this.name.render());

    this.title = new Text({ containerClass: "business-card-title" });
    this.right.appendChild(this.title.render());

    this.resources = document.createElement('div');
    this.resources.classList.add("business-card-links");
    this.right.appendChild(this.resources);

    this.update({ image, name, title, links });

    if (links && links.length > 0) {
      this.rebuild();
    }
  }

  update({ image, name, title, links }) {
    if (image !== undefined) {
      this.state.image = {...image};
      this.avatar.update({ image: this.state.image });
    }

    if (name !== undefined) {
      this.state.name = name;
      this.name.update({ text: this.state.name});
    }

    if (title !== undefined) {
      this.state.title = title;
      this.title.update({ text: this.state.title });
    }

    if (links !== undefined) {
      this.state.links = links;
    }
  }

  rebuild() {
    this.state.links.forEach(link => {
      const { name, icon, url } = link;
      const element = new Link({
        icon: getIcon(icon),
        name,
        url, 
        target: "_blank"
      });
      this.list.push(element);
    })
  }

  render() {
    this.avatar.render();
    this.name.render();
    this.title.render();

    this.resources.replaceChildren();
    this.list.forEach((item) => {
      this.resources.appendChild(item.render());
    });

    return this.container;
  }
}
