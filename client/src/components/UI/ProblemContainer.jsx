import Graph from "../Graph";
import { DetailsSummary } from "./DetailsSummary";

export const ProblemContainter = () => {
  const customStyles = "text-[#101828] text-18px font-semibold";

  return (
    <section className="flex flex-col">
      <section className="text-center">
        <h2 className="underline">Problem</h2>
      </section>

      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="bg-[#D8E5C3] h-64 md:w-1/2 md:h-auto dark:bg-[#3D4D22]">
          <DetailsSummary className={customStyles} title="Pesticides" description="The use of pesticides can kill bees outright or impair their ability to navigate and reproduce leading to a decline in bee populations." />
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
