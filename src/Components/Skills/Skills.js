import React from 'react'
import styles from './Skills.module.scss'

function Skills({ title, width, text }) {
    return (
        <div className={styles.SkillStyle}>
            <div className={styles.SkillsContent}>
                <h5>{title}</h5>
                <div className={styles.progressBar}>
                    <p>{text}</p>
                    <div className={styles.progress}>
                        <span style={{ width: width }}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;