import Tag from "@/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import CoverSection from "./components/CoverSection";
import InfoHeader from "./components/InfoHeader";
import BlogContent from "./components/BlogContent";
import TableOfContent from "./components/TableOfContent";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return null;
  }

  return (
    <>
      <CoverSection blog={blog} />
      <InfoHeader blog={blog} />
      <section className="grid grid-cols-12 mb-8 gap-12">
        <div className="col-span-4">
          <TableOfContent blog={blog} />
        </div>
        <div className="col-span-8">
          <BlogContent blog={blog} />
        </div>
      </section>
    </>
  );
}
