import React from 'react'
import styles from './ContactItem.module.scss'
import Title from '../Title/Title.js'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactItem() {
    return (
        <div className={styles.ContactItemStyle}>
            <Title title={'Contact'} span={'Contact'} />
            <div className={styles.connect}>
                <h4> Feel free to <span className="connect-title">connect</span> with media</h4>

                <div className={styles.connectContent}>
                    <div className={styles.connectPhoneNumber}>

                        <a><LocalPhoneIcon /></a>
                        <p>+84 923 836 659</p>
                    </div>
                    <div className={styles.connectEmail}>
                        <a><EmailIcon /></a>
                        <p>thinh2092002@gmail.com</p>
                    </div>
                    <div className={styles.connectLocate}>
                        <a><LocationOnIcon /></a>
                        <p>51 Hung Vuong, Da Nang, Viet Nam</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactItem