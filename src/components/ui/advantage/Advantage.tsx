import React from 'react'
import { Text } from 'components/ui'
import styles from './advantage.module.scss'

interface IAdvantageProps {
  title: string
  img: string
}

const Advantage = ({ title, img }: IAdvantageProps) => (
  <div className={styles.advantage}>
    <img src={img} alt='' />
    <Text>{title}</Text>
  </div>
)

export default Advantage
