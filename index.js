import { BusinessCard } from "./src/components/molecules/business-card/business-card.js";

import { LinkedInIcon } from "./src/assets/business/linkedin.js";
import { GithubIcon } from "./src/assets/business/github.js";
import { WebsiteIcon } from "./src/assets/business/website.js";
import { EmailIcon } from "./src/assets/business/email.js";

const card = new BusinessCard({
  image: {
    src: "./src/assets/avatar.jpg",
    width: "140",
    height: "140",
    alt: "Thorsten Kober",
    sources: [
      { srcset: "./src/assets/avatar.webp", type: "image/webp" },
      { srcset: "./src/assets/avatar.jpg", type: "image/jpeg" },
    ],
  },
  name: "Thorsten Kober",
  title: "Lead Software Engineer",
  links: [
    {
      name: "Linked In",
      type: "icon",
      label: LinkedInIcon({}),
      url: "https://www.linkedin.com/in/thorstenkober/",
      target: "_blank",
    },
    {
      name: "Github",
      type: "icon",
      label: GithubIcon({}),
      url: "https://github.com/flashdesignory",
      target: "_blank",
    },
    {
      name: "Website",
      type: "icon",
      label: WebsiteIcon({}),
      url: "https://flashdesignory.github.io/",
      target: "_blank",
    },
    {
      name: "Email",
      type: "icon",
      label: EmailIcon({}),
      url: "mailto:info@flashdesignory.com",
      target: "_blank",
    },
  ],
});
document.getElementById("card").appendChild(card.render());
