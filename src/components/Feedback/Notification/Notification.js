import React from 'react'
import PropTypes from 'prop-types'
import s from './Notification.module.css'

export default function Statistics({message}) {
    return (
        <div>
            <p className={s.p}>{message}</p>
        </div>
    )
}
Statistics.propTypes = {
    message: PropTypes.string
}