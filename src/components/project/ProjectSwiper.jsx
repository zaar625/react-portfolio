import React, {useState} from 'react'
import {Swiper ,SwiperSlide} from 'swiper/react'
import { Thumbs,Navigation } from 'swiper'
import { projectImages } from '../../assets'
import { project_description } from '../../configs/sidebarNav'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './project-swiper.scss'
import { Link } from 'react-router-dom'

const ProjectSwiper = () => {
  const [activeThumb, setActiveThumb] = useState()
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <>
      <div className='project-swiper col-7 cardstyle'>
      <div className='project-swiper__left col-10'>
        <Swiper
            loop={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
            onSlideChange={(index)=>setIndex(index.realIndex)}
        >
            {
              projectImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="product images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div>{index + 1}/{projectImages.length}</div>
      </div>
        <Swiper
            onSwiper={setActiveThumb}
            loop={false}
            direction='vertical'
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs col-2'
        >
            {
              projectImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
      <div className='col-5'>
        <ProjectDescription index={index}/>
      </div>
    </>
  )
}

const ProjectDescription = (props) => {
  const projdectIndex = project_description[props.index]
  return (
    <div className='ProjectDescription'>
      <div className='ProjectDescription__bg' style={{backgroundImage:`url(${projdectIndex.bg})`}}>
      </div>
      {
        projdectIndex !== undefined ? 
          (
          <div className='ProjectDescription__content'>
            <h2 className ='title'>{projdectIndex.title}</h2>
            <p>{projdectIndex.des}</p>
            <div className='ProjectDescription__content__skill'>
              
              {projdectIndex.skill.map((item, index)=>(<span key={index}>{item}</span>))}
             
            </div>
            {
              projdectIndex.fuc.map((item , index) => (
                <div>
                  <h3><i class='bx bx-check'></i>{item.title}</h3>
                  <p>{item.des}</p>
                </div>
              ))
            }
            <div>
              <Link to='/'>Github <i class='bx bx-right-arrow-alt' ></i></Link>
              <Link to='/'>View Site <i class='bx bx-right-arrow-alt' ></i></Link>
            </div>
          </div>
        ) : '로딩중'
      }
    </div>
  )
}

export default ProjectSwiper