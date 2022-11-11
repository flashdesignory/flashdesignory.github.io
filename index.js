import { BusinessCard } from "./src/components/molecules/business-card/business-card.js";

import { LinkedInIcon } from './src/assets/linkedin.js';
import { GithubIcon } from './src/assets/github.js';
import { WebsiteIcon } from './src/assets/website.js';

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
      name: "Linked In",
      type: "icon",
      label: LinkedInIcon,
      url: "https://www.linkedin.com/in/thorstenkober/",
      target: "_blank"
    },
    {
      name: "Github",
      type: "icon",
      label: GithubIcon,
      url: "https://github.com/flashdesignory",
      target: "_blank"
    },
    {
      name: "Website",
      type: "icon",
      label: WebsiteIcon,
      url: "https://flashdesignory.github.io/",
      target: "_blank"
    }
  ]
});
document.getElementById("card").appendChild(card.render());
