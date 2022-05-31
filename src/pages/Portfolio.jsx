
import React, { useEffect } from 'react'
import scrollreveal from 'scrollreveal';
import Navbar from '../components/navbar/Navbar';
import ProjectSwiper from '../components/project/ProjectSwiper';

const Portfolio = () => { 
useEffect(()=>{
  const sr = scrollreveal({
    origin: "left",
    distance: "100px",
    duration: 3000,
    reset: false,
  });

  sr.reveal(
    `
      .project-swiper__img,
      .ProjectDescription__content__intro,
      .ProjectDescription__content__skills,
      .ProjectDescription__content__fuc
    `,
    {
      opacity: 0,
      interval: 400,
    }
  );
},[])

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