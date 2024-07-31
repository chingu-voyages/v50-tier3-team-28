import PropTypes from "prop-types";

export const Image = ({ src, alt, ...attrs }) => {
  return (
    <img src={src} alt={alt} {...attrs} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
