import hiveLogo from "../../assets/imgs/hive.png";
import saveTextLogo from "../../assets/imgs/save_text_logo.png";
import beesTextLogo from "../../assets/imgs/bees_text_logo.png";

function MainLandingHero() {
  return (
    <section className="bg-footerTextColor flex items-center justify-center w-full mx-auto">
      <div className="relative w-4/5 flex flex-col items-center md:items-start md:justify-center md:flex-row">
        <div className="relative flex flex-col items-center md:items-start">
          <img
            src={saveTextLogo}
            alt="Save"
            className="z-10 mb-[-25px] md:mb-0 md:absolute md:top-[81px] md:left-[36%] lg:left-[32%] xl:left-[23%] md:translate-x-[-50%] w-1/2 md:w-auto dark:grayscale dark:invert"
          />

          <img
            src={hiveLogo}
            alt="Hive"
            className="relative z-20 scale-125 md:scale-100 w-1/2 md:w-auto xl:ml-[-80px]"
          />

          <img
            src={beesTextLogo}
            alt="Bees"
            className="relative z-30 mt-[-20px] md:mt-0 md:absolute md:bottom-[190px] md:left-[60%] lg:left-[70%] xl:left-[79%] md:translate-x-[-50%] w-1/2 md:w-auto dark:grayscale dark:invert"
          />
        </div>
      </div>
    </section >
  );
}

export default MainLandingHero;
