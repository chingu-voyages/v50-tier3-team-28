import PropTypes from "prop-types";

export const AnchorLink = ({ href, text, children, ...attrs }) => {
    return (
        <a href={href} {...attrs}>
            {children && children}
            {text}
        </a>
    );
};

AnchorLink.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.element,
};
