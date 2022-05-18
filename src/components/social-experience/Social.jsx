import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Pagination, Autoplay  } from 'swiper'
import {experience} from '../../assets/index'
import { work_description } from '../../configs/sidebarNav'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/thumbs'
import './social.scss'

export const Description = (props) => {
  let work = work_description[props.index];

  return (
      props.index !== undefined ? 
      (<div className='des'>
        <div className='des__header'>
          <div className='des__header__title'>
            <h2>{work.title}</h2>
            <span>{work.date}</span>
          </div>
          <div className='des__header__depart'>{work.department}</div>
        </div>
        <div className='des__contents'>
          <div className='des__contents__key'>
            <h4>Key Work</h4>
            <div>
              {
                work.keywork.map((keywork, index)=>(
                  <span>{keywork}</span>
                ))
              }
            </div>
          </div>
          <div className='des__contents__detail'>
            <h4>Work Detail</h4>
            <ul>
            {
              work.workdetail.map((detail, index)=>(
                <li>{detail}</li>
              ))

            }
            </ul>
          </div>
        </div>
      </div>
      )
    : ''
  )
}


const Social = () => {
  const [index, setIndex] = useState();
  console.log(index)

  return (
    <div className='social col-7 cardstyle'>
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
      <span>View more <i class='bx bx-right-arrow-alt'></i></span>
    </div>
  )
}

export default Social