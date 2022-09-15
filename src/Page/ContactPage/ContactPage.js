import React from 'react'
import styles from './ContactPage.module.scss'
import { MainLayout } from '../../styles/Layout/Layout.js'
import ContactItem from '../../Components/ContactItem/ContactItem.js'

function ContactPage() {
    return (
        <div className={styles.ContactStyle}>
            <MainLayout>
                <ContactItem />
            </MainLayout>

        </div>
    )
}

export default ContactPage