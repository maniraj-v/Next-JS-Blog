import Tag from "@/components/Elements/Tag";
import { Blog } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import LayoutOne from "./LayoutOne";
import LayoutTwo from "./LayoutTwo";

const FeaturedPosts = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs: Blog[] = blogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <section className="w-100 my-24 px-16">
      <p className="text-4xl font-bold ">Featured Posts</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="row-span-2">
          <LayoutOne blog={sortedBlogs[1]} />
        </article>
        <article>
          <LayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article>
          <LayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};
export default FeaturedPosts;
