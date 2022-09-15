import React from 'react'
import styles from './ServiceCard.module.scss'

function ServiceCard({ image, title, paragraph }) {
    return (
        <div className={styles.ServiceCardStyled} >
            <div className={styles.container}>
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </div >
    )
}


export default ServiceCard;