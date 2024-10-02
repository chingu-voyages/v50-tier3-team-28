import hiveLogo from "../../assets/imgs/hive.png";
import saveTextLogo from "../../assets/imgs/save_text_logo.png";
import beesTextLogo from "../../assets/imgs/bees_text_logo.png";

function MainLandingHero() {
  return (
    <div className="h-[500px] relative md:h-[800px]">
      <div className="  flex flex-col items-center justify-center">
        <img
          src={saveTextLogo}
          alt="Save"
          className="z-10 absolute top-[10%] left-0 scale-75 md:top-[10%] md:left-[2%] md:scale-100 lg:top-[10%] lg:left-[2%] xl:left-[6%] dark:grayscale dark:invert"
        />

        <img
          src={hiveLogo}
          alt="Hive"
          className="z-20 absolute top-[6%] left-0 scale-100 md:top-[0%] md:left-[3%] md:scale-100 lg:top-[0%] lg:left-[3%] xl:left-[8%]"
        />

        <img
          src={beesTextLogo}
          alt="Bees"
          className="z-30 absolute top-[68%] left-0 scale-75 md:top-[67%] md:left-[26%] md:scale-100 lg:top-[67%] lg:left-[30%] xl:left-[40%] dark:grayscale dark:invert"
        />
      </div>
    </div>
  );
}

export default MainLandingHero;
