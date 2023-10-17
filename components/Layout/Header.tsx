import Image from "next/image";
import Logo from "@/public/assets/profile-img.png";
import Link from "next/link";
import { appNavigation } from "@/constants/navigation";
import { MoonIcon, SunIcon } from "@/Icons";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-6 right-1/2 translate-x-1/2 font-medium z-50">
      <ul className="flex items-center gap-4 border border-dark bg-light/80 backdrop-blur-sm rounded-full py-3 px-8">
        {appNavigation.map(({ name, href }) => {
          return (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          );
        })}
        <li>
          <button className="w-6 h-6 p-1 flex items-center justify-center rounded-full bg-dark text-light">
            <MoonIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="py-4 px-10 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex gap-4 items-center">
        <Image
          src={Logo}
          alt="logo"
          width={63}
          height={63}
          className="border border-dark rounded-full object-cover"
        />
        <span className="font-bold text-xl">CodeBucks</span>
      </Link>
      {/* App Navigation Links */}
      <Navbar />
      {/* Social Navigation Links */}
      <SocialLinks />
    </header>
  );
};

export default Header;
