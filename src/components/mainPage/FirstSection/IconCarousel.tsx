import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
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

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules'

const IconCarousel = () => {
  const sliders = [
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
    { icon: icon6 },
    { icon: icon7 },
    { icon: icon8 },
    { icon: icon9 },
    { icon: icon10 },
    { icon: icon11 },
    { icon: icon12 }
  ]

  return (
    <Swiper
      slidesPerView={10}
      spaceBetween={32}
      modules={[FreeMode, Autoplay]}
      className={styles['icon-carousel']}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={5000}
      freeMode
      loop
    >
      {new Array(12).fill('').map((_, i) => (
        <SwiperSlide key={i} className={styles['icon-carousel__slider']}>
          <img src={sliders[i].icon as string} className={styles.image} alt='icon' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default IconCarousel
