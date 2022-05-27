import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProjectOne from '../components/mini-project/music/App'
import Caculator from '../components/mini-project/calculate/App'
import Game from '../components/mini-project/game/Game'

const Mini = () => {
  return (
    <div className='mini'>
      <Navbar/>
      <div className='mini__container'>
        <ProjectOne/>
        {/* <Caculator/> */}
        {/* <Game/> */}
      </div>
    </div>
  )
}

export default Mini
