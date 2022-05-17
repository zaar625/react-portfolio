import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoLee from '../../assets/images/Lee.svg'
import logoPortfolio from '../../assets/images/portfolio.svg'
import sidebarNav from '../../configs/sidebarNav'
import './sidebar.scss'

// 해당 컴포넌트 활성화시 nav UI 활성화
const SidebarItem = props =>{
  const active = props.active ? 'active' : ''

  return (
    <li className={`${active}`} key={props.index}>
      <Link to = {props.link} key ={`nav-${props.index}`}>
        {props.icon}
        <div>{props.text}</div>
      </Link>
    </li>
  )
}


const Sidebar = () => {

  const location = useLocation();
  const activeItem = sidebarNav.findIndex(item => item.link === location.pathname)

  return (
    <div className='slidebar'>
      <div className='top'>
        <div className='logo'>
          <img className="logo__lee" src={logoLee} alt="" />
          <img src={logoPortfolio} alt="" />
        </div>
        <div className='links'>
            <ul>
            {
              sidebarNav.map((nav, index) => (
               <SidebarItem
                  index={index}
                  link={nav.link}
                  icon={nav.icon}
                  text={nav.text}
                  active={index === activeItem}
                  key={index}
               />
              ))
            }
              
            </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar