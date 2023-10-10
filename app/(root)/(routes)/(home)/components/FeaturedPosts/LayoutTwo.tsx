import Tag from "@/components/Elements/Tag";
import { dateFormat } from "@/lib/utils";
import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

const LayoutTwo = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="group rounded-xl overflow-hidden min-w-[10rem] h-[10rem]">
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
        {blog.tags && (
          <Link href={blog.tags ? blog.tags[0] : ""}>
            <p className="uppercase text-sm text-accent font-semibold">
              {blog.tags[0]}
            </p>
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
export default LayoutTwo;
