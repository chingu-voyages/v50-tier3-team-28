import PropTypes from "prop-types";

export const DetailsSummary = ({ title, description }) => {
  return (
    <details>
      <summary>{title}</summary>
      <p>{description}</p>
    </details>
  );
};

DetailsSummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};