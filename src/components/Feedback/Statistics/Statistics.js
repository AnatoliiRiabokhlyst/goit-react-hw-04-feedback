import React from 'react'
import PropTypes from 'prop-types'
export default function Statistics({onGood, onNeutral, onBad}) {
    return (
        <div>
            {onGood > 0 && <p>Good: {onGood}</p>}
            {onNeutral > 0 && <p>Neutral: {onNeutral}</p>}
            {onBad > 0 && <p>Bad: {onBad}</p>}
            {onGood + onNeutral + onBad > 0 && <p>Total: {onGood + onNeutral + onBad}</p>}
            {(onGood + onNeutral + onBad > 0) && <p>Positive feedback: {((onGood / (onGood + onNeutral + onBad)) * 100).toFixed(0)} %</p>}
        </div>
    )
}
Statistics.propTypes = {
    onGood: PropTypes.number,
    onNeutral: PropTypes.number,
    onBad: PropTypes.number
}