import PropTypes from "prop-types";

export const WrapperContainer = ({ children, ...attrs }) => {
    return (
        <section {...attrs}>
            {children && children}
        </section>
    );
};

WrapperContainer.propTypes = {
    children: PropTypes.element
};
