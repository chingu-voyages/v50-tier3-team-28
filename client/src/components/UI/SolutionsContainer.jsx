import { DetailsSummary } from "./DetailsSummary";
import beekeepersImage from "../../assets/imgs/beekeepers.png";

export const SolutionsContainer = () => {
  const customStyles = "pt-8 pr-8 pl-8 text-[#101828] text-18px font-semibold";

  return (
    <section className="flex flex-col">
      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="bg-[#D8E5C3] dark:bg-[#3D4D22] h-72 md:w-1/2 rounded-xl">
          <DetailsSummary className={customStyles} title="Plant Bee-Friendly Flowers" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
          <DetailsSummary className={customStyles} title="Avoid Peticides" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
          {/* <DetailsSummary className={customStyles} title="Provide Water" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." /> */}
        </section>

        <section className="bg-[#D8E5C3] dark:bg-[#3D4D22] h-72 md:w-1/2 rounded-xl">
          <DetailsSummary className={customStyles} title="Create a Bee Bath" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." />
          <DetailsSummary className={customStyles} title="Create Habitats" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
          {/* <DetailsSummary className={customStyles} title="Support Local Beekeepers" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." /> */}
        </section>

        <section className="h-64 md:h-auto">
          <img src={beekeepersImage} alt="beekeepers"/>
        </section>
      </section>
    </section>
  );
};
