"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Blog } from "contentlayer/generated";

const mdxComponents: MDXComponents = {
  Image,
};

const BlogContent = ({ blog }: { blog: Blog }) => {
  const MDXContent = useMDXComponent(blog?.body.code || "");

  return (
    <div
      className="prose prose-lg font-in max-w-max
    prose-blockquote:bg-accent/20
    prose-blockquote:border-accent
    prose-blockquote:rounded-r-lg
    prose-blockquote:py-2
    prose-blockquote:px-6
    prose-li:marker:text-accent
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};
export default BlogContent;
