import React from 'react'
import PropTypes from 'prop-types'
import s from './SectionTitle.module.css'

export default function SectionTitle ({title, children}) {
    return (
        <div>
            <h3 className={s.title}>{title}</h3>
            {children}
        </div>
    )
}
SectionTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}