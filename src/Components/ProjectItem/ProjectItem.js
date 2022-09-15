import React,{useState,useRef}from 'react'
import styles from './ProjectItem.module.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';




function ProjectItem({ src, name, technologies, features, preview, source }) {

    let index = useRef(0)
    const [img, SetImage] = useState(src[index.current])
    
    const handleClickNext = () => {
        index.current >= src.length - 1 ? index.current = 0 : index.current++;
        SetImage(src[index.current])            
    }

    const handleClickPrev = () => {
        index.current <= 0 ? index.current = 3 : index.current--;
        SetImage(src[index.current])    
    }

    return (
        <div className={styles.ProjectItemStyle}>
            <div className={styles.LeftItem}>
                <img src={img} alt="MU"/>
                <div className={styles.nextPage} onClick={handleClickNext}>
                    <ArrowRightIcon   />
                </div>
                <div className={styles.prePage} onClick={handleClickPrev}>
                    <ArrowLeftIcon  />
                </div>
            </div>
            <div className={styles.RightItem}>
                <div className={styles.MainTitle}>Description</div>
                <div className={styles.MainContent} >
                    <div className={styles.ContentItem}>
                        <p  className={styles.LeftContent}>Name</p>
                        <p className={styles.RightContent}>: {name}</p>                  
                    </div>
                    <div className={styles.ContentItem}>
                        <p  className={styles.LeftContent}>Technologies</p>
                        <p className={styles.RightContent}>: {technologies}</p>                  
                    </div>
                    <div className={styles.ContentItem}>
                        <p  className={styles.LeftContent}>Features</p>
                        <p className={styles.RightContent}>: {features}</p>                  
                    </div>
                    <div className={styles.ContentItem}>
                        <p  className={styles.LeftContent}>Project preview</p>
                        <a href={preview} className={styles.RightContent}>: {preview}</a>                   
                    </div>
                    <div className={styles.ContentItem}>
                        <p  className={styles.LeftContent}>Project source</p>
                        <a href={source} className={styles.RightContent}>: {source}</a>                   
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectItem