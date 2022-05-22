
import React, { useEffect, useState } from 'react'
import ProjectSwiper from '../components/project/ProjectSwiper';
import LoadingSpinner from '../components/spinner/Spinner';

const Portfolio = () => {

  const [loadingSpinner, SetLoadingSpinner] = useState(true);

  useEffect(()=>{
    // console.log('컴포넌트 나타남');
    // SetLoadingSpinner(false)

    setTimeout(()=>{
      SetLoadingSpinner(false)
    },800)
  },[])
 

  return (
    <div className='portfolio-conatainer'>
      {
        loadingSpinner === true ? <LoadingSpinner/> : <ProjectSwiper/>
      }
    </div>
  )
}

export default Portfolio