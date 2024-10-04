import { AnchorLink } from "./AnchorLink";

export const SolutionsHeader = () => {
  return (
    <section className="flex flex-col mt-4 pt-4 mb-4 pb-4">
      <h2 className="mb-2 pb-2 text-center text-[#101828] text-22px font-bold underline dark:text-slate-300">
        Solutions
      </h2>
      <p className="text-center">
        Bees play a crucial role in our ecosystems, yet their populations are
        dwindling at an alarming rate. To help save the bees, there are several
        simple steps everyone can take. By creating bee-friendly environments,
        we can provide essential resources like food, water, and shelter. Small
        changes in our daily habits can make a big impact. Whether you have a
        large garden or a small balcony, these efforts contribute to the overall
        health of bee populations. Let's take action to protect these crucial
        pollinators and ensure a balanced environment for future generations.
      </p>
      <AnchorLink
        href="#"
        text="Login to send request"
        className="text-[#F4743B] text-center uppercase underline ml-1 mt-3"
      />
    </section>
  );
};
