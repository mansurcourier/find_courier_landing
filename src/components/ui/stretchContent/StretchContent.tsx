import React from 'react'

interface IStretchContentProps {
  children: React.ReactNode
  disable?: boolean
}

const StretchContent = ({ children, disable }: IStretchContentProps) => {
  // const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => (scrollWidth > clientWidth) || (scrollHeight > clientHeight)
  // const resizeText = ({ element, elements, minSize = 10, maxSize = 512, step = 1, unit = 'px' }) => {
  //   (elements || [element]).forEach(el => {
  //     let i = minSize
  //     let overflow = false
  //
  //     const parent = el.parentNode
  //
  //     while (!overflow && i < maxSize) {
  //       el.style.fontSize = `${i}${unit}`
  //       overflow = isOverflown(parent)
  //
  //       if (!overflow) i += step
  //     }
  //
  //     // revert to last state where no overflow happened
  //     el.style.fontSize = `${i - step}${unit}`
  //   })
  // }
  //
  // useEffect(() => {
  //   window.addEventListener('resize', () => resizeText({
  //     elements: document.querySelectorAll('.text'),
  //     step: 0.25,
  //     maxSize: 40
  //   }))
  //
  //   resizeText({
  //     elements: document.querySelectorAll('.text'),
  //     step: 0.25
  //   })
  //
  //   return () => {
  //     window.removeEventListener('resize', () => resizeText({
  //       elements: document.querySelectorAll('.text'),
  //       step: 0.25
  //     }))
  //   }
  // }, [])

  console.log('children', children)
  return (
  //   <div className='parent'>
  //   <div className='text-container' data-id='1'>
  //     <span className='text'>This Text is a bit longerand should be wrapped correctly</span>
  //   </div>
  // </div>
  //
  // <div className='parent'>
  //   <div className='text-container' data-id='2'>
  //     <span className='text'>This text</span>
  //   </div>
  // </div>

    <>
      {React.cloneElement(children as React.ReactNode | any, {
        style: { display: 'block'}
      })}
    </>
  )
}

export default StretchContent
