import { allBlogs } from "contentlayer/generated";
import CoverSection from "./components/CoverSection";
import InfoHeader from "./components/InfoHeader";
import BlogContent from "./components/BlogContent";
import TableOfContent from "./components/TableOfContent";
import type { Metadata } from "next";
import { siteMetaData } from "@/constants/siteMetaData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return {};
  }
  const metaImage = blog.image?.filePath
    ? [siteMetaData.siteUrl + blog.image?.filePath.replace("../public", "")]
    : [siteMetaData.socialBanner];

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetaData.siteUrl + blog.url,
      siteName: siteMetaData.title,
      images: metaImage,
      locale: "en_US",
      type: "website",
    },
    authors: [{ name: blog.author || siteMetaData.author }],
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: metaImage,
    },
  };
}

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
