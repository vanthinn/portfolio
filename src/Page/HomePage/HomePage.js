import React from "react";
import styles from "./HomePage.module.scss"
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube';
import Type from './Type.js'



function HomePage() {

    return (
        <div className={styles.HomePageStyle} >
            <div className={styles.info}>
                <h1>Hi I'm <span>Van Thinh</span></h1>
                <div className={styles.animation}>
                    <Type />
                </div>
                <p>
                    I fell in love with programming and I have at least learnt something, I think…
                    My field of Interest's are building new Web Technologies and Products
                    Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React and Redux
                </p>
            </div>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/profile.php?id=100016087997963" className="icon i-facebook">
                    <FacebookIcon />
                </a>
                <a href="https://github.com/vanthinn" className={styles.iconGithub}>
                    <GithubIcon />
                </a>
                <a href="https://www.youtube.com/" className={styles.iconYoutube}>
                    <YouTubeIcon />
                </a>
            </div>
        </div>

    )
}


export default HomePage;