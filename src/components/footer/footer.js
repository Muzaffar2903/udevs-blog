import React from 'react';
import './footer.css'
import footerLogo from '../header/img/udevs-logo.svg'

export default function Footer() {
    return (
        <footer>
            <div className='company'>
                <a href="##">
                    <img src={footerLogo} className='footer-logo' alt="Udevs logo"/>
                </a>
                <div className='company__about'>
                    Помощник в публикации статей, журналов.
                    Список популярных международных конференций.
                    Всё для студентов и преподавателей.
                </div>
                <span className='company__copyright'>Copyright © 2020. LogoIpsum. All rights reserved.</span>
            </div>
            <div className='resources'>
                <h3 className='resources__title'>Ресурсы</h3>
                <ul className='resources__list'>
                    <li className='resources__item'><a href="##" className='resources__link'>Статьи</a></li>
                    <li className='resources__item'><a href="##" className='resources__link'>Журналы</a></li>
                    <li className='resources__item'><a href="##" className='resources__link'>Газеты</a></li>
                    <li className='resources__item'><a href="##" className='resources__link'>Диплом</a></li>
                </ul>
            </div>
            <div className='about-us'>
                <h3 className='about-us__title'>О нас</h3>
                <ul className='about-us__list'>
                    <li className='about-us__item'><a href="##" className='about-us__link'>Контакты</a></li>
                    <li className='about-us__item'><a href="##" className='about-us__link'>Помощь</a></li>
                    <li className='about-us__item'><a href="##" className='about-us__link'>Заявки</a></li>
                    <li className='about-us__item'><a href="##" className='about-us__link'>Политика</a></li>
                </ul>
            </div>
            <div className='help'>
                <h1 className='help__title'>Помощь</h1>
                <span className='help__text'>Часто задаваемые <br/>вопросы</span>
            </div>
        </footer>
    );
}