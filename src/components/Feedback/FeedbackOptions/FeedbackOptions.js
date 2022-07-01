import React from "react";
import PropTypes from 'prop-types'

export default function FeedbackOptions ({onGood, onNeutral, onBad}) {
    return (<div>
        <button onClick={onGood}>good</button>
        <button onClick={onNeutral}>neutral</button>
        <button onClick={onBad}>bad</button>
        </div>)
};
FeedbackOptions.propTypes = {
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
    onBad: PropTypes.func
}