import React from 'react';
import './navbar.css'

export default function Navbar() {
    return (
        <ul className='nav-list'>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link is-active'>Все потоки</a></li>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link'>Разработка</a></li>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link'>Администрирование</a></li>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link'>Дизайн</a></li>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link'>Менеджмент</a></li>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link'>Маркетинг</a></li>
            <li className='nav-list__item'><a href="##" className='nav-list__item--link'>Научпоп</a></li>
        </ul>
    );
}