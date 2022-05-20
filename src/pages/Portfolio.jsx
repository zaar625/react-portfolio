
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/spinner/Spinner';

const Portfolio = () => {

  const [loadingSpinner, SetLoadingSpinner] = useState(true);

  useEffect(()=>{
    // console.log('컴포넌트 나타남');
    // SetLoadingSpinner(false)

    setTimeout(()=>{
      SetLoadingSpinner(false)
    },800)

    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  },[])
 
  console.log(loadingSpinner)

  return (
    <div>
      {
        loadingSpinner === true ? <LoadingSpinner/> : 'hello'
      }
    </div>
  )
}

export default Portfolio