import React from 'react'
import styles from './ResumeItem.module.scss'

function ResumeItem({ year, title, subtitle, message }) {
    return (
        <div className={styles.ResumeItemStyle}>
            <div className={styles.leftContent}>
                <h4> {year} </h4>
            </div>
            <div className={styles.rightContent}>
                <h5> {title} </h5>
                <h6> {subtitle} </h6>
                <p> {message} </p>
            </div>
        </div>
    )
}

export default ResumeItem;