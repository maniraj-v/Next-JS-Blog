import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "./components/HomeCoverSection";
import FeaturedPosts from "./components/FeaturedPosts";
import RecentPosts from "./components/RecentPosts";

export default function Home() {
  return (
    <>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </>
  );
}
