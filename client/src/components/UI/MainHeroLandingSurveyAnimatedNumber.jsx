import PropTypes from "prop-types";
import AnimatedNumber from "../../layout/AnimatedNumber";

export const MainHeroLandingSurveyAnimatedNumber = ({ statHighlights, text }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <div className="flex flex-row">
        <span className="text-xl text-black font-bold dark:text-white">
          <AnimatedNumber className="" n={statHighlights} />
        </span>
        <div className="text-xl text-black font-bold dark:text-white">+</div>
      </div>
      <p className="text-xl text-black font-normal dark:text-white">{text}</p>
    </div>
  );
};

MainHeroLandingSurveyAnimatedNumber.propTypes = {
  statHighlights: PropTypes.number,
  text: PropTypes.string,
};
