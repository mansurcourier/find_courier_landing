import React from 'react'
import { useWindowSize } from 'hooks'
import { Text } from 'components/ui'
import styles from './advantage.module.scss'

interface IAdvantageProps {
  title: string
  img: string
}

const Advantage = ({ title, img }: IAdvantageProps) => {
  const { deviceWidth } = useWindowSize()

  return (
    <div className={styles.advantage}>
      <img src={img} alt='' />
      <Text size={deviceWidth === 'small' ? 'sm' : 'lg'}>{title}</Text>
    </div>
  )
}

export default Advantage
