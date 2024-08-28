import React, { useState } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { isAndroid, isIOS, isBrowser } from 'react-device-detect'
import { useQuery } from '@tanstack/react-query'
import cx from 'classnames'
import { $api } from 'http/axios'
import { APP_STORE_LINK, GOOGLE_PLAY_LINK } from 'constants/const'
import { useDebounce, useWindowSize } from 'hooks'
import { Button, Container, Input, Col, Row, Select, Text, Modal } from 'components/ui'
import DownloadAppModal from '../FirstSection/DownloadAppModal'
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
  const [showModal, setShowModal] = useState(false)
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
    control,
    register,
    setError,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {
      from: countries[0].key,
      destination: 'turkey',
      weight: '0.5',
      length: '20',
      width: '20',
      height: '20'
    }
  })

  const prepareData = (data: IFormValues) => {
    if (data.destination === data.from) {
      return setError('destination', { message: 'Страны не должны совпадать' })
    }

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

  const watchForm = useWatch({ control })
  const debouncedValue = useDebounce<string>(watchForm as any, 300)

  const { data: approximateCost } = useQuery({
    queryKey: ['getProducts', debouncedValue],
    queryFn: async () => {
      const {
        data,
        status
      } = await $api.get(`/v1/cargo?${new URLSearchParams(prepareData(debouncedValue as any)).toString()}`)
      return status === 200 ? data.data : 0
    },
    retry: 1,
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false
  })

  const fromCountryChange = (data: string) => {
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

  const onOpenDownloadModal = () => {
    if (isBrowser) return setShowModal(true)
    if (!isAndroid) window.open(APP_STORE_LINK, '_blank')
    if (!isIOS) window.open(GOOGLE_PLAY_LINK, '_blank')
  }

  return (
    <Container className='offset-top-92 offset-lg-top-80'>
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
          <form>
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
                  {approximateCost ?? 0} ₽
                </Text>
              </div>
              <Button fluid={deviceWidth === 'small'} onClick={onOpenDownloadModal}>
                Добавить заявку в приложении
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <DownloadAppModal />
      </Modal>
    </Container>
  )
}

export default Calculator
