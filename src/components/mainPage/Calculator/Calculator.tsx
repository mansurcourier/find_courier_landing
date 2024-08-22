import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import cx from 'classnames'
import { $api } from 'http/axios'
import { Button, Container, Input, InputGroup, Select, Text } from 'components/ui'
import styles from './calculator.module.scss'

interface IFormValues {
  from?: string
  destination: string
  weight: string
  length: string
  width: string
  height: string
}

const Calculator = () => {
  const [approximateCost, setApproximateCost] = useState(0)

  const countries = [
    { key: 'russia', value: 'Россия' },
    { key: 'turkey', value: 'Турция' }
  ]

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
    formState: { errors }
  } = useForm<IFormValues>({
    defaultValues: {
      from: countries[0].key,
      destination: countries[1].key,
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

    if (copyData.from) delete copyData.from

    return copyData
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
    <Container>
      <div className={styles.calculator}>
        <div className={styles.left}>
          <Text size='xxl' family='secondary'>
            Калькулятор гарантированной доставки
          </Text>
          <Text as='p' className={cx('offset-top-24', styles.calculator__description)}>
            По некоторым направлениям действует наша сервисная гарантированная доставка!
          </Text>
        </div>
        <div className={styles.right}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup gap={8}>
              <Controller
                name='from'
                control={control}
                rules={{ required: { value: true, message: 'Обязательное поле' } }}
                render={({ field: { name, value, onChange } }) => (
                  <Select
                    name={name}
                    label='Страна отправки'
                    onChange={onChange}
                    value={value}
                    errors={errors}
                    required
                    fluid
                  >
                    {countries.map((value) => (
                      <Select.Option key={value.key} value={value.key}>
                        {value.value}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
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
                    {countries.map((value) => (
                      <Select.Option key={value.key} value={value.key}>
                        {value.value}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
            </InputGroup>
            <InputGroup gap={8} className='offset-top-24'>
              <Input
                name='weight'
                register={register}
                label='Вес, кг'
                rules={inputValidation}
                errors={errors}
                fluid
                required
              />
              <Input
                name='length'
                register={register}
                label='Длина, см'
                rules={inputValidation}
                errors={errors}
                fluid
                required
              />
              <Input
                name='width'
                register={register}
                label='Ширина, см'
                rules={inputValidation}
                errors={errors}
                fluid
                required
              />
              <Input
                name='height'
                register={register}
                label='Высота, см'
                rules={inputValidation}
                errors={errors}
                fluid
                required
              />
            </InputGroup>
            <div className={styles['calculate-delivery']}>
              <div>
                <Text as='p' size='sm'>
                  Примерная стоимость
                </Text>
                <Text as='p' className={styles['calculate-delivery__cost']} color='blue' family='secondary'>
                  {approximateCost} ₽
                </Text>
              </div>
              <Button type='submit' disabled={isPending}>
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
