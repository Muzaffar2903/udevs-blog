import React from 'react';
import './post-aside.css'
import PostAsideItem from "./post-aside-item";

const PostAside = () => {
    return (
        <div className="post-aside">
            <h1 className="post-aside__title">ЛУЧШИЕ БЛОГИ</h1>
            <PostAsideItem></PostAsideItem>
            <PostAsideItem></PostAsideItem>
            <PostAsideItem></PostAsideItem>
            <PostAsideItem></PostAsideItem>
        </div>
    );
};

export default PostAside;