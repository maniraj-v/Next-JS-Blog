import Tag from "@/components/Elements/Tag";
import { dateFormat } from "@/lib/utils";
import { Blog } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard = ({ blog }: { blog: Blog }) => {
  const tag = blog.tags ? slug(blog.tags[0]) : "";
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="group rounded-xl overflow-hidden h-[13rem]">
        <Image
          src={blog.image?.filePath.replace("../public", "") || ""}
          placeholder="blur"
          blurDataURL={blog.image?.blurhashDataUrl || ""}
          alt={blog.title}
          width={blog.image?.width}
          height={blog.image?.height}
          className="w-full h-full object-center object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      {/* Image Sideways Text */}
      <article className="text-dark flex flex-col gap-2">
        {tag && (
          <Link href={`/categories/${tag}`}>
            <p className="uppercase text-sm text-accent font-semibold">{tag}</p>
          </Link>
        )}
        <Link href={blog.url}>
          <p className="font-semibold text-lg capitalize">
            <span className="hover-underline-translate-sm">{blog.title}</span>
          </p>
        </Link>
        <span className="font-semibold text-gray">
          {dateFormat(blog.publishedAt)}
        </span>
      </article>
    </div>
  );
};

export default BlogPostCard;
