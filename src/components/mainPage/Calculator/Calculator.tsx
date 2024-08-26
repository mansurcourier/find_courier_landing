import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import cx from 'classnames'
import { $api } from 'http/axios'
import { useWindowSize } from 'hooks'
import { Button, Container, Input, Col, Row, Select, Text } from 'components/ui'
import styles from './calculator.module.scss'

interface IFormValues {
  from?: string
  destination: string
  weight: string
  length: string
  width: string
  height: string
}

interface ICountry {
  key: string
  value: string
}

const countries: ICountry[] = [
  { key: 'russia', value: 'Россия' },
  { key: 'turkey', value: 'Турция' },
  { key: 'vietnam', value: 'Вьетнам' }
]

const Calculator = () => {
  const [approximateCost, setApproximateCost] = useState(0)
  const [fromSelectOption] = useState<ICountry[]>(countries)
  const [destinationSelectOption, setDestinationSelectOption] = useState<ICountry[]>(
    countries.filter((v) => v.key !== countries[0].key)
  )
  const { deviceWidth } = useWindowSize()

  const inputValidation = {
    required: { value: true, message: 'Обязательное поле' },
    pattern: { value: /^\d*[,.]?\d*$/, message: 'Неверный формат' }
  }

  const {
    handleSubmit,
    control,
    register,
    setError,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<IFormValues>({
    defaultValues: {
      from: countries[0].key,
      destination: 'turkey',
      weight: '0.5',
      length: '20',
      width: '20',
      height: '20'
    }
  })

  const { mutate: sendForm, isPending } = useMutation({
    mutationFn: async (formData: Record<string, string>) => {
      return await $api.get(`/v1/cargo?${new URLSearchParams(formData).toString()}`)
    },
    onSuccess: (response: any) => setApproximateCost(response?.data?.data ?? 0),
    onError: () => setApproximateCost(0)
  })

  const prepareData = (data: IFormValues) => {
    const copyData = JSON.parse(JSON.stringify(data))

    Object.keys(copyData).forEach((name) => {
      if (name === 'from' || name === 'destination') return
      // @ts-ignore
      return copyData[name] = Number(copyData[name].replace(',', '.'))
    })

    if (copyData.destination === 'russia') copyData.destination = copyData.from
    if (copyData.from) delete copyData.from

    return copyData
  }

  const fromCountryChange = (data: any) => {
    if (data !== 'russia') {
      setDestinationSelectOption([countries[0]])

      if (getValues('destination') !== 'russia') {
        setValue('destination', 'russia')
      }

      return
    }

    setDestinationSelectOption(countries.filter((v) => v.key !== countries[0].key))
    setValue('destination', 'turkey')
  }

  const onSubmit = (data: IFormValues) => {
    if (data.destination === data.from) {
      return setError('destination', { message: 'Страны не должны совпадать' })
    }

    sendForm(prepareData(data) as unknown as Record<string, string>)
  }

  useEffect(() => {
    sendForm(prepareData(getValues()) as unknown as Record<string, string>)
  }, [])

  return (
    <Container className='offset-top-80'>
      <div className={styles.calculator}>
        <div className={styles.left}>
          <Text
            as='p'
            size='xxl'
            family='secondary'
            align={deviceWidth === 'large' ? 'start' : 'center'}
            whiteSpace={deviceWidth === 'medium' ? 'initial' : 'pre-line'}
          >
            {`Калькулятор\nгарантированной доставки`}
          </Text>
          <Text
            as='p'
            size='lg'
            className={cx('offset-top-12 offset-lg-top-24', styles.calculator__description)}
            align={deviceWidth === 'large' ? 'start' : 'center'}
          >
            По некоторым направлениям действует наша сервисная гарантированная доставка!
          </Text>
        </div>
        <div className={styles.right}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row row={16}>
              <Col xs={6}>
                <Controller
                  name='from'
                  control={control}
                  rules={{ required: { value: true, message: 'Обязательное поле' } }}
                  render={({ field: { name, value, onChange } }) => (
                    <Select
                      name={name}
                      label='Страна отправки'
                      onChange={(data) => {
                        onChange(data)
                        fromCountryChange(data)
                      }}
                      value={value}
                      errors={errors}
                      required
                      fluid
                    >
                      {fromSelectOption.map((value) => (
                        <Select.Option key={value.key} value={value.key}>
                          {value.value}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />
              </Col>
              <Col xs={6}>
                <Controller
                  name='destination'
                  control={control}
                  rules={{ required: { value: true, message: 'Обязательное поле' } }}
                  render={({ field: { name, value, onChange } }) => (
                    <Select
                      name={name}
                      label='Страна доставки'
                      onChange={onChange}
                      value={value}
                      errors={errors}
                      required
                      fluid
                    >
                      {destinationSelectOption.map((value) => (
                        <Select.Option key={value.key} value={value.key}>
                          {value.value}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />
              </Col>
            </Row>
            <Row row={16} className={cx('offset-top-24', styles['small-row'])}>
              <Col xs={6} sm={3} className={styles['small-col']}>
                <Input
                  name='weight'
                  register={register}
                  label='Вес, кг'
                  rules={inputValidation}
                  errors={errors}
                  fluid
                  required
                />
              </Col>
              <Col xs={6} sm={3} className={styles['small-col']}>
                <Input
                  name='length'
                  register={register}
                  label='Длина, см'
                  rules={inputValidation}
                  errors={errors}
                  fluid
                  required
                />
              </Col>
              <Col xs={6} sm={3} className={styles['small-col']}>
                <Input
                  name='width'
                  register={register}
                  label='Ширина, см'
                  rules={inputValidation}
                  errors={errors}
                  fluid
                  required
                />
              </Col>
              <Col xs={6} sm={3} className={styles['small-col']}>
                <Input
                  name='height'
                  register={register}
                  label='Высота, см'
                  rules={inputValidation}
                  errors={errors}
                  fluid
                  required
                />
              </Col>
            </Row>
            <div className={styles['calculate-delivery']}>
              <div>
                <Text as='p' size='sm'>
                  Примерная стоимость
                </Text>
                <Text as='p' className={styles['calculate-delivery__cost']} color='blue' family='secondary'>
                  {approximateCost} ₽
                </Text>
              </div>
              <Button type='submit' disabled={isPending} fluid={deviceWidth === 'small'}>
                Добавить заявку в приложении
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Calculator
