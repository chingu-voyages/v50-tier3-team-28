import Graph from "../Graph";
import { DetailsSummary } from "./DetailsSummary";

export const ProblemContainter = () => {
  const customStyles = "text-[#101828] text-18px font-semibold";

  return (
    <section className="flex flex-col md:min-h-[100%]">
      <section className="mt-4 pt-4 mb-4 pb-4 text-center">
        <h2 className="text-[#101828] text-22px font-bold underline">Problem</h2>
      </section>

      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="bg-[#D8E5C3] px-3 py-6 h-full min-h-[32dvh] rounded-xl flex flex-col gap-6 md:w-1/2 md:min-h-[32dvh] md:py-10 md:justify-stretch md:gap-8 dark:bg-[#3D4D22]">
          <DetailsSummary open className={customStyles} title="Pesticides" description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations." />
          <DetailsSummary className={customStyles} title="Climate Change" description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations." />
          <DetailsSummary className={customStyles} title="Habitat Destruction" description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations." />
        </section>

        <section className="md:w-1/2">
          <Graph />
        </section>
      </section>
    </section>
  );
};
