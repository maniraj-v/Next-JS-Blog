import BlogPostCard from "@/components/Common/BlogPostCard";
import Tag from "@/components/Elements/Tag";
import { cn } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const categories = new Set(["all"]);
  allBlogs.forEach((blog) => {
    if (blog.tags) {
      blog.tags.forEach((tag) => {
        categories.add(slug(tag));
      });
    }
  });
  return Array.from(categories).map((category) => {
    return {
      slug: category,
    };
  });
}

export default function Categories({ params }: { params: { slug: string } }) {
  let categories = new Set(["all"]);
  const filteredBlogs = allBlogs.filter((blog) => {
    blog.tags &&
      blog.tags.forEach((tag) => {
        categories.add(slug(tag));
      });
    if (params.slug === "all") {
      return true;
    }
    return blog.tags
      ? blog.tags.some((tag) => {
          if (slug(tag) === params.slug) {
            return true;
          }
          return false;
        })
      : false;
  });

  return (
    <main className="px-10">
      <div className="max-w-4xl px-16 pt-12 pb-6">
        <h1 className="text-5xl font-medium leading-normal">#{params.slug}</h1>
        <p>Discover more categories and expand your knowledge!</p>
      </div>
      <article className="py-6 px-16 flex flex-wrap gap-4 border-y-2">
        {Array.from(categories).map((category) => {
          const name = `#${category}`;
          const isActive = category === params.slug;
          return (
            <Tag
              key={category}
              name={name}
              href={`/categories/${category}`}
              className={cn(
                "lowercase py-2",
                isActive ? "" : "bg-light text-dark border-dark"
              )}
            />
          );
        })}
      </article>
      <div className="grid grid-cols-3 gap-12 p-16">
        {filteredBlogs.map((blog) => {
          return <BlogPostCard key={blog._id} blog={blog} />;
        })}
      </div>
    </main>
  );
}
