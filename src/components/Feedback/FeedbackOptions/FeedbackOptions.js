import React from "react";
import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions ({onGood, onNeutral, onBad}) {
    return (<div>
        <button className={s.btn} onClick={onGood}>good</button>
        <button className={s.btn} onClick={onNeutral}>neutral</button>
        <button className={s.btn} onClick={onBad}>bad</button>
        </div>)
};
FeedbackOptions.propTypes = {
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
    onBad: PropTypes.func
}