import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "./components/HomeCoverSection";

export default function Home() {
  return (
    <main>
      <HomeCoverSection blogs={allBlogs} />
    </main>
  );
}
