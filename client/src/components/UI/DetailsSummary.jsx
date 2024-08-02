import PropTypes from "prop-types";

export const DetailsSummary = ({ title, description, ...attrs }) => {
  return (
    <details {...attrs}>
      <summary style={{ listStyle: 'none', cursor: 'pointer' }}>{title}</summary>
      <p>{description}</p>
    </details>
  );
};

DetailsSummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
