import Tag from "@/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import CoverSection from "./components/CoverSection";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return null;
  }

  return (
    <>
      <CoverSection blog={blog} />
    </>
  );
}
