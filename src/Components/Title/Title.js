import React from 'react'
import styles from './Title.module.scss'

function Title({ title, span }) {
    return (
        <div className={styles.TitleStyled}>
            <h2>{title} <b><span>{span}</span></b></h2>
        </div>
    )
}

export default Title;