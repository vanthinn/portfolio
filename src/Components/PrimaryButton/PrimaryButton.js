import React from 'react'
import styles from './PrimaryButton.module.scss'

function PrimaryButton({ title }) {
    return (
        <div className={styles.PrimaryButtonStyled}>
            {title}
        </div>
    )
}
export default PrimaryButton;