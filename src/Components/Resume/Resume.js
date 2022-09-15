import React from 'react'
import styles from './Resume.module.scss'
import Title from '../Title/Title.js'
import { InnerLayout } from '../../styles/Layout/Layout';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ResumeItem from '../ResumeItem/ResumeItem.js';

function Resume() {
    return (
        <div className={styles.ResumeStyle}>
            <InnerLayout>
                <Title title={'Resume'} span={'Resume'} />
                <div className={styles.experience} >
                    <div className={styles.experienceTitle}>
                        <a > <BusinessCenterIcon /> </a>
                        <p>Working Experience</p>
                    </div>
                    <div className={styles.listItem}>
                        <ResumeItem
                            year={'2018-2020'}
                            title={'Computer Science Teacher'}
                            subtitle={'Van Thinh University'}
                            message={'To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.'}
                        />
                        <ResumeItem
                            year={'2018-2020'}
                            title={'Computer Science Teacher'}
                            subtitle={'Van Thinh University'}
                            message={'To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.'}
                        />
                        <ResumeItem
                            year={'2018-2020'}
                            title={'Computer Science Teacher'}
                            subtitle={'Van Thinh University'}
                            message={'To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.'}
                        />
                    </div>

                    <div className={styles.experienceTitle}>
                        <a > <SchoolIcon /> </a>
                        <p>Educational Qualifications</p>
                    </div>
                    <div className={styles.listItem}>
                        <ResumeItem
                            year={'2018-2020'}
                            title={'Computer Science Teacher'}
                            subtitle={'Van Thinh University'}
                            message={'To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.'}
                        />
                        <ResumeItem
                            year={'2018-2020'}
                            title={'Computer Science Teacher'}
                            subtitle={'Van Thinh University'}
                            message={'To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.'}
                        />
                        <ResumeItem
                            year={'2018-2020'}
                            title={'Computer Science Teacher'}
                            subtitle={'Van Thinh University'}
                            message={'To set expectations, this is not a roadmap with clear timelines. Many of these projects are under active research and are difficult to put concrete ship dates on. They may possibly never even ship in their current iteration depending on what we learn. Instead, we want to share with you the problem spaces we’re actively thinking about, and what we’ve learned so far.'}
                        />
                    </div>


                </div>
            </InnerLayout>

        </div>
    )
}

export default Resume