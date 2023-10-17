import { insights } from "@/constants/insights";

function Insights() {
  return (
    <article className="w-full whitespace-nowrap bg-accent overflow-hidden">
      <div className="w-full text-light font-medium font-in py-3 flex tracking-wider animate-infinite-loop hover:animation-pause">
        {insights.map((insight) => {
          return (
            <div key={insight}>
              <span>{insight}</span>
              <span className="mx-4">{"|"}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default Insights;
