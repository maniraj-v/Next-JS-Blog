import BlogPostCard from "@/components/Common/BlogPostCard";
import { Blog } from "contentlayer/generated";
import Link from "next/link";

const RecentPosts = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="w-100 my-24 px-16">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold ">Recent Posts</p>
        <Link
          href="/categories/all"
          className="text-lg text-accent underline font-semibold"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-12 mt-16">
        {blogs.slice(4, 10).map((blog) => {
          return <BlogPostCard key={blog._id} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
