import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import SectionTitle from './SectionTitle';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + bad + neutral;

  const increaseFeedback = event => {
    const feedback = event.target.dataset.state;
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;
      case 'bad':
        setBad(prevState => prevState + 1);
        return;

      default:
        return;
    }
  };

  function calculatePositivePercentage() {
    if (total > 0) {
      return Math.round((good / total) * 100);
    }
  }
  return (
    <div>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={increaseFeedback}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        <Statistics
          onGood={good}
          onNeutral={neutral}
          onBad={bad}
          total={total}
          positivePercentage={calculatePositivePercentage()}
        />
      </SectionTitle>
      {total === 0 && (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}

export default Feedback;
