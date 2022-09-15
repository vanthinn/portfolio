import React from 'react'
import clsx from 'clsx'
import styles from './Navagation.module.scss'
import { NavLink } from 'react-router-dom'
import avatar from '../../Image/avatar.jpg';

function Navagation() {
    return (
        <nav className={clsx(styles.NavagationStyle)}>
            <div className={clsx(styles.froflie)} >
                <img src={avatar} alt="avatar" />
            </div>
            <ul className={clsx(styles.listNavItem)}>
                <li className="nav-item" >
                    <NavLink to="/" className={({ isActive }) => (isActive ? clsx(styles.btnActive) : '')} exact>Home</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/About" className={({ isActive }) => (isActive ? clsx(styles.btnActive) : '')} exact>About</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/Resume" className={({ isActive }) => (isActive ? clsx(styles.btnActive) : '')} exact>Resume</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/Project" className={({ isActive }) => (isActive ? clsx(styles.btnActive) : '')} exact>Project</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Contact" className={({ isActive }) => (isActive ? clsx(styles.btnActive) : '')} exact>Contact</NavLink>
                </li>
            </ul>
            <footer>
                <p>@2022 My Portfolio Website</p>
            </footer>
        </nav>
    )
}

export default Navagation;