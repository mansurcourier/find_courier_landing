import React, { FC, SVGProps } from 'react'
import { Text } from 'components/ui'
import styles from './advantage.module.scss'

interface IAdvantageProps {
  title: string
  img: FC<SVGProps<SVGElement>>
}

const Advantage = ({ title, img }: IAdvantageProps) => (
  <div className={styles.advantage}>
    {/*@ts-ignore*/}
    <img src={img} alt='' />
    <Text>{title}</Text>
  </div>
)

export default Advantage
