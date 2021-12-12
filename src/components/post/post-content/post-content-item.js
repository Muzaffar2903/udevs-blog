import React from "react";

const BlogContentItem = ({ id, post }) => {
    return (
        <div>
            <h1 key={id} className="main-post-text__title">{post.title}</h1>
            <p key={id} className="main-post-text__body">{post.descr}</p>
        </div>
    );
}
export default BlogContentItem