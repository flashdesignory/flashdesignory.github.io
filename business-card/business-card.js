/* import sheet from "./business-card.css" assert { type: "css" };
document.adoptedStyleSheets.push(sheet); */
const sheet = document.createElement('link');
sheet.rel="stylesheet";
// absolute url from root
sheet.href = "./business-card/business-card.css";
document.head.appendChild(sheet);

export class BusinessCard {
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("business-card-container");
    this.container.textContent = "Hello World 👋";
  }

  render() {
    return this.container;
  }
}
