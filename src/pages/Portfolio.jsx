
import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import ProjectSwiper from '../components/project/ProjectSwiper';

const Portfolio = () => { 
  return (
    <>
      <Navbar item={['반갑습니다.']}/>
      <div className='portfolio-conatainer col-md-12 cardstyle'>
        <ProjectSwiper/>
      </div>
    </>
  )
}

export default Portfolio