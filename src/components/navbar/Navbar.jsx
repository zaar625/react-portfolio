import React from 'react'
import './navbar.scss'
var ReactRotatingText = require('react-rotating-text');

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__title">
        <h1>안녕하세요.</h1>
        <div className='navbar__title__sub'>
          <ReactRotatingText 
          typingInterval={80}
          items={['즐기는', '행복한', '열정있는']}/>
          <span>프론트앤드 개발자 이상윤입니다.</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar