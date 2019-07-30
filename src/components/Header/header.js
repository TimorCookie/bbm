import React, {useState,useEffect}from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
function Menu(props) {
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
            name: '新闻动态',
            link: '/about'
        },
        {
            name: '专家师资',
            link: '/about'
        },
        {
            name: '课程风采',
            link: '/about'
        },
        {
            name: '精彩活动',
            link: '/about'
        }
    ]
    
    useEffect(()=>{
        
    },[])
    return(
        <ul className="menus-list">
            {tablist.map((el,index)=><li key={index} className={props.activeTab===el.name?'menu-item-active':'menu-item'}>
            <NavLink to={el.link} onClick={()=>props.chooseTab(el.name)}>
                {el.name}
            </NavLink>
            </li>)}
        </ul>
    )
}
export default function Header() {
    const [activeTab, setActiveTab] = useState('首页')
    function chooseTab(value) {
        setActiveTab(value)
    }
    return(
        <div className="header-component">
            <div className="header-logo"></div>
            <Menu activeTab={activeTab} chooseTab={chooseTab}/>
        </div>
    )
}