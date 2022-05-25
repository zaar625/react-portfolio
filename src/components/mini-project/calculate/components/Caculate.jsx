import React,{useRef, useEffect} from 'react'
import {btns, BTN_ACTIONS} from './btnConfig'
import './caculate.scss'

const Caculate = () => {
  return (
    <div className='calculator'>
      <div className='calculator__result'>
        <div className='calculator__result__exp'>9999</div>
        <div className='calculator__result__exp'></div>
      </div>
      <div className='calculator__btns'>
        {
          btns.map((item, index) => (
            <button key={index} className={item.class}>
              {item.display}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Caculate