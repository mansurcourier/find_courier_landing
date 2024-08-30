import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Container, Text } from 'components/ui'
import CarouselArrows from './CarouselArrows'
import styles from './styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'swiper/css'
import 'swiper/css/autoplay'

const textSlidersContent = [
  {
    title: 'Находите подходящий груз, который вы готовы доставить',
    content: 'Используйте удобный поиск FindCourier для подбора подходящих посылок, которые вы сможете взять с собой по пути. Свободная часть в вашем чемодане — отличная возможность превратить поездку в источник дополнительного заработка'
  },
  {
    title: 'Отслеживайте новые посылки по направлениям',
    content: 'Подпишитесь на интересующие вас маршруты и отслеживайте новые посылки по направлениям. Получайте мгновенные уведомления о предложениях, чтобы всегда быть в курсе выгодных возможностей'
  },
  {
    title: 'Выбирайте надежного курьера который в срок доставит ваш груз',
    content: 'Выбирайте надежного курьера, который гарантированно доставит вашу посылку вовремя, опираясь на его высокие оценки, рейтинг и количество успешно выполненных доставок. Этот подход обеспечивает максимальную безопасность и точность доставки, предоставляя вам уверенность в качественном сервисе'
  },
  {
    title: 'Гарантированная доставка вашей посылки от сервиса',
    content: 'После подтверждения успешной модерации, вы получите оповещение от попутных курьеров. Если на ваш маршрут есть гарантированная доставка от FindCourier, менеджер сразу оповестит вас и рассчитает стоимость'
  },
  {
    title: 'Зарабатывайте на своих поездках',
    content: 'Превратите свои поездки в источник дохода с FindCourier! Выбирайте посылки по вашим маршрутам, доставляйте их попутно и зарабатывайте. Чем больше доставок, тем выше ваш рейтинг и доверие клиентов. Путешествуйте с пользой — совмещайте поездки с заработком.'
  }
]

const Carousel = () => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const imageSliderRef = useRef<SwiperRef>(null)
  const textSliderRef = useRef<SwiperRef>(null)

  const handlePrev = useCallback(() => {
    if (!imageSliderRef?.current || !textSliderRef?.current) return
    imageSliderRef.current.swiper.slidePrev()
    textSliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!imageSliderRef?.current || !textSliderRef?.current) return
    imageSliderRef.current.swiper.slideNext()
    textSliderRef.current.swiper.slideNext()
  }, [])


  useEffect(() => {
    if (textSliderRef.current && imageSliderRef.current) {
      imageSliderRef.current.swiper.slideTo(0)
      textSliderRef.current.swiper.slideTo(0)
    }
  }, [])

  return (
    <Container id='how-it-work'>
      <div className={styles.carousel}>
        <div className={styles.left}>
          <Swiper
            ref={textSliderRef}
            modules={[Autoplay]}
            allowTouchMove={false}
            noSwiping={true}
            autoplay={{ delay: 5000 }}
            onSlideChange={({ realIndex }: { realIndex: number }) => setSliderIndex(realIndex)}
            // loop
          >
            {textSlidersContent.map((v) => (
              <SwiperSlide key={v.title}>
                <Text as='h2'>{v.title}</Text>
                <Text as='p' size='lg' className='offset-top-16 offset-sm-top-24'>
                  {v?.content}
                </Text>
              </SwiperSlide>
            ))}
          </Swiper>
          <CarouselArrows onPrev={handlePrev} onNext={handleNext} activeSlider={sliderIndex + 1} sliderCount={5} />
        </div>
        <div className={styles.right}>
          <div className={styles.bg}></div>
          <Swiper
            ref={imageSliderRef}
            modules={[Autoplay]}
            className={styles.slider}
            noSwiping={true}
            allowTouchMove={false}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            // loop
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i}>
                <img src={`/s${i}.png`} alt='' className={styles.carousel__image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  )
}

export default Carousel
