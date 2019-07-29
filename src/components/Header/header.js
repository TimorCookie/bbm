import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
function Menu(props) {
    return(
        <ul className="menus-list">
            {props.tablist.map((el,index)=><li key={index} className="menu-item">
            <Link to={el.link}>
                {el.name}
            </Link>
            </li>)}
        </ul>
    )
}
export default function Header() {
    
    const tablist = [
        {
            name: '首页',
            link: '/home'
        },
        {
            name: '关于我们',
            link: '/about'
        },
        {
            name: '菜单三',
            link: '/about'
        },
        {
            name: '菜单四',
            link: '/about'
        }
    ]
    return(
        <div className="header-component">
            <Menu tablist={tablist}/>
        </div>
    )
}