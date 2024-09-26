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
        <Image src={beeImage} alt="Bee image" className="border-2 border-[#D9D9D9] rounded-full h-40 w-40 dark:border-black mt-8" />

        <h2 className="text-2xl text-center font-bold text-black leading-8 m-10 md:max-w-52 md:text-start dark:text-white">
          Its Time to Save The Bees To Save Our Future Generations
        </h2>

        <Button
          className="font-normal text-white bg-[#F4743B] px-5 py-2 rounded-lg md:mt-10 dark:text-black"
          type="button"
          text="Learn More"
        />
      </section>

      <section className="flex flex-col md:gap-8 md:flex-row mt-10">
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.countries} text="Countries" />
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.hivesSaved} text="Beehives Saved" />
        <MainHeroLandingSurveyAnimatedNumber statHighlights={statHighlights.volunteers} text="Volunteers" />
      </section>
    </section>
  );
};
