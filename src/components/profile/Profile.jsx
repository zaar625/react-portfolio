import React from 'react'
import { Link } from 'react-router-dom'
import './profile.scss'
import profileImage from '../../assets/images/me.jpg'

const Profile = () => {
  return (
    <div className='profile col-4 col-sm-12 cardstyle'>
      <div className='profile__info'>
        <div className='profile__info__image'>
          <img src={profileImage} alt="profile"/>
        </div>
        <div className='profile__info__des'>
          <h3 className='title'>Lee sang yoon</h3>
          <div className='profile__info__des__link'>
            <Link to='/'><i className='bx bxl-github' ></i></Link>
            <Link to='/'><i className='bx bx-book-content'></i></Link>
          </div>
        </div>
      </div>
      <div className='profile__character'>
        <span>#positive</span>
        <span>#positive</span>
        <span>#positive</span>
      </div>
    </div>
  )
}

export default Profile