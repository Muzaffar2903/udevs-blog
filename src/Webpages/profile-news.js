import React from "react";
import Footer from "../components/footer/footer";
import ProfileAvatar from "../components/profile-news/profile-avatar/profile-avatar";
import ProfileNewsHeader from "../components/profile-news/profile-news-header/profile-news-header";
import ProfilePosts from "../components/profile-news/profile-posts/profile-posts";

function ProfileNews () {
    return (
        <div>
            <ProfileNewsHeader></ProfileNewsHeader>
            <ProfileAvatar></ProfileAvatar>
            <ProfilePosts></ProfilePosts>
            <Footer></Footer>
        </div>
    );
}

export default ProfileNews;