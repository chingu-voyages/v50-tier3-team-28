import { useState } from "react";
import { MainHeroLandingSurveyAnimatedNumber } from "./MainHeroLandingSurveyAnimatedNumber";
import { Image } from "./Image";
import { Button } from "./Button";
import beeImage from "../../assets/imgs/bee.png";

export const MainHeroLandingSurvey = () => {
  const [statHighlights] = useState({
    countries: 12,
    hivesSaved: 16000,
    volunteers: 300,
  });

  return (
    <section className="flex flex-col items-center gap-6 pb-6 md:flex-row md:justify-between md:gap-2 bg-[#9BC25B]">
      <section className="flex flex-col items-center md:gap-2 md:flex-row">
        <Image src={beeImage} alt="Bee image" className="border-2 border-[#D9D9D9] rounded-full h-40 w-40 dark:border-black" />

        <h2 className="text-md text-center font-bold text-black leading-8 m-2 md:max-w-40 md:text-start dark:text-white">
          Its Time to Save The Bees To Save Our Future Generations
        </h2>

        <Button
          className="font-normal text-white bg-[#F4743B] rounded-sm p-1.5 md:mt-10 dark:text-black"
          type="button"
          text="Learn More"
        />
      </section>

      <section className="flex flex-col md:gap-6 md:flex-row">
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.countries} text="Countries" />
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.hivesSaved} text="Beehives Saved" />
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.volunteers} text="Volunteers" />
      </section>
    </section>
  );
};
