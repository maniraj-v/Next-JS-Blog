import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "./components/HomeCoverSection";
import FeaturedPosts from "./components/FeaturedPosts";

export default function Home() {
  return (
    <main>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
    </main>
  );
}
