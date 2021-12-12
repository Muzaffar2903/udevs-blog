import React, { useEffect, useState } from 'react';
import PostAside from "../post-aside/post-aside";
import './post-content.css'
import Eye from './img/eye.png'
import HeroImg from './img/hero-img.png'
import PostProfile from "../post-profie/post-profile";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./../../../firebase-config";
import BlogContentItem from './post-content-item';

const PostContent = () => {
    const [posts, setPosts] = useState([])
    const { id } = useParams()
    const postsCollectionRef = collection(db, "posts")

    useEffect(() => {
        const getPosts = async (id) => {
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPosts()
    }, [postsCollectionRef])

    return (
        <div className="post-content">
            <PostProfile />
            <div className="main-post">
                <img src={HeroImg} className="hero-img" alt="Hero img" />
                <span className="main-post-author">Фото: Dilorom Alieva</span>
                <div className="main-post-date">
                    <span className="main-post-time">09:00 12.01.2021</span>
                    <img className="main-post-eye" src={Eye} alt="Eye" />
                    <span className="main-post-views">523</span>
                </div>
                <div className="main-post-text">
                    {posts.map((post) => {
                        return id === post.id && <BlogContentItem key={post.id} post={post} />
                    })}

                </div>
            </div>

            <PostAside />
        </div>
    );
};

export default PostContent;