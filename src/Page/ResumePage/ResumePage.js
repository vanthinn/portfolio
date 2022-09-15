import React from 'react'
import styles from './ResumePage.module.scss'
import Skills from '../../Components/Skills/Skills.js'
import { MainLayout } from '../../styles/Layout/Layout.js'
import Title from '../../Components/Title/Title.js'
import DataSkills from '../../Data/Skill'
import Resume from '../../Components/Resume/Resume.js'

function ResumePage() {
    return (
        <div className={styles.ResumeStyle}>
            <MainLayout>
                <Title title={'My Skills'} span={'My Skills'} />
                <div className={styles.SkillList}>
                    {DataSkills.map((data) => (
                        <Skills key={data.id} title={data.name} width={data.level} text={data.text} />
                    ))}
                </div>
                <Resume />
            </MainLayout>
        </div>
    )
}

export default ResumePage