import PropTypes from "prop-types";

export const Button = ({ text, children, onClickHandler, ...attrs }) => {
  return (
    <button onClick={onClickHandler} {...attrs}>
      {children && children}
      {text}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
  onClickHandler: PropTypes.func,
};
