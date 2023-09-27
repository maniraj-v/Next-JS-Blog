import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/Icons";

export const appNavigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const socialNavigation = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mani-raj-velrajan",
    icon: <LinkedinIcon />,
  },
  {
    name: "Github",
    href: "https://github.com/maniraj-v",
    icon: <GithubIcon className="bg-light rounded-full" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <TwitterIcon />,
  },
];
