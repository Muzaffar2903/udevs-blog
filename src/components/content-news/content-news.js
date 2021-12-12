import React, {useState, useEffect,} from 'react';
import './content-news.css'
import ContentNewsItem from "../content-news-item/content-news-item";
import {db} from "./../../firebase-config";
import { collection, getDocs } from '@firebase/firestore'

export default function ContentNews() {
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
        <section className='content-news'>
            {posts.map((post, id) => (
                <ContentNewsItem key={post.id} title={post.title} id={post.id} img={post.img} />
            ))}

        </section>
    );
}