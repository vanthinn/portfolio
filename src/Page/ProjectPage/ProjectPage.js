import React from 'react'
import styles from './ProjectPage.module.scss'
import Title from '../../Components/Title/Title.js'
import { MainLayout } from '../../styles/Layout/Layout'
import ProjectItem from '../../Components/ProjectItem/ProjectItem'
import ArrayProject from '../../Data/Project.js'

function PortoliosPage() {
    return (
        <div className={styles.ProjectStyle}>
            <MainLayout>
                <Title title={'My Project'} span={'My Project'} />
                <div className={styles.ListProjectItem}>
                    {
                        ArrayProject.map((data)=>(
                            <ProjectItem 
                            key={data.id} 
                            src={data.src} 
                            name={data.Name} 
                            technologies={data.Technologies} 
                            features={data.Features}
                            preview={data.Preview} 
                            source={data.Source}
                            />
                        ))
                    }
                </div>
            </MainLayout>
        </div>
    )
}

export default PortoliosPage