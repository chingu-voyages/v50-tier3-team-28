import PropTypes from "prop-types";
import { AnchorLink } from "../UI/AnchorLink";
import { Nav } from "../UI/Nav";

export const Header = ({ action, onClickHandler }) => {
  return (
    <header className={`col-span-12 bg-[#9BC25B]`}>
      <section className="flex flex-wrap items-center justify-between mx-auto p-4">
        <AnchorLink
          href="#"
          className="logo-custom font-normal text-black text-2xl"
          text="LOGO"
        />
        <Nav action={action} onClickHandler={onClickHandler} />
      </section>
    </header>
  );
};

Header.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};
