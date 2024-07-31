import PropTypes from "prop-types";
import AnimatedNumber from "../../layout/AnimatedNumber";

export const MainHeroLandingSurveyAnimatedNumber = ({ statHighlights, text }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex flex-row">
        <span className="font-bold text-black dark:text-white">
          <AnimatedNumber className="" n={statHighlights} />
        </span>
        <div className="font-bold text-black dark:text-white">+</div>
      </div>
      <p className="font-normal text-black dark:text-white">{text}</p>
    </div>
  );
};

MainHeroLandingSurveyAnimatedNumber.propTypes = {
  statHighlights: PropTypes.number,
  text: PropTypes.string,
};
