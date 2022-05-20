import React ,{useState}from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoLee from '../../assets/images/Lee.svg'
import logoPortfolio from '../../assets/images/portfolio.svg'
import sidebarNav from '../../configs/sidebarNav'
import { NavbarUser } from '../navbar/Navbar'
import './sidebar.scss'


const Sidebar = () => {

  const location = useLocation();
  const activeItem = sidebarNav.findIndex(item => item.link === location.pathname)

  const [navbarState, setNavbarState] = useState(false);
  const NavActive = navbarState;
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  return (
    <>
      <div className='slidebar col-2 col-md-12'>
        <div className='top'>
          <div className='logo'>
            <img className="logo__lee" src={logoLee} alt="" />
            <img className="logo__svg" src={logoPortfolio} alt="logo"/>
          </div>
          <div className='toggle'>
            {
              navbarState ? (<i className='bx bx-menu' onClick={() => setNavbarState(false)}></i>) : <i className='bx bx-x' onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}></i>
            }
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
      <ResponsiveNav
        NavActive ={NavActive}
      >
        <NavbarUser/>
      </ResponsiveNav>
    </>
  )
}

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

// 빈응형 사이드바(toggle)
export const ResponsiveNav = (props) =>{

  const location = useLocation();
  const activeItem = sidebarNav.findIndex(item => item.link === location.pathname)

  return(
    <div className={`responsive__nav col-sm-7  ${props.NavActive ? '' : 'navActive'}`}>
      {props.children}
      <div className='responsive__nav__links'>
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
    
  )
}

export default Sidebar