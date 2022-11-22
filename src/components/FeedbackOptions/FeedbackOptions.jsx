import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.button_list}>
      {options.map((value) => {
        return (
          <li className={css.button_item} key={value}>
            <button
              className={css.button}
              type="button"
              onClick={onLeaveFeedback}
              name={value}
            >
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
