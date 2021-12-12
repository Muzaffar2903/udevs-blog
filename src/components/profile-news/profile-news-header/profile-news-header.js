import React from "react";
import Logo from '../../header/img/udevs-logo.svg';
import {Link} from "react-router-dom";
import styles from './profile-header.module.css';
import AuthPanel from "../../../login";

const ProfileNewsHeader = () => {
    return (
        <div className={styles.profileHeader}>
           <Link to="/">
               <img src={Logo} className="profile-header-logo" alt="Udevs logo"/>
           </Link>
            <nav className={styles.profileNav}>
                <ul className={styles.profileNavList}>
                    <li className={styles.profileNavItem}><a className={styles.profileNavLink} href="##">Все потоки</a></li>
                    <li className={styles.profileNavItem}><a className={styles.profileNavLink} href="##">Разработка</a></li>
                    <li className={styles.profileNavItem}><a className={styles.profileNavLink} href="##">Администрирование</a></li>
                    <li className={styles.profileNavItem}><a className={styles.profileNavLink} href="##">Дизайн</a></li>
                    <li className={styles.profileNavItem}><a className={styles.profileNavLink} href="##">Менеджмент</a></li>
                    <li className={styles.profileNavItem}><a className={styles.profileNavLink} href="##">Маркетинг</a></li>
                </ul>
            </nav>
            <AuthPanel></AuthPanel>
        </div>
    );
};

export default ProfileNewsHeader;