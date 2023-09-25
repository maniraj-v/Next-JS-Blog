import Tag from "@/components/Elements/Tag";
import { Blog } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const HomeCoverSection = ({ blogs }: { blogs: Blog[] }) => {
  const mostRecentBlog: Blog = blogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  )[1];

  return (
    <section className="w-full h-[85vh] flex relative mt-1 rounded-3xl overflow-hidden">
      <Image
        src={mostRecentBlog.image?.filePath.replace("../public", "") || ""}
        placeholder="blur"
        blurDataURL={mostRecentBlog.image?.blurhashDataUrl || ""}
        alt={mostRecentBlog.title}
        fill
        className="w-full h-full object-center object-cover"
      />
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% to-dark/90" />
      {/* Image Overlay Text */}
      <article className="w-3/4 absolute bottom-0 pb-16 pl-16 text-light flex flex-col gap-4">
        <Tag
          href={mostRecentBlog.tags ? mostRecentBlog.tags[0] : ""}
          name={mostRecentBlog.tags ? mostRecentBlog.tags[0] : ""}
          className="self-start mb-2"
        />
        <Link href={mostRecentBlog.url}>
          <h2 className="font-bold text-4xl capitalize">
            {mostRecentBlog.title}
          </h2>
        </Link>
        <p className="text-xl font-in">{mostRecentBlog.description}</p>
      </article>
    </section>
  );
};
export default HomeCoverSection;
