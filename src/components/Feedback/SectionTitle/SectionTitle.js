import React from 'react'
import PropTypes from 'prop-types'

export default function SectionTitle ({title, children}) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    )
}
SectionTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}