import { useState } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };
  const isFeedback = Object.values(feedbacks).find(value => value > 0);
  const options = Object.keys(feedbacks);

  const onBtnClick = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbacksPercentage = () => {
    return Number(((good / (good + neutral + bad)) * 100).toFixed(0));
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
      </Section>
      <Section title="Statistics">
        {isFeedback ? (
          <Statistics
            feedbacks={feedbacks}
            total={good + neutral + bad}
            positivePercentage={countPositiveFeedbacksPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
