import { cn } from "@/lib/utils";
import Link from "next/link";

interface TagProps {
  name: string;
  href: string;
  className?: string;
}

const Tag = ({ href = "#", name, className }: TagProps) => {
  return (
    <Link href={href} className={cn("inline-block px-10 py-3 bg-dark text-light rounded-full capitalize font-semibold border-2 border-light hover:scale-105 transition-all duration-200", className)}>
      {name}
    </Link>
  );
};

export default Tag;
