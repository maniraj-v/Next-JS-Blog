import Tag from "@/components/Elements/Tag";
import Image from "next/image";
import { Blog } from "contentlayer/generated";

const CoverSection = ({ blog }: { blog: Blog }) => {
  return (
    <section className="w-full h-[70vh] flex relative mt-1 mb-8 rounded-2xl overflow-hidden">
      <Image
        src={blog.image?.filePath.replace("../public", "") || ""}
        placeholder="blur"
        blurDataURL={blog.image?.blurhashDataUrl || ""}
        alt={blog.title}
        fill
        className="w-full h-full object-center object-cover"
      />
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-dark" />
      {/* Image Overlay Text */}
      <article className="absolute h-full w-full text-light flex flex-col gap-8 items-center justify-center">
        <Tag
          href={blog.tags ? blog.tags[0] : ""}
          name={blog.tags ? blog.tags[0] : ""}
        />
        <h2 className="font-semibold text-5xl leading-normal capitalize text-center max-w-5xl">
          <span>{blog.title}</span>
        </h2>
      </article>
    </section>
  );
};
export default CoverSection;
