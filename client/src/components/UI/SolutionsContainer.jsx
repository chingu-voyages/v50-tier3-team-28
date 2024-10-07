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
            description="Growing native, bee-friendly plants provides bees with essential nectar and pollen, helping them thrive and boosting local biodiversity."
          />
          <DetailsSummary
            className={customStyles}
            title="Avoid Peticides"
            description="Choosing natural alternatives to pesticides helps protect bees from harmful chemicals that can impair their health and disrupt ecosystems."
          />
          <DetailsSummary className={customStyles} title="Create Habitats" description="Set aside space for wildflowers and undisturbed areas in your garden to give bees a safe place to nest and forage." />
        </section>

        <section className="bg-[#D8E5C3] rounded-xl min-h-full px-3 py-6 flex flex-col gap-6 md:py-10 md:justify-stretch md:gap-8 md:w-5/12 dark:bg-[#3D4D22]">
          <DetailsSummary open
            className={customStyles}
            title="Provide Water"
            description="Place shallow water sources with small stones where bees can land and drink, giving them a much-needed rest during foraging."
          />
          <DetailsSummary
            className={customStyles}
            title="Support Local Beekeepers"
            description="Buying honey and other products from local beekeepers helps sustain bee populations and promotes ethical beekeeping practices."
          />
          <DetailsSummary className={customStyles} title="Create a Bee Bath" description="Create a bee bath by filling a shallow dish with water and adding pebbles for bees to land on, offering them a safe place to rehydrate." />
        </section>

        <section className="md:w-3/12 min-h-full">
          <img src={beekeepersImage} className="w-[100%] h-[100%]" alt="beekeepers" />
        </section>
      </section>
    </section>
  );
};
