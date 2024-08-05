import PropTypes from "prop-types";

export const DetailsSummary = ({ title, description, ...attrs }) => {
  return (
    <details {...attrs}>
      <summary className="list-none cursor-pointer font-bold">{title}</summary>
      <p>{description}</p>
    </details>
  );
};

DetailsSummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
