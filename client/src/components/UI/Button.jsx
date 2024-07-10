import PropTypes from "prop-types";

export const Button = ({ text, onClickHandler, ...attrs }) => {
    return (
        <button onClick={onClickHandler} {...attrs}>
            {text}
        </button>
    );
};

Button.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
    onClickHandler: PropTypes.func,
};
