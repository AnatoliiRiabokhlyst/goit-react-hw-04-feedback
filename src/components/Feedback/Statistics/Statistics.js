import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export default function Statistics({
  onGood,
  onNeutral,
  onBad,
  positivePercentage,
  total,
}) {
  return (
    <div className={s.section}>
      {onGood > 0 && <p className={s.p}>Good: {onGood}</p>}
      {onNeutral > 0 && <p className={s.p}>Neutral: {onNeutral}</p>}
      {onBad > 0 && <p className={s.p}>Bad: {onBad}</p>}
      {total > 0 && <p className={s.p}>Total: {onGood + onNeutral + onBad}</p>}
      {positivePercentage > 0 && (
        <p className={s.p}>Positive feedback: {positivePercentage} %</p>
      )}
    </div>
  );
}
Statistics.propTypes = {
  onGood: PropTypes.number,
  onNeutral: PropTypes.number,
  onBad: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
