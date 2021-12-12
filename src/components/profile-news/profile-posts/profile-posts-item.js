import React from "react";
import styles from "./profile-posts.module.css";
import PostImg from "./img/post-img.png";
import Eye from "./img/eye.png";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../firebase-config"

function ProfilePostsItem ({id, title, descr}) {
    return (
        <div>
            <div className={styles.profilePostsContainer}>
                <img src={PostImg} className={styles.profilePostImg} alt="Profile Post img"></img>
                <div className={styles.profilePostContent}>
                    <h1 className={styles.profilePostTitle}>{title}</h1>

                    <div className={styles.profilePostDates}>
                        <span className={styles.profilePostTime}>09:00 12.01.2021</span><span className={styles.profilePostDash}> | </span>
                        <img className={styles.profilePostEye} src={Eye} alt="Eye"></img>
                        <span className={styles.profilePostDays}>523</span>
                        <span className={styles.profilePostPeopleRule}>Права человека</span>
                    </div>
                    <div className={styles.profilePostDescr}>
                        {descr}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilePostsItem;