import PropTypes from "prop-types";
import { AnchorLink } from "../UI/AnchorLink";
import { Nav } from "../UI/Nav";
import MainHeroLanding from "../UI/MainHeroLanding";
import { MainHeroLandingSurvey } from "../UI/MainHeroLandingSurvey";

export const Header = ({ action, onClickHandler }) => {
  return (
    <header className={`col-span-12 bg-[#9BC25B]`}>
      <section className="flex flex-wrap items-center justify-between mx-auto p-4">
        <AnchorLink
          href="#"
          className="logo-custom absolute top-4 font-normal text-black text-2xl mt-4 z-50 dark:text-white"
          text="LOGO"
        />
        <Nav action={action} onClickHandler={onClickHandler} />
      </section>
      <MainHeroLanding />
      <MainHeroLandingSurvey />
    </header>
  );
};

Header.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};
