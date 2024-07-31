import PropTypes from "prop-types";

export const BurgerMenu = ({ onChangeHandler }) => {
  return (

    <section>
      <section className="absolute top-8 right-6 text-[40px] cursor-pointer md:hidden z-50 burger-menu-container" onClick={onChangeHandler}>
        <section className="bar1"></section>
        <section className="bar2"></section>
        <section className="bar3"></section>
      </section>
    </section>
  );
};

BurgerMenu.propTypes = {
  onChangeHandler: PropTypes.func,
};