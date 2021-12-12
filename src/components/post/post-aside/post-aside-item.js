import React from 'react';
import './post-aside-item.css'
import PostAsideImg from './img/post-aside.png'
import Eye from "../post-content/img/eye.png";

const PostAsideItem = () => {
    return (
        <div className="post-aside-item">
            <img src={PostAsideImg} className="post-aside-img" alt="Aside img"/>
            <div className="post-aside-item-content">
                <span className="post-aside-item__title">ВОЗ: молодые жители Европы стали меньше курить...</span>
                <div className="main-post-date">
                    <span className="main-post-time">09:00 12.01.2021</span>
                    <img className="main-post-eye" src={Eye} alt="Eye"/>
                    <span className="main-post-views">523</span>
                </div>
            </div>
        </div>
    );
};

export default PostAsideItem;