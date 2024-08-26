import { useState, useEffect } from 'react'
import { mediaBreakpoints as sizes } from 'constants/grid'
import { useEvent } from './useEvent'

interface IUseWindowSize {
  width: IWindowSize
  height: IWindowSize
  size: ISize
  deviceWidth: IDeviceWidth
}

type ISize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | ''
type IDeviceWidth = 'small' | 'medium' | 'large' | ''
type IWindowSize = number | null

export const useWindowSize = (): IUseWindowSize => {
  const [size, setSize] = useState<ISize>('')
  const [deviceWidth, setDeviceWidth] = useState<IDeviceWidth>('')
  const [windowSize, setWindowSize] = useState<{ width: IWindowSize; height: IWindowSize }>({
    width: null,
    height: null
  })

  useEffect(() => {
    if (size === 'xxs' || size === 'xs') setDeviceWidth('small')
    if (size === 'sm') setDeviceWidth('medium')
    if (size === 'md' || size === 'lg' || size === 'xl' || size === 'xxl') setDeviceWidth('large')
  }, [size, setDeviceWidth])

  const setCurrentSize = (width: number) => {
    if (sizes.xs <= width && width < sizes.sm) setSize('xs')
    else if (sizes.sm <= width && width < sizes.md) setSize('sm')
    else if (sizes.md <= width && width < sizes.lg) setSize('md')
    else if (sizes.lg <= width && width < sizes.xl) setSize('lg')
    else if (sizes.xl <= width && width < sizes.xxl) setSize('xl')
    else if (width >= sizes.xxl) setSize('xxl')
    else setSize('xxs')
  }

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    setCurrentSize(window.innerWidth)
  }

  useEffect(() => handleResize(), [])
  useEvent('resize', handleResize)

  return { ...windowSize, size, deviceWidth }
}
