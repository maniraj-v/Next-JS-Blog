import Tag from "@/components/Elements/Tag";
import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

const LayoutOne = ({ blog }: { blog: Blog }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <Image
        src={blog.image?.filePath.replace("../public", "") || ""}
        placeholder="blur"
        blurDataURL={blog.image?.blurhashDataUrl || ""}
        alt={blog.title}
        width={blog.image?.width}
        height={blog.image?.height}
        className="object-center object-cover group-hover:scale-105 transition duration-300"
      />
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-dark/90" />
      {/* Image Overlay Text */}
      <article className="absolute bottom-0 pb-8 px-12 text-light flex flex-col gap-4">
        <Tag
          href={blog.tags ? blog.tags[0] : ""}
          name={blog.tags ? blog.tags[0] : ""}
          className="self-start mb-2 border text-sm"
        />
        <Link href={blog.url}>
          <p className="font-bold text-2xl capitalize">
            <span className="hover-underline-translate-sm">{blog.title}</span>
          </p>
        </Link>
      </article>
    </div>
  );
};
export default LayoutOne;
