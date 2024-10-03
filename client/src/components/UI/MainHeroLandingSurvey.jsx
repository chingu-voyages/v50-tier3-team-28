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
    <section className="flex flex-col items-center justify-center py-4 md:px-4 md:flex-row md:justify-between">
      <section className="flex flex-col items-center justify-center gap-4 md:gap-0 md:flex-row">
        <Image src={beeImage} alt="Bee image" className="border-2 border-[#D9D9D9] rounded-full h-40 w-40 dark:border-black" />

        <h2 className="text-2xl text-center font-bold text-black leading-8 pl-4 md:max-w-60 md:text-start dark:text-white">
          Its Time to Save The Bees To Save Our Future Generations
        </h2>

        <Button
          className="w-40 text-black bg-navSignupButton text-lg px-5 py-2 rounded-lg md:mt-10 dark:text-white"
          type="button"
          text="Learn More"
        />
      </section>

      <section className="flex flex-col gap-4 my-2 md:my-0 md:gap-8 md:flex-row">
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.countries} text="Countries" />
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.hivesSaved} text="Beehives Saved" />
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.volunteers} text="Volunteers" />
      </section>
    </section>
  );
};
