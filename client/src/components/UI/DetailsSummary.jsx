import PropTypes from "prop-types";

export const DetailsSummary = ({ title, description, ...attrs }) => {
  return (
    <details {...attrs}>
      <summary className="cursor-pointer text-[#101828] font-bold dark:text-white" title="Click here to read more">{title}</summary>
      <p className="text-[#4b4f57] py-4 md:max-w-[80%] lg:max-w-[95%] dark:text-white">{description}</p>
    </details>
  );
};

DetailsSummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
