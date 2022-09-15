import React from 'react'
import styles from './ReviewItem.module.scss'

function ReviewItem({ text }) {
    return (
        <div className={styles.RevivewItemStyled}>
            <p>{text}</p>
        </div>
    )
}


export default ReviewItem;