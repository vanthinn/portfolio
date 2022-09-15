import React from "react";
import { MainLayout } from "../../styles/Layout/Layout"
import styles from "./AboutPage.module.scss"
import Title from "../../Components/Title/Title.js"
import ImageSection from "../../Components/ImageSection/ImageSection";
import ServiceSection from "../../Components/ServiceSection/ServiceSection.js"
import ReviewSection from "../../Components/ReviewSection/ReviewSection.js"

function AboutPage() {
    return (

        <MainLayout>
            <div className={styles.AboutStyled}>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServiceSection />
                <ReviewSection />
            </div>
        </MainLayout>

    )
}

export default AboutPage;