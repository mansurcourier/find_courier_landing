import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import icon1 from 'assets/images/icon-carousel/1.svg'
import icon2 from 'assets/images/icon-carousel/2.svg'
import icon3 from 'assets/images/icon-carousel/3.svg'
import icon4 from 'assets/images/icon-carousel/4.svg'
import icon5 from 'assets/images/icon-carousel/5.svg'
import icon6 from 'assets/images/icon-carousel/6.svg'
import icon7 from 'assets/images/icon-carousel/7.svg'
import icon8 from 'assets/images/icon-carousel/8.svg'
import icon9 from 'assets/images/icon-carousel/9.svg'
import icon10 from 'assets/images/icon-carousel/10.svg'
import icon11 from 'assets/images/icon-carousel/11.svg'
import icon12 from 'assets/images/icon-carousel/12.svg'
import styles from './first-section.module.scss'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const IconCarousel = () => {
  const sliders = [
    { icon: icon1, style: { transform: 'rotate(-15deg)' } },
    { icon: icon2, style: { transform: 'rotate(15deg)' } },
    { icon: icon3, style: { transform: 'rotate(-15deg)' } },
    { icon: icon4, style: { transform: 'rotate(15deg)' } },
    { icon: icon5, style: { transform: 'rotate(-15deg)' } },
    { icon: icon6, style: { transform: 'rotate(15deg)' } },
    { icon: icon7, style: { transform: 'rotate(-15deg)' } },
    { icon: icon8, style: { transform: 'rotate(15deg)' } },
    { icon: icon9, style: { transform: 'rotate(-15deg)' } },
    { icon: icon10, style: { transform: 'rotate(15deg)' } },
    { icon: icon11, style: { transform: 'rotate(-15deg)' } },
    { icon: icon12, style: { transform: 'rotate(15deg)' } }
  ]

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      modules={[FreeMode, Autoplay]}
      className={styles['icon-carousel']}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      speed={5000}
      breakpoints={{
        320: {
          slidesPerView: 5,
          spaceBetween: 15
        },
        375: {
          slidesPerView: 6,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 7,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 9,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 10,
          spaceBetween: 25
        },
        1200: {
          slidesPerView: 10,
          spaceBetween: 32
        }
      }}
      freeMode
      loop
    >
      {new Array(12).fill('').map((_, i) => (
        <SwiperSlide key={i} className={styles['icon-carousel__slider']}>
          <img src={sliders[i].icon as string} className={styles.image} style={{ ...sliders[i].style }} alt='icon' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default IconCarousel
