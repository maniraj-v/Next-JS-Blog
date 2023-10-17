import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/Icons";
import { siteMetaData } from "@/constants/siteMetaData";
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
    href: siteMetaData.linkedin,
    icon: <LinkedinIcon />,
  },
  {
    name: "Github",
    href: siteMetaData.github,
    icon: <GithubIcon className="bg-light rounded-full" />,
  },
  {
    name: "Twitter",
    href: siteMetaData.twitter,
    icon: <TwitterIcon />,
  },
];
