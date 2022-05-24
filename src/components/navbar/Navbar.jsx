import React from 'react'
import Dropbox from '../dropbox/Dropbox';
import './navbar.scss'
import me from '../../assets/images/me.jpg';
import { useLocation } from 'react-router-dom';

//lib 변수
var ReactRotatingText = require('react-rotating-text');

const Navbar = (props) => {
const location = useLocation();
console.log(location)

  return (
    <div className='navbar col-md-12'>
      <div className="navbar__title">
        <h1>안녕하세요.</h1>
        <div className='navbar__title__sub'>
          <ReactRotatingText 
          typingInterval={80}
          items={props.item}/>
          <span>프론트앤드 개발자 이상윤입니다.</span>
        </div>
      </div>
      <NavbarUser/>
    </div>
  )
}

// user (nav__right)
export const NavbarUser = ()=>{
  return(
    <div className='navbar__user col-2 col-md-12'>
      <div className='navbar__user__top'>
        <div className='navbar__user__top__user-img'>
          <img src={me} alt='me img'/>
        </div>
        <Dropbox/>
      </div>
      <div className='navbar__user__bottom'>
        <p>담당자님, 반갑습니다.</p>
      </div>
    </div>
  )
}

export default Navbar