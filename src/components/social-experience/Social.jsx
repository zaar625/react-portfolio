import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, Autoplay  } from 'swiper'
import {experience} from '../../assets'
import { work_description } from '../../configs/sidebarNav'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/thumbs'
import './social.scss'

export const Description = (props) => {
  console.log(props.index)
  // console.log(work_description[props.index].title)
  return(
    <div className='social__des'>
    {
      props.index !== undefined ? work_description[props.index].title : ''
    }
    </div>
    )
}


const Social = () => {
  const [index, setIndex] = useState();
  console.log(index)

  return (
    <div className='social cardstyle'>
      <div className="title">Social Experience</div>
      <div className='social-container'>
        <div className='social__img'>
          <Swiper
            modules={[Navigation, Thumbs, Pagination,Autoplay ]}
            loop={true}
            autoplay={true} 
            pagination={{ clickable: true }}
            spaceBetween={10}
            navigation={false}
            grabCursor={true}
            onSlideChange={(index)=>setIndex(index.realIndex)}
          >
            {
              experience.map((item, index)=> {
                return (
                  <SwiperSlide key={index}>
                      <img src={item} alt="experience images" />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <Description
          index={index}
        />
      </div>
    </div>
  )
}

export default Social