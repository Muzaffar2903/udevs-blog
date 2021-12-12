import React from 'react';
import PostHeader from "../components/post/post-header/post-header";
import PostContent from "../components/post/post-content/post-content";
import Footer from "../components/footer/footer";

const Post = () => {
    return (
        <>
            <PostHeader></PostHeader>
            <PostContent></PostContent>
            <Footer></Footer>
        </>
    );
};

export default Post;