import PropTypes from "prop-types";
import { AnchorLink } from "../UI/AnchorLink";
import { Nav } from "../UI/Nav";
import navBeeLogo from "../../assets/imgs/nav_bee_logo.png";

export const Header = ({ action, onClickHandler }) => {
  return (
    <header className="col-span-12 max-w-[80rem] bg-[#9BC25B]">
      <section className="flex items-start justify-between mx-auto">
        <AnchorLink
          href="#"
          className="flex items-center justify-center -ml-8 text-white text-2xl font-bold">
          <img
            src={navBeeLogo}
            alt="Bee Logo"
            className="h-[10rem]"
            // className="h-36 md:h-48 md:ml-4"
          />
        </AnchorLink>
        <Nav action={action} onClickHandler={onClickHandler} />
      </section>
    </header>
  );
};

Header.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};
