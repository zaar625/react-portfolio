import React, {useState, useEffect} from 'react'
import {Swiper ,SwiperSlide} from 'swiper/react'
import { Thumbs,Navigation } from 'swiper'
import scrollreveal from 'scrollreveal'
import { projectImages ,projectSmallImages} from '../../assets'
import { project_description} from '../../configs/sidebarNav'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './project-swiper.scss'
import { Link } from 'react-router-dom'

const ProjectSwiper = () => {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "100px",
      duration: 3000,
      reset: false,
    });
    sr.reveal(
      `
        .project-swiper__img
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  const [activeThumb, setActiveThumb] = useState()
  const [index, setIndex] = useState(0);
  console.log(index)
  return (
    <>
      <div className='project-swiper__img col-6 col-md-12 '>
        <div className='project-swiper__img__box col-9'>
          <h1>Personal Portfolio</h1>
          <Swiper
              loop={false}
              spaceBetween={10}
              navigation={false}
              modules={[Navigation,Thumbs]}
              grabCursor={true}
              thumbs={{ swiper: activeThumb }}
              className='project-images-slider'
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
          <div className='pageNav'>{index + 1}/{projectImages.length}</div>
        </div>
        <Swiper
            onSwiper={setActiveThumb}
            loop={false}
            direction='vertical'
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='project-images-slider-thumbs col-2'
        >
            {
              projectSmallImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
      <div className='col-5 col-md-12'>
        <ProjectDescription index={index}/>
      </div>
    </>
  )
}

const ProjectDescription = (props) => {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 3000,
      reset: false,
    });

    sr.reveal(
      `
      .ProjectDescription__content__intro,
      .ProjectDescription__content__skills,
      .ProjectDescription__content__fuc
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);



  const projdectIndex = project_description[props.index];
  console.log(projdectIndex)
  return (
    <>
      <div className='ProjectDescription'>
        {
          projdectIndex !== undefined ? 
            (
            <div className='ProjectDescription__content'>
              <div className='ProjectDescription__content__intro'>
                <h2 className =''>{projdectIndex.title}</h2>
                <p>{projdectIndex.des}</p>
              </div>
              <div className='ProjectDescription__content__skills'>
                <h4>Use Skill</h4>
                <div>
                  {projdectIndex.skill.map((item, index)=>(<span key={index}>{item}</span>))}
                </div>
              </div>
              <div className='ProjectDescription__content__fuc'>
                <h4>Detail</h4>
                {
                  projdectIndex.fuc.map((item , index) => (
                    <div key={index}>
                      <h4><i className='bx bx-check-square'></i>{item.title}</h4>
                      <p>{item.des}</p>
                    </div>
                  ))
                }
              </div>
              <div className='ProjectDescription__content__links'>
                <Link to='/'>Github <i class='bx bx-right-arrow-alt' ></i></Link>
                <Link to='/'>View Site <i class='bx bx-right-arrow-alt' ></i></Link>
              </div>
            </div>
          ) : '로딩중'
        }
      </div>
    </>
  )
}

export default ProjectSwiper