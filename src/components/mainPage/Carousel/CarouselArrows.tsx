import { Button, Text } from 'components/ui'
import styles from './styles.module.scss'

interface CarouselArrowsProps {
  onPrev: VoidFunction
  onNext: VoidFunction
  activeSlider: number
  sliderCount: number
}

const CarouselArrows = ({ onPrev, onNext, activeSlider, sliderCount }: CarouselArrowsProps) => {
  return (
    <div className={styles['carousel-arrow']}>
      <Button className={styles['carousel-arrow__arrow']} onClick={onPrev} disabled={activeSlider <= 1}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 12L22 12M1 12L11 2M1 12L11 22'
            stroke='#0D1141'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
      <Text className={styles['carousel-arrow__slider-count']}>{activeSlider} / {sliderCount}</Text>
      <Button className={styles['carousel-arrow__arrow']} onClick={onNext} disabled={activeSlider >= sliderCount}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M22 12L1 12M22 12L12 2M22 12L12 22'
            stroke='#0D1141'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
    </div>
  )
}

export default CarouselArrows
