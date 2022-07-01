import React from 'react'
import PropTypes from 'prop-types'
import s from './Statistics.module.css'
export default function Statistics({onGood, onNeutral, onBad}) {
    return (
        <div className={s.section}>
            {onGood > 0 && <p className={s.p}>Good: {onGood}</p>}
            {onNeutral > 0 && <p className={s.p}>Neutral: {onNeutral}</p>}
            {onBad > 0 && <p className={s.p}>Bad: {onBad}</p>}
            {onGood + onNeutral + onBad > 0 && <p className={s.p}>Total: {onGood + onNeutral + onBad}</p>}
            {(onGood + onNeutral + onBad > 0) && <p className={s.p}>Positive feedback: {((onGood / (onGood + onNeutral + onBad)) * 100).toFixed(0)} %</p>}
        </div>
    )
}
Statistics.propTypes = {
    onGood: PropTypes.number,
    onNeutral: PropTypes.number,
    onBad: PropTypes.number
}