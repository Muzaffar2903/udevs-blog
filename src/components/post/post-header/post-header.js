import React from 'react';
import './post-header.css';
import Logo from '../../header/img/udevs-logo.svg'
import {Link} from "react-router-dom";
import AuthPanel from '../../../login';

const PostHeader = () => {
    return (
        <div className="post-header">
           <Link to="/">
               <img src={Logo} className="post-header-logo" alt="Udevs logo"/>
           </Link>
            <nav className="post-nav">
                <ul className="post-nav-list">
                    <li className="post-nav-item"><a className="post-nav-link" href="##">Все потоки</a></li>
                    <li className="post-nav-item"><a className="post-nav-link" href="##">Разработка</a></li>
                    <li className="post-nav-item"><a className="post-nav-link" href="##">Администрирование</a></li>
                    <li className="post-nav-item"><a className="post-nav-link" href="##">Дизайн</a></li>
                    <li className="post-nav-item"><a className="post-nav-link" href="##">Менеджмент</a></li>
                    <li className="post-nav-item"><a className="post-nav-link" href="##">Маркетинг</a></li>
                </ul>
            </nav>
            <AuthPanel></AuthPanel>
        </div>
    );
};

export default PostHeader;