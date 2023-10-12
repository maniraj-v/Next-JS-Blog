import { Blog } from "contentlayer/generated";

const TableOfContent = ({ blog }: { blog: Blog }) => {
  return (
    <details open className="p-4 border rounded-lg font-in sticky top-6 max-h-[75vh] overflow-y-auto cursor-pointer">
      <summary className="text-lg font-medium">Table of Content</summary>
      <ul className="mt-4">
        {blog.toc.map(({ level, text, slug }: Record<string, string>) => {
          const listStyle = level === "two" ? "list-none" : "list-disc ml-8";
          return (
            <li key={slug} className={"my-2 " + listStyle}>
              {level === "two" && <hr className="my-2 text-dark/40" />}
              <a href={`#${slug}`} className="font-mr hover:underline text-base leading-normal">
                <p>{text}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default TableOfContent;
