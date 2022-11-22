import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({
  feedbacks: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistic_list}>
      <li className={css.statistic_item}>Good: {good}</li>
      <li className={css.statistic_item}>Neutral: {neutral}</li>
      <li className={css.statistic_item}>Bad: {bad}</li>
      <li className={css.statistic_item}>Total: {total}</li>
      <li className={css.statistic_item}>
        Positive feedbacks: {positivePercentage || 0}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
