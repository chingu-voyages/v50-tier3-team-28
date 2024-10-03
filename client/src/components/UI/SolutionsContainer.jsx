import { DetailsSummary } from "./DetailsSummary";
import beekeepersImage from "../../assets/imgs/beekeepers.png";

export const SolutionsContainer = () => {
  const customStyles = "text-[#101828] text-18px font-semibold";

  return (
    <section className="flex flex-col pt-6 md:pt-14 md:min-h-[100%]">
      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <section className="bg-[#D8E5C3] rounded-xl min-h-full px-3 py-6 flex flex-col gap-6 md:py-10 md:justify-stretch md:gap-8 md:w-5/12 dark:bg-[#3D4D22]">
          <DetailsSummary open
            className={customStyles}
            title="Plant Bee-Friendly Flowers"
            description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food."
          />
          <DetailsSummary
            className={customStyles}
            title="Avoid Peticides"
            description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food."
          />
          <DetailsSummary className={customStyles} title="Create Habitats" description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food." />
        </section>

        <section className="bg-[#D8E5C3] rounded-xl min-h-full px-3 py-6 flex flex-col gap-6 md:py-10 md:justify-stretch md:gap-8 md:w-5/12 dark:bg-[#3D4D22]">
          <DetailsSummary open
            className={customStyles}
            title="Provide Water"
            description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning."
          />
          <DetailsSummary
            className={customStyles}
            title="Support Local Beekeepers"
            description="Grow a variety of plants that flower at different times of the year to provide bees with a constant source of food."
          />
          <DetailsSummary className={customStyles} title="Create a Bee Bath" description="Leave a shallow water source with landing spots, like pebbles or twigs, so bees can hydrate without drowning." />
        </section>

        <section className="md:w-3/12 min-h-full">
          <img src={beekeepersImage} className="w-[100%] h-[100%]" alt="beekeepers" />
        </section>
      </section>
    </section>
  );
};
