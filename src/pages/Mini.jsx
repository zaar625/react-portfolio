import React,{useEffect}from 'react'
import scrollreveal from 'scrollreveal'
import Navbar from '../components/navbar/Navbar'
import ProjectOne from '../components/mini-project/music/App'
import Game from '../components/mini-project/game/Game'
import Caculate from '../components/mini-project/calculate/components/Caculate'
import Weather from '../components/mini-project/weather/Weather'


const Mini = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .scrollreveal01,
        .scrollreveal02,
        .scrollreveal03,
        .scrollreveal04
      `,
      {
        opacity: 0,
        interval: 400,
      }
    );
  }, []);

  return (
    <div className='mini'>
      <Navbar item={['방가방가', '행복한', '열정있는']}/>
      <div className='mini__container'>
        <ProjectOne/>
        <Caculate/>
        <Weather/>
        <Game/>
      </div>
    </div>
  )
}

export default Mini
