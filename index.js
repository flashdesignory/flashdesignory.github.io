import { BusinessCard } from "./src/components/molecules/business-card/business-card.js";

const card = new BusinessCard({
  image: {
    src: "./src/assets/avatar.jpg",
    width: "140",
    height: "140",
    alt: "Thorsten Kober",
  },
  name: "Thorsten Kober",
  title: "Lead Software Engineer"
});
document.getElementById("card").appendChild(card.render());
