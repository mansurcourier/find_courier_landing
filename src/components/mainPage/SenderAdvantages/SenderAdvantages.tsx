import React from 'react'
import { Advantage, Col, Container, Row, Text } from 'components/ui'
import s1 from 'assets/images/advantages/s1.svg'
import s2 from 'assets/images/advantages/s2.svg'
import s3 from 'assets/images/advantages/s3.svg'
import s4 from 'assets/images/advantages/s4.svg'
import s5 from 'assets/images/advantages/s5.svg'

const SenderAdvantages = () => {
  const advantages = [
    { title: 'Доставка со скоростью самолёта', img: s1 },
    { title: 'Разумно–обоснованная цена доставки', img: s2 },
    { title: 'Гарантированно честная модерация', img: s3 },
    { title: 'Возможность оформить гарантии сохранности груза и оплаты документально', img: s4 },
    { title: 'Гарантированно надежные люди', img: s5 }
  ]

  return (
    <Container className='offset-top-150'>
      <Text as='p' align='center' size='xl' family='secondary'>
        Преимущества отправителя
      </Text>
      <Row row={8} className='offset-top-44' small>
        {advantages.map((v) => (
          <Col sm={4}>
            <Advantage title={v.title} img={v.img} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SenderAdvantages
