import Graph from "../Graph";
import { DetailsSummary } from "./DetailsSummary";

export const ProblemContainter = () => {
  const customStyles = "text-[#101828] text-18px font-semibold";

  return (
    <section className="flex flex-col md:min-h-[100%]">
      <section className="mt-4 pt-4 mb-4 pb-4 text-center">
        <h2 className="text-[#101828] text-22px font-bold underline dark:text-slate-300">
          Problem
        </h2>
      </section>

      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="md:w-1/2">
          <Graph />
        </section>

        <section className="bg-[#D8E5C3] dark:bg-[#3D4D22] h-64 md:w-1/2 md:h-auto rounded-xl">
          <DetailsSummary
            className={customStyles}
            title="Pesticides"
            description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations."
          />
          <DetailsSummary
            className={customStyles}
            title="Climate Change"
            description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations."
          />
          <DetailsSummary
            className={customStyles}
            title="Habitat Destruction"
            description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations."
          />
        </section>
      </section>
    </section>
  );
};
