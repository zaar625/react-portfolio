import React from 'react'
import {AiOutlineFastBackward,AiOutlineFastForward,AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'

const PlayerControls = (props) => {
  return (
    <div className='c-player--controls'>
        <button className='skip-btn' onClick={()=>props.SkipSong(false)}>
            <AiOutlineFastBackward/>
        </button>
        <button className='play-btn' onClick={()=>props.setIsPlaying(!props.isPlaying)}>
        {
            props.isPlaying ? (<AiOutlinePauseCircle/>) : (  <AiOutlinePlayCircle/>)
        }
        </button>
        <button className='skip-btn'onClick={()=>props.SkipSong(true)}>
            <AiOutlineFastForward/>
        </button>
    </div>
  )
}

export default PlayerControls
