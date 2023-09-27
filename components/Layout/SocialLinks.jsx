import { socialNavigation } from "@/constants/navigation";

const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-center gap-4 h-auto">
      {socialNavigation.map(({ name, href, icon }) => {
        return (
          <li
            key={name}
            className="w-6 h-6 hover:scale-125 transition-all duration-200"
          >
            <a href={href} title={name}>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
