import { BusinessCard } from "./src/components/molecules/business-card/business-card.js";

const card = new BusinessCard({
  image: {
    src: "./src/assets/avatar.jpg",
    width: "140",
    height: "140",
    alt: "Thorsten Kober",
  },
  name: "Thorsten Kober",
  title: "Lead Software Engineer",
  links: [
    {
      name: "Hulu",
      icon: "work",
      url: "https://www.hulu.com/"
    },
    {
      name: "Los Angeles, CA",
      icon: "location",
      url: "https://www.google.com/maps/place/Los+Angeles,+CA"
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/thorstenkober/"
    }
  ]
});
document.getElementById("card").appendChild(card.render());
