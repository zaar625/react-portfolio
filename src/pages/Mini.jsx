import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProjectOne from '../components/mini-project/music/App'
import Game from '../components/mini-project/game/Game'
import Caculate from '../components/mini-project/calculate/components/Caculate'

const Mini = () => {
  return (
    <div className='mini'>
      <Navbar/>
      <div className='mini__container'>
        <ProjectOne/>
        <Caculate/>
        <Game/>
      </div>
    </div>
  )
}

export default Mini
