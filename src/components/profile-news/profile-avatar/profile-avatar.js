import React from "react";
import styles from './profile-avatar.module.css'
import ProfileAvatarImg from "./img/avatar.png";

function ProfileAvatar () {
    return (
        <div className={styles.profileAvatar}>
            <img src={ProfileAvatarImg} className={styles.profileAvatarImg} alt="profile avatar"></img>
            <div className={styles.profileAvatarInfo}>
                <h1 className={styles.profileAvatarInfo__title}>Дилором Алиева</h1>
                <div className={styles.ProfileAvatarInfo__container}>
                    <div className={styles.ProfileAvatarInfo__datas}>
                        <span className={styles.profileAvatarInfo__text}>Карьера:</span>
                        <span className={styles.profileAvatarInfo__text}>Дата рождения:</span>
                        <span className={styles.profileAvatarInfo__text}>Место рождения:</span>
                    </div>
                    <div className={styles.ProfileAvatarInfo__keys}>
                        <span className={styles.profileAvatarInfo__text}>Писатель</span>
                        <span className={styles.profileAvatarInfo__text}>2 ноября, 1974  ( 46 лет)</span>
                        <span className={styles.profileAvatarInfo__text}>Черняховск, СССР (Россия)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileAvatar;