import React from 'react'
import Profile from '../components/profile/Profile'
import Intro from '../components/intro/Intro'
import Skill from '../components/skill/Skill'
import Social from '../components/social-experience/Social'


const Aboutme = () => {
  return (
    // 라우터구간
    <div className='about__me'>
      <div className='grid'>
          <div className='row__one'>
            <Profile/>
            <Intro/>
          </div>
          <div className='row__two col-md-12'>
            <Skill/>
            <Social/>
          </div>
        </div>
    </div>
  )
}

export default Aboutme