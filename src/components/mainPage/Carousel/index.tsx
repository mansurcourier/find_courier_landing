import React, { useRef } from 'react'
import { Autoplay } from 'swiper/modules'
// import useMediaQuery from '../../../hooks/useMediaQuery'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Container, Text } from 'components/ui'
import styles from './styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'swiper/css'
import 'swiper/css/autoplay'

const Carousel = () => {
  const ref = useRef<SwiperRef>(null)
  const ref2 = useRef<SwiperRef>(null)
  // const isMobile = useMediaQuery('(max-width: 567px)')

  return (
    <Container id='how-it-work'>
      <div className={styles.carousel}>
        <div className={styles.left}>
          <Swiper
            className={styles.sliderTitles}
            allowTouchMove={false}
            ref={ref2}
            noSwiping={true}
            loop
            autoplay={{
              delay: 3000
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Text as='h2'>
                Находите подходящий груз, который вы готовы доставить
              </Text>
              <Text as='p' className='offset-top-24'>
                Используйте удобный поиск FindCourier для подбора подходящих посылок, которые вы сможете взять с собой
                по пути. Свободная часть в вашем чемодане — отличная возможность превратить поездку в источник
                дополнительного заработка
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text as='h2'>
                Отслеживайте новые посылки по направлениям
              </Text>
              <Text as='p' className='offset-top-24'>
                Подпишитесь на интересующие вас маршруты и отслеживайте новые посылки по направлениям. Получайте
                мгновенные уведомления о предложениях, чтобы всегда быть в курсе выгодных возможностей
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text as='h2'>
                Выбирайте надежного курьера который в срок доставит ваш груз
              </Text>
              <Text as='p' className='offset-top-24'>
                Выбирайте надежного курьера, который гарантированно доставит вашу посылку вовремя, опираясь на его
                высокие оценки, рейтинг и количество успешно выполненных доставок. Этот подход обеспечивает максимальную
                безопасность и точность доставки, предоставляя вам уверенность в качественном сервисе
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text as='h2'>
                Гарантированная доставка вашей посылки от сервиса
              </Text>
              <Text as='p' className='offset-top-24'>
                После подтверждения успешной модерации, вы получите оповещение от попутных курьеров. Если на ваш маршрут
                есть гарантированная доставка от FindCourier, менеджер сразу оповестит вас и рассчитает стоимость
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text as='h2'>
                Зарабатывайте на своих поездках
              </Text>
            </SwiperSlide>
          </Swiper>
          {/*{!isMobile && <CarouselArrows onPrev={onPrev} onNext={onNext} />}*/}
        </div>
        <div className={styles.right}>
          {/*{isMobile && <CarouselArrows onPrev={onPrev} onNext={onNext} />}*/}
          <div className={styles.bg}></div>
          <Swiper
            ref={ref}
            className={styles.slider}
            loop
            noSwiping={true}
            allowTouchMove={false}
            slidesPerView={1}
            autoplay={{
              delay: 3000
            }}
            modules={[Autoplay]}
          >
            {[1, 2, 3].map((i) => (
              <SwiperSlide key={i} className={styles.slider__item}>
                <img
                  src={`/s${i}.png`}
                  alt=''
                  className={styles.carousel__image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  )
}

export default Carousel
