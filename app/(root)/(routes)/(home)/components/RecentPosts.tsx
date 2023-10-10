import Tag from "@/components/Elements/Tag";
import { dateFormat } from "@/lib/utils";
import { Blog } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const Post = ({ blog }: { blog: Blog }) => {
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

const RecentPosts = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="w-100 my-24 px-16">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold ">Recent Posts</p>
        <Link href="/categories/all"
        className="text-lg text-accent underline font-semibold"
        >view all</Link>
      </div>
      <div className="grid grid-cols-3 gap-12 mt-16">
        {blogs.slice(4, 10).map((blog) => {
          return <Post key={blog._id} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
