import React, {useState} from "react";
import styles from "./create-post.module.css"
import ProfileNewsHeader from "../profile-news/profile-news-header/profile-news-header";
import {db} from "../../firebase-config";
import { collection, addDoc } from '@firebase/firestore';

function CreatePost () {
    const postsCollectionRef = collection(db, "posts");
    const [newTitle, setNewTitle] = useState("");
    const [newDescr, setNewDescr] = useState("");
    const defaultImg = "https://firebasestorage.googleapis.com/v0/b/udevs-blog-86150.appspot.com/o/Rectangle%203147.jpg?alt=media&token=7fa74ca1-653d-4fe3-983f-4e091e1b3ae4"

    const createPoster = async () => {
        await addDoc(postsCollectionRef, {title: newTitle, descr: newDescr, img: defaultImg})
    }
    return (
        <div>
            <ProfileNewsHeader></ProfileNewsHeader>
            <div className={styles.createPostContainer}>
                <h1 className={styles.createPostHeading}>Настройки публикации</h1>
                <span className={styles.createPostTitle}>Название</span>
                <input 
                className={styles.createPostInputTitle} 
                placeholder="Write Title" 
                onChange={(event) => setNewTitle(event.target.value)}
                />
                <span className={styles.createPostDescr}>Описание</span>
                <textarea 
                className={styles.createPostInputDescr} 
                placeholder="Write Description"
                onChange={(event) => setNewDescr(event.target.value)}
                ></textarea>
                <button className={styles.createPostBtn} onClick={createPoster}>
                    Создать
                </button>
            </div>
        </div>
    );
}

export default CreatePost;