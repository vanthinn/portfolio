import React from 'react'
import clsx from 'clsx';
import styles from './Sidebar.module.scss'
import Navagation from '../Navagation/Navagation.js';


function Sidebar({ name, animation }) {
    console.log(animation)
    return (
        <div
            className={clsx(styles.SdiebarStyled, name)}
            style={{  animation: animation }}>
            <Navagation />
        </div >
    )
}


export default Sidebar;