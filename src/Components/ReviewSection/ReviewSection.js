import React from 'react'
import { InnerLayout } from '../../styles/Layout/Layout';
import Title from '../../Components/Title/Title.js';
import ReviewItem from '../../Components/ReviewItem/ReviewItem.js';
import styles from './ReviewSection.module.scss'

function ReviewsSetion() {
    return (
        <div className={styles.ReviewsStyled}>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className={styles.reviews}>
                    <ReviewItem
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?'}
                    />
                    <ReviewItem
                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas? Dos ir por culpa ad itaque quas!'}
                    />

                </div>
            </InnerLayout>
        </div>
    )
}

export default ReviewsSetion;
