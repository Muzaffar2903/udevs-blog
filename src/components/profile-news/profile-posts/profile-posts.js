import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../firebase-config"
import ProfilePostsItem from "./profile-posts-item";
import styles from "./profile-posts.module.css";

function ProfilePosts () {
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPosts()
    }, [postsCollectionRef])
    return (
        <div>
            <h1 className={styles.profilePostsTitle}>ПУБЛИКАЦИИ</h1>
            {posts.map((post) => (
                <ProfilePostsItem key={post.id} title={post.title} descr={post.descr} id={post.id}></ProfilePostsItem>
            ))}
        </div>
    );
}

export default ProfilePosts;