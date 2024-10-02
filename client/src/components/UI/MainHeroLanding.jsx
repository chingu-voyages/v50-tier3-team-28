import hiveLogo from "../../assets/imgs/hive.png";
import saveTextLogo from "../../assets/imgs/save_text_logo.png";
import beesTextLogo from "../../assets/imgs/bees_text_logo.png";

function MainLandingHero() {
  return (
    <section id="home" className="bg-footerTextColor flex items-center justify-center w-full mx-auto">
      <div className="relative w-4/5 flex flex-col items-center md:items-start md:justify-center md:flex-row">
        <div className="relative flex flex-col items-center md:items-start">
          <img
            src={saveTextLogo}
            alt="Save"
            className="z-10 mb-[-25px] md:mb-0 md:absolute md:top-[58px] md:left-[28%] lg:left-[24%] xl:left-[15%] md:translate-x-[-50%] w-1/2 md:w-auto dark:grayscale dark:invert"
          />

          <img
            src={hiveLogo}
            alt="Hive"
            className="relative z-20 scale-125 m-8 h-[18rem] md:h-[29rem] md:scale-100 lg:h-[31.5rem] xl:h-[34rem] xl:ml-[-80px]"
          />

          <img
            src={beesTextLogo}
            alt="Bees"
            className="relative z-30 mt-[-20px] md:mt-0 md:absolute md:bottom-[120px] md:left-[63%] lg:left-[73%] xl:left-[82%] md:translate-x-[-50%] w-1/2 md:w-auto dark:grayscale dark:invert"
          />
        </div>
      </div>
    </section >
  );
}

export default MainLandingHero;
