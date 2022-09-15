import React from 'react';
import styles from './ServiceSection.module.scss'
import { InnerLayout } from '../../styles/Layout/Layout';
import Title from '../../Components/Title/Title.js';
import ServiceCard from '../../Components/ServiceCard/ServiceCard.js';
import design from '../../Image/design.svg';
import intelligence from '../../Image/intelligence.svg';
import gamedev from '../../Image/game-dev.svg';

function ServiceSection() {
    return (
        <InnerLayout>
            <div className={styles.ServicesSectionStyled}>
                <Title title={'Services'} span={'services'} />
                <div className={styles.services}>
                    <ServiceCard
                        image={design}
                        title={'Web Design'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <div >
                        <ServiceCard
                            image={intelligence}
                            title={'Artificial Intelligence'}
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Game Development'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </div>
            </div>
        </InnerLayout>
    )
}


export default ServiceSection;