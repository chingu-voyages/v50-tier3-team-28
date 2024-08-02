import PropTypes from "prop-types";
import { useState } from "react";
import { AnchorLink } from "../UI/AnchorLink";
import { Button } from "../UI/Button";
import { DarkLightModeButton } from "../UI/DarkLightModeButton";
import { BurgerMenu } from "./BurgerMenu";
import { Link } from "react-router-dom";

export const Nav = ({ action, onClickHandler }) => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const burgerMenuContainer = document.querySelector(".burger-menu-container");

  const onChangeToggleClassHandler = () => {
    setOpenNavMenu(!openNavMenu);
    burgerMenuContainer?.classList.toggle("change");
  };

  return (
    <>
      <BurgerMenu onChangeHandler={() => onChangeToggleClassHandler()} />
      <nav className={`${openNavMenu ? "" : "hidden md:block"}`}>
        <ul
          className={`${
            openNavMenu
              ? "flex flex-col items-center justify-center gap-6 absolute top-0 left-0 w-full h-full bg-neutral-500 z-40"
              : "font-medium flex flex-col space-y-6 p-4 md:p-0 mt-4 md:flex-row md:items-center md:space-x-8 md:space-y-0"
          }`}>
          <li>
            <AnchorLink
              href="#"
              className={`underline text-[#F4743B] p-2.5`}
              text="Home"
            />
          </li>
          <li>
            <AnchorLink
              href="#footer"
              className="text-black p-2.5 dark:text-white"
              text="About Us"
            />
          </li>
          <li className="text-center">
            <Link to="/solutions" className="text-black p-2.5 dark:text-white">
              Solutions
            </Link>
          </li>
          <li className="flex items-center">
            <Button
              className="bg-navSignupButton text-navSignupButtonWhite font-normal px-3 py-2 text-center"
              type="button"
              text={action}
              onClickHandler={onClickHandler}
            />
          </li>
          <li className="flex items-center pt-1">
            <DarkLightModeButton />
          </li>
        </ul>
      </nav>
    </>
  );
};

Nav.propTypes = {
  action: PropTypes.string,
  onClickHandler: PropTypes.func,
};
