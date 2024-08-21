import React from 'react'
import { Advantage, Col, Container, Row, Text } from 'components/ui'
import c1 from 'assets/images/advantages/c1.svg'
import c2 from 'assets/images/advantages/c2.svg'
import c3 from 'assets/images/advantages/c3.svg'
import c4 from 'assets/images/advantages/c4.svg'

const CourierAdvantages = () => {
  const advantages = [
    { title: 'Отсутствие комиссий, штрафов и платных услуг', img: c1 },
    { title: 'Достойное поведение вознаграждается', img: c2 },
    { title: 'Безопасность', img: c3 },
    { title: 'Помощь вознаграждается заработком', img: c4 },
  ]

  return (
    <Container className='offset-top-92'>
      <Text as='p' align='center' size='xl' family='secondary'>
        Преимущества курьера
      </Text>
      <Row row={8} className='offset-top-44' small>
        {advantages.map((v) => (
          <Col sm={4}>
            <Advantage title={v.title} img={v.img as string} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CourierAdvantages
