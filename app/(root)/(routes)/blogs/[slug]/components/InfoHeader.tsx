import { dateFormat } from "@/lib/utils";
import { Blog } from "contentlayer/generated";
import Link from "next/link";

const InfoHeader = ({ blog }: { blog: Blog }) => {
  const tag = blog.tags ? blog.tags[0] : "";

  return (
    <section className="w-full bg-accent text-light text-xl font-medium font-mr py-4 flex items-center gap-8 justify-evenly rounded-md mb-8">
      <div>{dateFormat(blog.publishedAt)}</div>
      <p>800 views</p>
      <span>{blog.readingTime.text}</span>
      <Link href={`categories/${tag}`}># {tag}</Link>
    </section>
  );
};
export default InfoHeader;
