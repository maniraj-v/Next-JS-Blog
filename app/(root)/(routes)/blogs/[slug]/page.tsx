import { allBlogs } from "contentlayer/generated";
import CoverSection from "./components/CoverSection";
import InfoHeader from "./components/InfoHeader";
import BlogContent from "./components/BlogContent";
import TableOfContent from "./components/TableOfContent";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return allBlogs.map((blog) => {
    return {
      slug: blog._raw.flattenedPath,
    };
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return null;
  }

  return (
    <main className="px-10">
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
    </main>
  );
}
