import React from 'react'
import PropTypes from 'prop-types'

export default function Statistics({message}) {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
}
Statistics.propTypes = {
    message: PropTypes.string
}